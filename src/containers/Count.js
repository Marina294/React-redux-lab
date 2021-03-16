import React, { Component } from 'react'
import { connect } from 'react-redux'

class Count extends Component {

    // state = {
    //     count: 0
    // }
    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState((previousState) => {
    //             return {
    //                 count: previousState.count + 1
    //             };
    //         });
    //     }, 500)
    // }

    componentDidMount(){
        setInterval(() => {
            this.props.countVal()
        }, 500)
    }

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                <h2>
                    Count: {this.props.cnt}
                </h2>
            </div>
        )
    }
}

// function 
const mapState = (state) => {
    return {
        cnt: state.counter.count
    }
}

const mapDispatch = (dispatch) => {
    return {
        countVal: () => dispatch({type: 'INCREMENT'})

    }
}

export default connect(mapState, mapDispatch)(Count)

