import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ListeLivres from "./app/ListeLivres";
import globalReducer from "./app/reducers";

const store = createStore(globalReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ListeLivres />
      </Provider>
    );
  }
}
