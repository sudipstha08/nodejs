require("dotenv").config();
const cors = require('cors')
const bodyParser = require('body-parser')

const express = require("express");
const app = express();

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith('/webhook')) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.use(express.static("public"));
app.use(cors({
	origin: '*'
}))

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
	[
		1,
		{
			priceInCents: 10000,
			name: "Learn React Today",
		},
	],
	[
		2,
		{
			priceInCents: 20000,
			name: "Learn CSS Today",
		},
	],
]);

app.post("/create-checkout-session", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: 'payment',
			line_items: req.body.items.map(item => {
				const storeItem = storeItems.get(item.id)
				return {
					price_data: {
						currency: 'usd',
						product_data: {
							name: storeItem.name
						},
						unit_amount: storeItem.priceInCents
					},
					quantity: item.quantity
				}
			}),
			success_url: `${process.env.CLIENT_URL}/success.html`,
			cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
		});
		res.json({ url: session.url });
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});


app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
  const payload = request.rawBody;

	console.log("payload=======>", payload)
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = await stripe.webhooks.constructEvent(payload, sig, "whsec_e06651b76a89c663adb0f784c2b795fdbfe934a634301f2fd890f086167e90c4");
 console.log("event====>",event)
	} catch (err) {
		console.log("erri", err)
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

	console.log("event type===>", event.type)

	// Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
		console.log("Herlloooo")
    // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    // const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
    //   event.data.object.id,
    //   {
    //     expand: ['line_items'],
    //   }
    // );

  }

  response.status(200).end();
});

const PORT = 2000

app.listen(PORT, () => {
	console.log("Server running on port", PORT)
});
