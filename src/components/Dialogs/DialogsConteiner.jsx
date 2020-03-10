import React from "react";
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,
        dialogs: state.messagesPage.dialogs
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageText(text));
        },
        sendNewMessage: () => {
            dispatch(sendNewMessage());
        }
    }
};

const DialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogContainer;