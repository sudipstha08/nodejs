const express = require("express");
const paypal = require("paypal-rest-sdk");
const axios = require('axios');
const multer = require('multer');
const fs = require('fs')

const {
	sendPayout,
	getPayout,
	handleOpenAi,
} = require("./controllers/index.js");
require("ejs");
require("dotenv").config();

paypal.configure({
	mode: "sandbox", //sandbox or live
	client_id: process.env.PAYPAL_CLIENT_ID,
	client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

const app = express();
const PORT = 9001;

app.set("view engine", "ejs");

app.get("/payment", (req, res) => res.render("payment"));
app.get("/payout", (req, res) => res.render("payout"));

app.get("/", (req, res) =>
	res.status(200).send(`Server listening at port: ${PORT}`)
);

/**
 * Handle payments
 */
app.post("/pay", (req, res) => {
	const create_payment_json = {
		intent: "sale",
		payer: {
			payment_method: "paypal",
		},
		redirect_urls: {
			return_url: "http://localhost:3000/success",
			cancel_url: "http://localhost:3000/cancel",
		},
		transactions: [
			{
				item_list: {
					items: [
						{
							name: "item",
							sku: "item",
							price: "25.00",
							currency: "USD",
							quantity: 1,
						},
					],
				},
				amount: {
					currency: "USD",
					total: "25.00",
				},
				description: "Hat for the best team ever",
			},
		],
	};
	paypal.payment.create(create_payment_json, function (error, payment) {
		if (error) {
			throw error;
		} else {
			// console.log("Create Payment Response");
			// console.log(payment);
			// res.status(200).send('test payment')
			for (let i = 0; i < payment.links.length; i++) {
				if (payment.links[i].rel === "approval_url") {
					res.redirect(payment.links[i].href);
				}
			}
		}
	});
});

app.get("/success", (req, res) => {
	const payerId = req.query.PayerID;
	const paymentId = req.query.paymentId;

	const execute_payment_json = {
		payer_id: payerId,
		transactions: [
			{
				amount: {
					currency: "USD",
					total: "25.00",
				},
			},
		],
	};

	/**
	 * Payment is done to the business account selected during app creation
	 */
	paypal.payment.execute(
		paymentId,
		execute_payment_json,
		function (error, payment) {
			if (error) {
				console.log(error.response);
				throw error;
			} else {
				console.log("Get Payment Response");
				console.log(JSON.stringify(payment));
				res.status(200).send("success");
			}
		}
	);
});

app.get("/cancel", (req, res) => res.status(200).send("Cancelled"));

// Multer setup
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage: multer.memoryStorage() });

/**
 * Handle payouts
 */
app.post("/payout", sendPayout);
app.post("/get-payout", getPayout);

app.post("/openai", upload.single('audio'), handleOpenAi);

app.listen(PORT || 9000, () => console.log(`Server started at PORT: ${PORT}`));
