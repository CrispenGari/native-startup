import React from "react";

import rootReducers from "./reducers";
import { Provider } from "react-redux";
import Layout from "./Layout/Layout";
import { createStore } from "redux";
import { LogBox, YellowBox } from "react-native";

const store = createStore(rootReducers);

YellowBox.ignoreWarnings;
LogBox.ignoreLogs;
LogBox.ignoreAllLogs;
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
