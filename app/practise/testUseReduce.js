import React from 'react';

export default function TestUseReduce(){

    function reducer(initState, value) {
        return initState + value;
    }

    let [state, dispatch] = React.useReducer(reducer, 0);

    return (<div>
        <p>state is {JSON.stringify(state)}</p>
       <p>Current value is {state}</p>
        <button onClick={() => dispatch(1)}>Increment</button>
        <button onClick={() => dispatch(-1)}>Decrement</button>
    </div>)
}