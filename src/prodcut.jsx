import React, { useState } from 'react';

function ProductArray() {
  const [fruits, setFruits] = useState([
    { name: 'Apple', quantity: 0 },
    { name: 'Banana', quantity: 0 },
    { name: 'Orange', quantity: 0 },
  ]);

  const increment = (index) => {
    const updatedFruits = [...fruits];
    updatedFruits[index].quantity++;
    setFruits(updatedFruits);
  };

  const decrement = (index) => {
    if (fruits[index].quantity > 0) {
      const updatedFruits = [...fruits];
      updatedFruits[index].quantity--;
      setFruits(updatedFruits);
    }
  };

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div className="fruit" key={index}>
          <span>{fruit.name}</span>
          <button onClick={() => decrement(index)}>-</button>
          <span>{fruit.quantity}</span>
          <button onClick={() => increment(index)}>+</button>
        </div>
      ))}
    </div>
  );
}

export default ProductArray;
