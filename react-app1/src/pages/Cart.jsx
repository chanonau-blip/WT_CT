import React from 'react';
import Counter from '../components/Counter';
import Clock from '../components/Clock';

function Cart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-10">
      <Counter />
      <Clock />
    </div>
  );
}

export default Cart;