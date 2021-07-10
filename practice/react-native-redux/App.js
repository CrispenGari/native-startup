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
