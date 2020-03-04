import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '0', message: 'My first post', likes: '150'},
                {id: '1', message: 'I have a grate idea', likes: '10'},
                {id: '2', message: 'Sun is shining', likes: '3'},
                {id: '3', message: 'My heart is go ooooon', likes: '52'},
                {id: '4', message: 'Turutut tu tut ut utu t', likes: '1500'},
            ],
            newPostText: "Vlads application"
        },
        messagesPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer pattern
    },
    _callSubscriber() {
        console.log("State was changed!");
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(PostText) {
    //     this._state.profilePage.newPostText = PostText;
    //     this._callSubscriber(this._state);
    // },
    dispatch(action) {
        // debugger;
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }

};

window.state = store;
export default store;
