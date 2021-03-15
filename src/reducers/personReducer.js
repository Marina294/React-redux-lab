
//initialize a state
const newPerson = {
    id: Math.random(), // not really unique but good enough here!
    name: 'Max',
    age: Math.floor( Math.random() * 40 )
}
// this.setState( ( prevState ) => {
//     return { persons: prevState.persons.concat(newPerson)}
// } );


  //create a reducer

const personReducer = (state = newPerson, action) => {

// only javascript no redux
if(action.type === 'ADD_PERSON'){
    const newState = [...state]; 

    return newState
    } else {
    // allways return state
    return state      
    }
}

export default personReducer; 






// //initialize a state
// const initState = {
//     todos: [],
//     users: []
//   }

//   //create a reducer
//   const myReducer = (state = initState, action) => {
//     switch(action.type){
//       case 'ADD_TODO':   
//         return {
//           ...state,
//           todos: [...state.todos, action.payload]
//         }
//       case 'SIGN_IN':
//         return {
//           ...state,
//           users: [...state.users, action.payload]
//         }
//       default:
//         return state
//     }
//   }