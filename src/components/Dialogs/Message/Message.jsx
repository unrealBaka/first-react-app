import React from "react";
import messageStyle from "./Message.module.css";


const Message = (props) => {
    // debugger;
    //checking message type. Is it my message or not.
    let my_message =  props.type == 0 ? messageStyle.them : messageStyle.me;

    return (

            <div className={messageStyle.item + ' ' + my_message}>
                <div className={messageStyle.avatar}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlcX1T4nNKsqLZ5zcIRu3YOtVfH81u4BZNdLiIcJOtQiqXJi9Z"/>
                </div>
                <div className={messageStyle.message}> {props.message}
                    <span className={messageStyle.time}> 11:23 </span>
                </div>
            </div>
    );
}

export default Message;