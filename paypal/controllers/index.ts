const paypal = require('paypal-rest-sdk');

/**
 * 
 * @param req 
 * @param res 
 * SendPayout => Send single payout
 */
 const sendPayout = (req, res) => {
   console.log("req", req)
   var sender_batch_id = Math.random().toString(36).substring(9);

	var create_payout_json = {
			"sender_batch_header": {
					"sender_batch_id": sender_batch_id,
					"email_subject": "You have a payment for your sales",
					"email_message": "You have received a payout"
			},
			"items": [
					{
							"recipient_type": "EMAIL",
							"amount": {
									"value": 100,
									"currency": "USD"
							},
							"receiver": "test554433@mailinator.com",
							"note": "Your sales has been paid",
							"sender_item_id": "item_3"
					}
			]
	};
	
	const sync_mode = 'false';
	
	paypal.payout.create(create_payout_json, sync_mode, function (error, payout) {
			if (error) {
					console.log(error.response);
					res.status(400).send("Error occured", error)
			} else {
					console.log("Create Single Payout Response");
					console.log(payout);
					res.status(200).send({
						data: payout
					})
			}
	});
}

module.exports={ sendPayout}