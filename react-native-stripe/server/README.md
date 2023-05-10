### stripe.js

In this one we are going to learn how we can create a server that will handle payments in `stripe.js`

First we need to install `stripe` by running the following command:

```shell
yarn add stripe
```

Then next we need to get the keys. Go go [Stripe Dashboard](https://dashboard.stripe.com/dashboard). Get the `Publishable key` and `Secret key` and put them in your `.env` file

```shell
PUBLISHABLE_KEY = <your key>
SECRETE_KEY = <your key>
```

TESTING CARDS NUMBERS:

1. Successful payment - `4242424242424242`
2. Failed payment - `4000000000009995`
3. Requires authentication - `4000002500003155`

You can get other card numbers [here.](https://stripe.com/docs/testing)

Next we will create a stripe instance in the `src/stripe/index.ts` file and add the following code in it:

```ts
import Stripe from "stripe";
export const stripe = new Stripe(process.env.SECRETE_KEY as string, {
  apiVersion: process.env.API_VERSION as any,
  port: process.env.PORT || 3001,
});
```

Now let's create a route that will handle payments in the `src/routes/index.ts`

```ts
router.post("/create-payment-intent", async (_req: Request, res: Response) => {
  try {
    const intent = await stripe.paymentIntents.create({
      payment_method_types: ["card"],
      amount: 1099, // $10.99
      currency: "usd",
    });
    const secrete = intent.client_secret;
    return res.status(200).json({ secrete });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
    });
  }
});
```

Now when making payments to the server we just need to make a `post` request to `http://localhost:3001/create-payment-intent`

### Refs

1. [stripe](https://github.com/stripe/stripe-node)
