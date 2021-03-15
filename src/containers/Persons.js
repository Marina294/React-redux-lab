import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import personUpdate from '../actions/personUpdate';

class Persons extends Component {
    state = {
        persons: []
    }

    personAddedHandler = () => {
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.concat(newPerson)}
        } );
    }

    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.personAddedHandler} />
                {this.state.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.person
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        personUpdate: personUpdate
    }, dispatch)
}


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