### Convex

In this one we are going to implement the following using expo and convex:

1. real-time database
2. storage
3. cloud-functions

First You need to make sure that you create a new convex project after login at https://dashboard.convex.dev/

We are going to illustrate this by creating a todo app. First we need to setup convex and install it by running the following command:

```shell
npm install convex
```

Then after that we need to run the following command to initialize convex in our app.

```shell
npx convex dev
```

> The above command will generate the `convex` folder and some environmental variables. For the first time you might be asked to login first.

In the root of our project we should wrap our app with the `ConvexProvider` as follows:

```tsx
import "react-native-reanimated";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ConvexProvider client={convex}>
      <Layout />
    </ConvexProvider>
  );
};

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default RootLayout;
```

We are going to make sure that we have the following environmental variables in our `.env` file.

```shell
# Deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=dev:something # team: crispengari, project: todos-6edd7

EXPO_PUBLIC_CONVEX_URL=https://something.convex.cloud
EXPO_PUBLIC_CONVEX_SITE=https://something.convex.site
```

Let's create a file called `todo.jsonl` in the root folder of the project and add the following todo.

```json
{"text": "Buy groceries", "isCompleted": true}
{"text": "Go for a swim", "isCompleted": true}
{"text": "Integrate Convex", "isCompleted": false}
```

After doing that we can then run the following command to create todo in the convex enviroment

```shell
npx convex import --table todos todo.jsonl
```

> You can check on convex you will see that there is a table that was created called `todo` with the todos that are there. Create a file called `schema.ts` in the convex folder and copy the schema on the dashboard and add it there as follows:

```ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // other tables here

  todos: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),
});
```

Let's create a file called `convex/todo.ts` and create some query functions that allows us to get, update, insert and delete todos using our app.

```ts
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const all = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").collect();
  },
});

export const get = query({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    return await db
      .query("todos")
      .filter((q) => q.eq(q.field("_id"), id))
      .first();
  },
});

export const create = mutation({
  args: { title: v.string() },
  handler: async ({ db }, { title }) => {
    await db.insert("todos", {
      isCompleted: false,
      text: title,
    });
    return true;
  },
});

export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    await db.delete(id);
    return true;
  },
});

export const update = mutation({
  args: { id: v.id("todos") },
  handler: async ({ db }, { id }) => {
    const todo = await db
      .query("todos")
      .filter((q) => q.eq(q.field("_id"), id))
      .first();
    await db.patch(id, { isCompleted: !!!todo?.isCompleted });
    return true;
  },
});
```

To generate some types you need to run the following command:

```shell
npx convex dev
# or
npx convex deploy
```

Next we are going to install the `react-native-dialog` package that we are going to use in taking user input from a dialog box as follows:

```shell
npm i react-native-dialog
```

1. Getting all todos

We use a `useQuery` hook as follows

```tsx
const todos = useQuery(api.todo.all) || [];
```

2. Updating the todo

We can use the `useMutation` hook to update the todo based on the id as follows:

```ts
const updateMutation = useMutation(api.todo.update);

const update = async (id: Id<"todos">) => {
  await updateMutation({ id });
};
```

3. Getting a single todo

```ts
const todo = useQuery(api.todo.get, { id: id! });
```

4. Deleting a todo

```ts
const deleteMutation = useMutation(api.todo.remove);
const router = useRouter();
const remove = async () => {
  const val = await deleteMutation({ id: id! });
  if (val) {
    router.replace("/");
  }
};
```

6. Creating a todo.

We will use the `react-native-dialog` to get the todo title from the user. The following code covers all the part of inserting a new todo.

```ts
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Id } from "@/convex/_generated/dataModel";
import Dialog from "react-native-dialog";
const Page = () => {
  const todos = useQuery(api.todo.all) || [];
  const updateMutation = useMutation(api.todo.update);
  const createMutation = useMutation(api.todo.create);
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
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
      </View>
    </>
  );
};

export default Page;
```

### Creating Relations in Convex

Let's say we have a user and his post together with his profile. We can model this in `convex` as follows.

```ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  todos: defineTable({
    isCompleted: v.boolean(),
    text: v.string(),
  }),

  users: defineTable({
    username: v.string(),
    email: v.string(),
  }),

  profiles: defineTable({
    avatar: v.string(),
    bio: v.string(),
    userId: v.id("users"),
  }).index("userId", ["userId"]),

  posts: defineTable({
    image: v.optional(v.string()),
    caption: v.string(),
    userId: v.id("users"),
  }).index("userId", ["userId"]),
});
```

> If you want to read more about relational database you can visit https://stack.convex.dev/functional-relationships-helpers

### File Uploads

In the following code example we are going to implement how to upload a react-native file on convex. First we will need to install the `expo-image-picker` as follows:

```shell
npx expo install expo-image-picker
```

Let's create a table where we are going to upload our images and store them.

```ts
// convex/schema.ts

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ...

  uploads: defineTable({
    url: v.string(),
    user: v.string(),
  }),
});
```

Then we are going to create a mutation for saving the images to that table in the `convex/uploads.ts`

```ts
import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: { url: v.string(), user: v.string() },
  handler: async ({ db }, { url, user }) => {
    await db.insert("uploads", {
      url,
      user,
    });
    return true;
  },
});
```

To upload an image we need to create a server function to do that. We are going to create a `convex/http.ts` file and add the following code to it:

```ts
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
const http = httpRouter();

// Special route for image upload to storage
// Also runs the mutation to add the message to the database
http.route({
  path: "/upload",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const blob = await request.blob();
    const storageId = await ctx.storage.store(blob);
    // Save the storage ID to the database via a mutation
    const user = new URL(request.url).searchParams.get("user");
    await ctx.runMutation(api.upload.create, {
      url: storageId,
      user: user!,
    });

    return new Response(JSON.stringify({ success: true }));
  }),
});

export default http;
```

Now after selecting the image `uri` from local files the upload function will look as follows:

```ts
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
```

Let's create a query function to get the uploaded images.

```ts
// convex/upload.ts
export const images = query({
  args: {},
  handler: async ({ db, storage }) => {
    const images = await db.query("uploads").collect();
    return Promise.all(
      images.map(async (image) => {
        const url = await storage.getUrl(image.url);
        return { ...image, url };
      })
    );
  },
});
```

### Server action

Next we want to create a server action. For that we are going to create a file called `hi.ts` in the convex folder.

```ts
import { v } from "convex/values";
import { action } from "./_generated/server";

export const hi = action({
  args: { name: v.string() },
  handler: async (_, { name }) => {
    return `Hello, ${name}!`;
  },
});
```

To use it we use a hook called `useAction` as follows.

```ts
const hiAction = useAction(api.hi.hi);

React.useEffect(() => {
  (async () => {
    const msg = await hiAction({ name: "John Doe" });
    console.log({ msg });
  })();
}, []);
```

### Refs

1. [convex.dev](https://docs.convex.dev/home)
2. [react-native-dialog](https://www.npmjs.com/package/react-native-dialog)
