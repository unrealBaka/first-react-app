import React from "react";
import pStyle from './Post.module.css'

const Post = (props) => {

    return (

        <div className={pStyle.item}>
            {props.message}
            <div>
                <span> {props.n_likes} </span>
                <span>Like</span>
            </div>

        </div>
    );
}

export default Post;