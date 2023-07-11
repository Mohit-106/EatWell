const stripe = require('stripe')('sk_test_51NO3gASIecd9FjmOKlJGXS3UovhhWh2nu3rGU6iP0ZI5s2JLQcYapNL49oPCL3GBSXKz8UqpjaBJsenKNEUfeeWL00BEFtCZfC');
const express = require('express');
const router = express.Router(); // Use `Router` instead of `express()`

const YOUR_DOMAIN = 'http://localhost:4242';

router.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Specify the accepted payment method (in this case, card)
      line_items: [
        {
          price: 'PRICE_ID', // Replace 'PRICE_ID' with the actual Price ID of the product you want to sell
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.json({ url: session.url }); // Respond with JSON containing the session URL
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating checkout session.'); // Handle error
  }
});

module.exports = router;
