import React from "react";
import prof from "./Profile.module.css";
import './MyPosts/MyPosts';
import MyPosts from "./MyPosts/MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profileReducer";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

const Profile = (props) => {
    return (
        <div className={prof.content}>
            <div>
                <img src='https://i.pinimg.com/originals/8c/71/3f/8c713f73f2ae76bffb65246de2100bd5.jpg' alt='img'/>
            </div>
            <div>
                Ata + description
            </div>
            {/*<MyPosts post_bodies={props.profilePage.posts} newPostText={props.profilePage.newPostText}*/}
            {/*         dispatch={props.dispatch}/>*/}
            <MyPostContainer/>
        </div>
    );
}

export default Profile;