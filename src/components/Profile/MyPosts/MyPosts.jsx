import React from "react";
import myPosts from "./MyPosts.module.css";
import './Post/Post';
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postsElements = props.profilePage.map(p => <Post message={p.message} n_likes={p.likes} id={p.id}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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