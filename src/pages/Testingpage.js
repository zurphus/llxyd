import React from "react";

function Testingpage(){
  return(
    <>
      <h1>Testing page</h1>
    </>
  )
}

export default Testingpage

{/*
import React, { useState } from 'react';
import preSetsData from '../data/pricing-data/pre-sets-data';

function Testingpage() {
  // Create an array of states, one for each item in the data array
  const [itemStates, setItemStates] = useState(Array(preSetsData.length).fill(false));

  // Function to toggle the state of an item
  const toggleItemState = (index) => {
    console.log(itemStates)
    const updatedItemStates = [...itemStates];
    updatedItemStates[index] = !updatedItemStates[index];
    setItemStates(updatedItemStates);
  };

  return (
    <div>
      {preSetsData.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleItemState(index)}>Toggle State</button>
          {itemStates[index] ? <p className='opened'>State is true</p> : <p>State is false</p>}
        </div>
      ))}
    </div>
  );
}

export default Testingpage;
*/}

