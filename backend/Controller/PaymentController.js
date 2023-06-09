const stripe = require('stripe')('sk_test_51N9QRVBquH5sItVXEvtSKVC29Ly5YKOssK8H3vay79B9WRUkLBYFHaUSHitAv9y55tE0CL0pPRTP962e5FS2aHzU008015w4HI');
const Payment = require('../models/Payment.js');

class PaymentController {
  async processPayment(req, res) {
    try {
      const { amount, currency, description } = req.body;
      console.log(amount, currency, description);
      // Create a payment intent using the Stripe API
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        description,
       
      });

      // Create a new payment instance
      const payment = new Payment({
        amount,
        currency,
        description,
       
      });

      // Save the payment to the database
      await payment.save();

      // Return a success response
      res.status(200).json({ message: 'Payment processed successfully', payment });
      console.log(payment)
    } catch (error) {
      // Handle any errors that occur during the payment process
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PaymentController;