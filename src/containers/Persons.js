import React, { Component } from 'react';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../reducers/action'

class Persons extends Component {

    render () {
        console.log(this.props.persons)
        return (
            <div>
                <AddPerson personAdded={() => this.props.addPerson()} />
                {this.props.persons.map((person) => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        id={person.id}
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

//selectors
const mapStateToProps = (state) => {
    // console.log('mapping: ', state)
    return {
        persons: state.people.persons,
    }
}

// dispatch
const mapDispatchToProps = (dispatch) => {
    return{
      addPerson: () => dispatch({ type: actionType.addPerson }),
      deletePerson: (id) => dispatch({ type: actionType.deletePerson, payload: id})
    }
}
      
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(
//         {
//         addPerson: () => {
//             return {
//                 type: 'ADD_PERSON',
//                 payload: {newPerson},
//             }
//         },
//         deletePerson: (id) => {
//             return {
//                 type: 'DELETE_PERSON',
//                 payload: {id},
//             }
//         },
//     }, 
//     dispatch
//     )
// }


export default connect(mapStateToProps, mapDispatchToProps)(Persons);


// const mapDispatchToProps = dispatch => {
//     return{
//         snackUpdate: dispatch(snackUpdate) //argument from ---> import snackUpdate from '../actions/snackDeptUpdate';
//     }
// }
// //the code above is the simplified version of below
// const mapDispatchToProps = dispatch => {
//     return{
//         snackUpdate: (operator, index) => dispatch({ 
//             type: 'UPDATE_SNACKS', 
//             payload: { operator, index } 
//         })
//     }
// }

// export default Persons;