// import { v4 as uuidv4 } from 'uuid';
import * as actionType from '../reducers/action'


const initialState = {
    persons: []
};

const personReducer = (state = initialState, action) => {

    switch(action.type){
      case actionType.addPerson:
        const newPerson = {
          id: Math.random(),
          name: 'Max',
          age: Math.floor(Math.random() * 40)
        }
        return{
          ...state,
          persons: [...state.persons, newPerson]
        }
      case actionType.deletePerson:
        console.log(action.payload)
        return{                                         
          ...state,
          persons: state.persons.filter((person) => person.id !== action.payload)
        }
      default:
        return state
    }
  };

export default personReducer;




// import * as actionType from '../reducers/action'

// const initialState = {
//     persons: [],
//     // hidden: false
// };


// const personReducer = (state = initialState, action) => {
//     // const newState = [...state.persons];

//     switch(action.type){
//         // case "ADD_PERSON":
//         case actionType.addPerson:
//             const newPerson = {
//                 id: Math.random(),
//                 name: 'max',
//                 age: Math.floor(Math.random()*40)
//             }
//             return {
//                 ...state,
//                 persons: [...state.persons, newPerson]
//                 // persons: state.persons.concat(newPerson)
//                 // count: state.count + 1

//             }
//             // newState.push(action.payload.newPerson);
//             // return {
//             //     ...state,
//             //     persons: newState
//             // };
//             // case "DELETE_PERSON":
//             case actionType.deletePerson:
//                 return{
//                     ...state,
//                     persons: state.persons.filter((person) => person.id !== action.payload)
//                 }
//                 // newState.splice(action.payload.id, 1);
//                 // return {
//                 //     ...state,
//                 //     persons: newState
//                 // };
//             default:
//                 return state
//     }

// export default personReducer;





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