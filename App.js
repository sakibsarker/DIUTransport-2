import React, { Component } from "react";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
