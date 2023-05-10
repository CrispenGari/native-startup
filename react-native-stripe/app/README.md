### app

In this `app` we are going to use a library called `@stripe/stripe-react-native` to create a payment system using stripe.js. We will be consuming the api that is running locally at port `3001`. First things first we need to install `@stripe/stripe-react-native` by running the following command:

```shell
npx expo install @stripe/stripe-react-native
```

In our `App.tsx` we need to wrap the app in a `StripeProvider` as follows:

```ts
import React from "react";
import { StripeProvider } from "@stripe/stripe-react-native";
import StripeApp from "./StripeApp";
import { PUBLISHABLE_KEY } from "./keys";

const App = () => {
  return (
    <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <StripeApp />
    </StripeProvider>
  );
};

export default App;
```

The `PUBLISHABLE_KEY` is the key that we got on [Stripe Dashboard](https://dashboard.stripe.com/dashboard).

In the `StripeApp.ts` file we are going to have the following code in it:

```ts

```

### References

1. [stripe](https://docs.expo.dev/versions/latest/sdk/stripe/)
