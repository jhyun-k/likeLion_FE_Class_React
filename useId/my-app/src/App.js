import React, { useId } from 'react';
import Child from './Child';

export default function App() {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>App check</label>
      <input type="checkbox" id={id} />
      <Child />
      <Child />
      <Child />
    </>
  );
}
