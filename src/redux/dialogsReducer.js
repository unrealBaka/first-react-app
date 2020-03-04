const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessage = action.newMessageText;
            break;
        }
        case SEND_MESSAGE: {

            let newMessage = {
                id: 8,
                message: state.newMessage,
                type: '1'
            };

            state.messages.push(newMessage);
            state.newMessage = '';
            break;
        }
    };


    return state;
};

export const sendNewMessage = () =>({type: SEND_MESSAGE});

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsReducer;