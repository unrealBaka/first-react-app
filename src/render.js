import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";

export let reRenderEntireTree= (state) =>{

    ReactDOM.render(<App  state = {state} updateNewPostText={updateNewPostText} addPost={addPost} />, document.getElementById('root'));

};

