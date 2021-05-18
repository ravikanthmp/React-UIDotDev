import React from "react";
import ReactDOM from "react-dom";
import * as styles from './../index.css'

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

export default function Todo () {

    let [items, setItems] = React.useState(() => []);
    let [newItem, setNewItem] = React.useState(() => null);

    let generateRandomId = () => {return "_" + Math.random().toString(36).substr(2, 9)}
    let addItem = () => {
        setItems((prevItems) =>  prevItems.concat({
            name : newItem,
            id : generateRandomId()
        }))
        setNewItem("")
    }

    let removeItem = (id) => {
        setItems((prevItems) =>  prevItems.filter(item => item.id !== id))
    }

    return (
        <div>
            <ul className='grid single-column grid-gap-5'>
                {items.map(item =>{
                    return <li key={item.id}>
                        <span style={{margin : '10px'}}>{item.name}</span>
                        <button onClick={() => removeItem(item.id)}>❌</button>
                    </li>}
                )
                }
            </ul>
            <input id='item' name='item'
                   value={newItem}
                   placeholder='enter item'
                   onChange={(e) => setNewItem(e.target.value)} />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
}