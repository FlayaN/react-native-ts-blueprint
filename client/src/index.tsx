import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { User } from "./modules";
import { StartPage } from "./pages";

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers<StoreDef>({
    [User.NAME]: User.Reducer
});

var defaultStore: StoreDef = {
    User: {
        Name: "User1"
    }
};

var store = createStore<StoreDef>(rootReducer, defaultStore, middleware);

export default class App extends Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <StartPage />
            </Provider>
        );
    }
}