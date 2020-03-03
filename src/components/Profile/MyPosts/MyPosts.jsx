import React from "react";
import myPosts from "./MyPosts.module.css";
import './Post/Post';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.post_bodies.map(p => <Post message={p.message} n_likes={p.likes} id={p.id}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        // debugger;
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    return (
        <div>
            My Posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div>
                {
                    postsElements
                }
            </div>
        </div>
    );
}

export default MyPosts;