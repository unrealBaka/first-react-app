import React from "react";
import  prof from "./Profile.module.css";
import './MyPosts/MyPosts';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={prof.content}>
            <div>
                <img src='https://lh3.googleusercontent.com/proxy/zp5c9I91SoGQzljgJOMcc-xKRaNXdYtr78B87Drob2Cc-4AHXbwLc79VZOp2dEm9HyDN973h4N1Sb8x_VvVaYaUhxyhEmGSY8agxFLNuGpoS' alt='img'/>
            </div>
            <div>
                Ata + description
            </div>
           <MyPosts post_bodies={props.state.posts}/>
        </div>
    );
}

export default Profile;