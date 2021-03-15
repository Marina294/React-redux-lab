const personUpdate = (operator, index) => {
    return { 
        type: 'UPDATE_PERSON', 
        payload: {operator, index} 
    }
}

export default personUpdate