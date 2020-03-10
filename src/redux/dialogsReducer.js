const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi', type: '0'},
        {
            id: 2,
            message: 'How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?How are you?' +
                'How are you?How are you?How are you?How are you?',
            type: '1'
        },
        {id: 3, message: 'Are you okay?', type: '0'},
        {id: 4, message: 'Lalalala', type: '1'},
        {id: 5, message: 'LOL', type: '0'},
        {id: 6, message: 'Privet pudr', type: '1'},
        {id: 7, message: 'No no no!', type: '0'}
    ],
    dialogs: [
        {id: 1, name: 'Rina'},
        {id: 2, name: 'Vlad'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Claud'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'John'},
        {id: 7, name: 'Egor'}
    ],
    newMessage: "New message"
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessage = action.newMessageText;
            return state;
        }
        case SEND_MESSAGE: {

            let newMessage = {
                id: 8,
                message: state.newMessage,
                type: '1'
            };

            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        }
        default: {
            return state;
        }
    }

};

export const sendNewMessage = () =>({type: SEND_MESSAGE});

export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsReducer;