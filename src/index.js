import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {updateNewMessageText} from "./redux/state";
import {sendMessage} from "./redux/state";

let reRenderEntireTree = (state) => {

    ReactDOM.render(<App state={state} updateNewPostText={updateNewPostText} addPost={addPost}
                         updateNewMessage={updateNewMessageText}
                         sendMessage={sendMessage}/>, document.getElementById('root'));

};

reRenderEntireTree(state);

subscribe(reRenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
