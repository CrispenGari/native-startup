### Redux + React Native

This repository contains the code to set up redux and react native.

1. Create reducers and actions as usual.

- Check `reducer` and `actions` folders for code.

2. Create a `Layout.jsx` which now acts as our `App.js`

```jsx
import React from "react";
import { StyleSheet } from "react-native";
import Home from "./screens/Home/Home";

const Layout = () => {
  return <Home />;
};
export default Layout;
```

3. In the `App.js` setup the store and the Provider. Wrap the `Layout` using the `Provider` as usual.

```jsx
import React from "react";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import { createStore } from "redux";
import Layout from "./Layout";
const store = createStore(rootReducers);
const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
```

4. For demonstration we are going to create a Login, Logout and a Increment, Decrement buttons that will dispatch actions to the `redux` store in the `Home.jsx`:

```js
import React from "react";
import { Text, View, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import actions from "../../actions";
const Home = () => {
  const user = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.setCounter(1));
  };
  const decrement = () => {
    dispatch(actions.setCounter(-1));
  };
  const login = () => {
    dispatch(
      actions.setUser({
        username: "username",
        email: "user@gmail.com",
        age: 23,
      })
    );
  };
  const logout = () => {
    dispatch(actions.setUser(null));
  };
  return (
    <View>
      {user ? (
        <Text>{JSON.stringify(user, null, 2)}</Text>
      ) : (
        <Text>To see the user info Login.</Text>
      )}
      <View style={{ height: 10 }} />
      <Button title="increment" onPress={increment} />
      <View style={{ height: 10 }} />
      <Button title="decrement" onPress={decrement} />

      <View style={{ height: 10 }} />
      <Button title="login" onPress={login} />
      <View style={{ height: 10 }} />
      <Button title="logout" onPress={logout} />
      <View style={{ height: 10 }} />
      <Text>COUNTER: {counter}</Text>
    </View>
  );
};

export default Home;
```

That's how we can set up a redux store.
