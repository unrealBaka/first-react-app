const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: '0', message: 'My first post', likes: '150'},
            {id: '1', message: 'I have a grate idea', likes: '10'},
            {id: '2', message: 'Sun is shining', likes: '3'},
            {id: '3', message: 'My heart is go ooooon', likes: '52'},
            {id: '4', message: 'Turutut tu tut ut utu t', likes: '1500'},
        ],
        newPostText: "Vlads application"
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default: {
            return state;
        }

    }


};

export const  addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;