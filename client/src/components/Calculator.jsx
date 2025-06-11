import { useState } from 'react';
import React from 'react';

const buttons = [
  'AC', '<=', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='
];

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
    } else if (value === '=') {
      try {
        const replaced = input.replace(/×/g, '*').replace(/÷/g, '/');
        setInput(eval(replaced).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === '<='){
        setInput((prev) => prev.slice(0, -1) );
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="bg-black text-white w-80 rounded-2xl overflow-hidden shadow-lg">
      <div className="text-right p-6 text-3xl bg-gray-800">{input || '0'}</div>
      <div className="grid grid-cols-4 gap-2 p-4">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={`p-4 text-xl rounded-lg hover: cursor-pointer
              ${btn === '=' ? 'bg-orange-500' : 'bg-gray-700'} 
              ${btn === '0' ? 'col-span-2' : ''}`}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
