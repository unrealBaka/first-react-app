import React from "react";
import dialogStyle from "./Dialogs.module.css";
import DialogUsers from "./DialogUsers/DialogUsers";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map( dialog => <DialogUsers name={dialog.name} id={dialog.id}/>);

    let messageElements = props.state.messages.map(messageDate => <Message message={messageDate.message} type={messageDate.type}/>);

    let messageBody = React.createRef();

    let sendMessage = () => {
        let messageText = messageBody.current.value;
        alert(messageText);
    };

    return (
        <div className={dialogStyle.dialogs}>
            <div className={dialogStyle.dialogsItems}>

                {
                    dialogsElements
                }

            </div>
            <div className={dialogStyle.messages}>
                {
                    messageElements
                }
            </div>
            <div className={dialogStyle.textBox}>
                <textarea ref={messageBody}></textarea>
                <button onClick={sendMessage}> Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;