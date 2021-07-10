import "react-native-gesture-handler";
import * as React from "react";
import Screens from "./screens";
import { AuthProvider } from "./AuthProvider";
import reducer, { initialState } from "./reducers";
const App = () => {
  return (
    <AuthProvider initialState={initialState} reducer={reducer}>
      <Screens />
    </AuthProvider>
  );
};

export default App;
