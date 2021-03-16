import { v4 as uuidv4 } from 'uuid';

const initState = {
    posts: [
        {id: uuidv4(), author: 'user-1', title: 'Post 1'},
        {id: uuidv4(), author: 'user-2', title: 'Post 2'},
        {id: uuidv4(), author: 'user-3', title: 'Post 3'},
        {id: uuidv4(), author: 'user-4', title: 'Post 4'},
        {id: uuidv4(), author: 'user-5', title: 'Post 5'},
    ]
}

const postReducer = (state = initState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default postReducer