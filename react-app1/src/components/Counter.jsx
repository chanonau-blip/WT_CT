import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center bg-blue-50 w-52 h-44 rounded-2xl shadow-sm">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => setCount(count - 1)}
          className="w-7 h-7 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded font-bold"
        >
          -
        </button>
        <span className="text-xl font-bold text-blue-500">{count}</span>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="w-7 h-7 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;