import React from "react";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Layout from "./layout";

import rootReducers from "./reducers";
const store = createStore(rootReducers);
export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
