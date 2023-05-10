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
