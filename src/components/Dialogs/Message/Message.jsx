import React from "react";
import messageStyle from "./Message.module.css";


const Message = (props) => {
    return (

        <div className={messageStyle.item}> {props.message} </div>
    );
}

export default Message;