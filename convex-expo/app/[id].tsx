import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const Page = () => {
  const { id } = useLocalSearchParams<{
    id: Id<"todos">;
  }>();
  const deleteMutation = useMutation(api.todo.remove);
  const updateMutation = useMutation(api.todo.update);
  const router = useRouter();
  const update = async (id: Id<"todos">) => {
    await updateMutation({ id });
  };

  const todo = useQuery(api.todo.get, { id: id! });
  const remove = async () => {
    const val = await deleteMutation({ id: id! });
    if (val) {
      router.replace("/");
    }
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={remove}>
              <Ionicons name="remove" size={30} />
            </TouchableOpacity>
          ),
          headerTitle: todo?.text || "Todo",
        }}
      />
      <View style={{ flex: 1 }}>
        {!!todo ? (
          <View
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
            <Text style={{ fontWeight: "700", fontSize: 20 }}>{todo.text}</Text>

            <TouchableOpacity onPress={() => update(todo._id)}>
              {todo.isCompleted ? (
                <Ionicons name="checkbox-outline" size={25} />
              ) : (
                <View style={{ width: 20, height: 20, borderWidth: 1 }} />
              )}
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ padding: 20, textAlign: "center" }}>
            404: No todo of id {id}.
          </Text>
        )}
      </View>
    </>
  );
};

export default Page;
