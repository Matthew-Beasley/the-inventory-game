import React, { useState } from 'react';
import data from './data';
import './App.css';


function App() {

  const { products } = data;
  const [items, setProducts] = useState(products)

  const add = (id) => {
    items.forEach(item => {
      if (item.id === id && item.numberInStock < 10) {
        item.numberInStock++;
      }
    });
    setProducts([...items])
  }


  const removeElement = (array, element) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === element.id) {
        array.splice(i, 1);
      }
    }
    return array;
  }


  const remove = (id) => {
    items.forEach(item => {
      if (item.id === id && item.numberInStock > 0) {
        item.numberInStock--;
        if (item.numberInStock === 0) {
          removeElement(items, item)
        }
      }
    });
    setProducts([...items])
  }

  return (
    <div className="App">
      <ul>
      {items.map(item => {
        return (
          <li key={item.id}>{item.name} {item.numberInStock}
            <button onClick={(e) => add(item.id)} className="add">Add to Inventory</button>
            <button onClick={(e) => remove(item.id)}className="subtract">Remove from Inventory</button>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
