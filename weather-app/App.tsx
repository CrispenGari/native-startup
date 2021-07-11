import React from "react";

import rootReducers from "./reducers";
import { Provider } from "react-redux";
import Layout from "./Layout/Layout";
import { createStore } from "redux";

const store = createStore(rootReducers);
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
