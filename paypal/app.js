const express = require('express')
require('ejs')
require('dotenv').config()
const paypal = require('paypal-rest-sdk')

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': process.env.PAYPAL_CLIENT_ID,
  'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

const app = express()

app.set('view engine', "ejs")

app.get('/', (req, res) => res.render('index'))

app.post('/pay', (req, res) => {
	const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "item",
                "sku": "item",
                "price": "25.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "25.00"
        },
        "description": "Hat for the best team ever"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
	if (error) {
		throw error;
	} else {
		// console.log("Create Payment Response");
		// console.log(payment);
		// res.send('test payment')
		for(let i=0;i < payment.links.length; i++) {
			if (payment.links[i].rel === "approval_url") {
				res.redirect(payment.links[i].href)
			}
		}
	}
});
 
})

app.get('/success', (req, res) => {
	const payerId = req.query.PayerID
	const paymentId = req.query.paymentId

	const execute_payment_json = {
		"payer_id": payerId,
		"transactions": [{
			"amount": {
				"currency": "USD",
				"total": "25.00"
			}
		}]
	}

	paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));
				res.send("success")
    }
});
})

app.get("/cancel", (req, res) => res.send("Cancelled"))

app.listen(3000, () => console.log('Server started'))