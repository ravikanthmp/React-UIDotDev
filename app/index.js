import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Theme from "./practise/Theme";
import Todo from "./practise/todoList";
import TestUseReduce from "./practise/testUseReduce";

function Hello() {
    return <div>
        Hi! from hooks
    </div>
}

// ReactDOM.render(
//     <Theme/>,
//     document.getElementById('app')
// )
ReactDOM.render(
    <TestUseReduce/>,
    document.getElementById('app')
)