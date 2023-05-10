import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import {
  CardField,
  CardFieldInput,
  useConfirmPayment,
} from "@stripe/stripe-react-native";

const SERVER_PAYMENT_URL: string =
  "https://8975-102-66-183-220.ngrok-free.app/create-payment-intent";

const StripeApp = () => {
  const { confirmPayment, loading } = useConfirmPayment();

  const [state, setState] = React.useState<{
    details: CardFieldInput.Details | null;
    email: string;
  }>({
    email: "",
    details: null,
  });

  const pay = async () => {
    const { email, details } = state;
    if (!details || !email || !details.complete) {
      Alert.alert(
        "Payment Error",
        "Please enter Complete card details and Email",
        [{ style: "destructive", text: "OK" }]
      );
      return;
    }

    try {
      const res = await fetch(SERVER_PAYMENT_URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error, secrete } = await res.json();
      if (error) {
        Alert.alert("Payment Error", error, [
          { style: "destructive", text: "OK" },
        ]);
        return;
      }
      console.log({ details });
      const { paymentIntent, error: e } = await confirmPayment(secrete, {
        paymentMethodType: "Card",
        paymentMethodData: {},
      });
      if (e) {
        Alert.alert("Payment Confirmation Error", e.message, [
          { style: "destructive", text: "OK" },
        ]);
        return;
      } else if (paymentIntent) {
        Alert.alert("Payment Successful", "You have paid our app", [
          { style: "destructive", text: "OK" },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{
            position: "relative",
            backgroundColor: "cornflowerblue",
            width: 300,
            margin: 10,
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              width: 50,
              alignItems: "center",
              height: 20,
              backgroundColor: "black",
              position: "absolute",
              justifyContent: "center",
              borderRadius: 999,
              top: -10,
              left: 300 / 2 - 25,
            }}
          >
            <Text style={{ color: "white", fontWeight: "400" }}>$10.99</Text>
          </View>
          <TextInput
            autoCapitalize="none"
            placeholder="E-mail"
            keyboardType="email-address"
            value={state.email}
            onChangeText={(value) =>
              setState((state) => ({ ...state, email: value }))
            }
            style={{
              backgroundColor: "#f5f5f5",
              marginVertical: 20,
              padding: 10,
              fontSize: 20,
              borderRadius: 5,
            }}
          />
          <CardField
            postalCodeEnabled={true}
            cardStyle={{ backgroundColor: "#efefefef" }}
            style={{ height: 50, marginVertical: 5 }}
            placeholders={{
              number: "4242 4242 4242 4242",
              expiration: "exp",
              cvc: "cvc",
              postalCode: "pcode",
            }}
            onCardChange={(cardDetails) =>
              setState((state) => ({ ...state, details: cardDetails }))
            }
          />
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 10,
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
            activeOpacity={0.7}
            disabled={loading}
            onPress={pay}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Pay</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default StripeApp;
