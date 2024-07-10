import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAction, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Id } from "@/convex/_generated/dataModel";
import Dialog from "react-native-dialog";

import * as ImagePicker from "expo-image-picker";

const Page = () => {
  const todos = useQuery(api.todo.all) || [];
  const updateMutation = useMutation(api.todo.update);
  const createMutation = useMutation(api.todo.create);
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState<string | null>(null);

  const images = useQuery(api.upload.images);
  const hiAction = useAction(api.hi.hi);

  React.useEffect(() => {
    (async () => {
      const msg = await hiAction({ name: "John Doe" });
      console.log({ msg });
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!!!image) return;
    const url = `${process.env.EXPO_PUBLIC_CONVEX_SITE}/upload?user=${encodeURIComponent("John Doe")}`;
    // Convert URI to blob
    const response = await fetch(image);
    const blob = await response.blob();
    // Send blob to Convex
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": blob!.type },
      body: blob,
    })
      .then(() => {
        console.log("upload done!");
        setImage(null);
      })
      .catch((err) => console.log("ERROR: ", err))
      .finally(() => setImage(null));
  };

  const update = async (id: Id<"todos">) => {
    await updateMutation({ id });
  };

  const add = async () => {
    await createMutation({ title: text });
    setVisible(false);
    setText("");
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Ionicons name="add" size={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Dialog.Container visible={visible}>
        <Dialog.Title>Create todo</Dialog.Title>
        <Dialog.Description>
          Please enter a valid todo title.
        </Dialog.Description>
        <Dialog.Input
          placeholder="Title"
          value={text}
          onChangeText={setText}
          style={{}}
        />
        <Dialog.Button label="Cancel" onPress={() => setVisible(false)} />
        <Dialog.Button label="Create" onPress={add} />
      </Dialog.Container>
      <View
        style={{
          flex: 1,
        }}
      >
        {todos.map(({ _id, text, isCompleted }) => (
          <TouchableOpacity
            key={_id}
            onPress={() =>
              router.navigate({
                pathname: "[id]",
                params: { id: _id },
              })
            }
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 15,
              backgroundColor: "white",
              paddingHorizontal: 20,
              shadowOffset: { height: 2, width: 0 },
              elevation: 5,
              marginBottom: 2,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>{text}</Text>

            <TouchableOpacity onPress={() => update(_id)}>
              {isCompleted ? (
                <Ionicons name="checkbox-outline" size={25} />
              ) : (
                <View style={{ width: 20, height: 20, borderWidth: 1 }} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
        {!!image ? (
          <TouchableOpacity
            style={{
              padding: 20,
              width: 300,
              backgroundColor: "black",
              marginVertical: 20,
              borderRadius: 999,
              alignSelf: "center",
            }}
            onPress={uploadImage}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              Upload Image
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              padding: 20,
              width: 300,
              backgroundColor: "black",
              marginVertical: 20,
              borderRadius: 999,
              alignSelf: "center",
            }}
            onPress={pickImage}
          >
            <Text
              style={{ color: "white", textAlign: "center", fontWeight: "700" }}
            >
              Select Image
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default Page;
