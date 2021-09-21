import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./MailStyles";
import * as MailComposer from "expo-mail-composer";
const Mail = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  const sendEmail = () => {
    if (emailAddress) {
      //  replace every semicolon with a comma in a string and replace spaces with null string
      const _ = String(emailAddress).replace(";", ",");
      const __ = String(_).split(",");
      let email_addresses = [];
      __.forEach((email_address) => {
        email_addresses.push(String(email_address).trim());
      });
      if (email_addresses.length > 0) {
        (async () => {
          if (await MailComposer.isAvailableAsync()) {
            // send open the mail client intent
            await MailComposer.composeAsync({
              isHtml: false,
              subject: subject,
              body: body,
              attachments: [],
              recipients: email_addresses,
            })
              .then((res) => {
                console.log("The email has been sent,", res);
              })
              .catch((error) => {
                console.log(error);
              })
              .finally(() => {
                console.log("done");
              });
          }
        })();
      }
    }
  };
  return (
    <ScrollView style={styles.mail}>
      <View style={styles.mail__container}>
        <Text style={styles.mail__main}>Welcome.</Text>
        <TextInput
          style={styles.mail__input1}
          placeholder="example1@gmail.com, example1@gmail.com2; example3@gmail.com, "
          value={emailAddress}
          onChangeText={(emails) => setEmailAddress(emails)}
          multiline
          numberOfLines={4}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.mail__input1}
          placeholder="Subject"
          value={subject}
          onChangeText={(subj) => setSubject(subj)}
        />
        <TextInput
          style={styles.mail__input1}
          placeholder="Compose email body..."
          value={body}
          onChangeText={(bdy) => setBody(bdy)}
          multiline
          numberOfLines={4}
        />
        <Text style={styles.mail__text2}>
          Enter email addresses superated by a comma or a semicolon and click
          send button to launch the Mail client.
        </Text>
        <View style={styles.mail__controls}>
          <TouchableOpacity style={styles.mail__button} onPress={sendEmail}>
            <Text style={styles.mail__text1}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Mail;
