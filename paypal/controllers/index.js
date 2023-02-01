const paypal = require('paypal-rest-sdk');

function fetchPayoutDetails (payoutId) {
  return new Promise(function(resolve,reject) {
     paypal.payout.get(payoutId, async function (error, payout) {
      if (error) {
         console.log("Error while fetching payout details: ",error);
         reject(error)
      } else {
         console.log("Get Payout Details Response: ", payout);
         resolve(payout)
      }
   });
  })
}

/**
 * 
 * @param req 
 * @param res 
 * SendPayout => Send single payout
 */
 const sendPayout =async (req, res) => {
 	/**
     * Create unique batch ID to prevent duplicate batch from being sent
	  * ---------------------------------------------------------------------
	  * PayPal prevents duplicate batches from being processed. 
	  * If you specify a sender_batch_id that was used in the last 30 days, 
	  * the API rejects the request and returns an error message 
	  * that indicates the duplicate sender_batch_id and includes a HATEOAS link 
	  * to the original batch payout with the same sender_batch_id. 
	  * If you receive an HTTP 5nn status code, you can safely retry the request
	  * with the same sender_batch_id. The API completes a payment only once for 
	  * a specific sender_batch_id that is used within 30 days.
     */	
	const sender_batch_id = (Math.random() * 0xfffff * 1000000000).toString(16).slice(0, 13).toUpperCase()	

	const create_payout_json = {
			"sender_batch_header": {
					"sender_batch_id": sender_batch_id,
					"email_subject": "You have a payment for your sales",
					"email_message": "You have received a payouts"
			},
			"items": [
					{
							"recipient_type": "EMAIL",
							"amount": {
									"value": 1,
									"currency": "USD"
							},
							"receiver": "sb-je5vc24921338@personal.example.com",
							"note": "Your sales has been paid",
							"sender_item_id": "fsjfsk3434r5"
					}
			]
	};
	
	/**
	 * SYNC_MODE is deprecated
	 */
	const sync_mode = 'false';
	
	 paypal.payout.create(create_payout_json, sync_mode, async function (error, payout) {
			if (error) {
					console.log(error);
					res.status(400).send(`Error occured, ${error}`)
			} else {
					console.log("Create Single Payout Response");
					console.log(payout);
          console.log("SENDER BATCH ID: ", payout.batch_header.sender_batch_header.sender_batch_id)
					const payoutDetails =  await fetchPayoutDetails(payout?.batch_header?.payout_batch_id)
          console.log("payoutDetails===>", payoutDetails)
					res.status(200).send({
						data: {payout, payoutDetails},
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
//https://www.npmjs.com/package/paypal-rest-sdk