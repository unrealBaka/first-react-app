import React from "react";
import myPosts from "./MyPosts.module.css";
import './Post/Post';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.post_bodies.map(p => <Post message={p.message} n_likes={p.likes} id={p.id}/>);
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
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