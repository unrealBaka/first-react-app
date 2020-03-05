import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
});

let store = createStore(reducersPack);

export default store;