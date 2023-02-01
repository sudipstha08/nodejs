const paypal = require('paypal-rest-sdk');

/**
 * 
 * @param req 
 * @param res 
 * SendPayout => Send single payout
 */
 const sendPayout = (req, res) => {
   console.log("Hellooooo")
   var sender_batch_id = Math.random().toString(36).substring(9);

	var create_payout_json = {
			"sender_batch_header": {
					"sender_batch_id": sender_batch_id,
					"email_subject": "You have a payment for your sales",
					"email_message": "You have received a payouts"
			},
			"items": [
					{
							"recipient_type": "EMAIL",
							"amount": {
									"value": 10,
									"currency": "USD"
							},
							"receiver": "sb-je5vc24921338@personal.example.com",
							"note": "Your sales has been paid",
							"sender_item_id": "item_3"
					}
			]
	};
	
	const sync_mode = 'false';
	
	paypal.payout.create(create_payout_json, sync_mode, function (error, payout) {
			if (error) {
					console.log(error);
					res.status(400).send(`Error occured, ${error}`)
			} else {
					console.log("Create Single Payout Response");
					console.log(payout);
               console.log("SENDER BATCH ID: ", payout.batch_header.sender_batch_header.sender_batch_id)
					res.status(200).send({
						data: payout
					})
			}
	});
}

const getPayout = (req, res) => {
   const payoutId = "HK5PZLAZ34RKN"
   paypal.payout.get(payoutId, function (error, payout) {
      if (error) {
         console.log(error);
			res.status(400).send(`Error occured, ${error}`)
      } else {
         console.log("Get Payout Response");
         console.log(JSON.stringify(payout));
         res.status(200).send({
            data: payout
         })
      }
   });
}

/**
 * res -> data -> link -> href => Shows the latest status of a batch payout. Includes the transaction status and other data for individual payout items.
 */

//HK5PZLAZ34RKN

module.exports={ sendPayout, getPayout }