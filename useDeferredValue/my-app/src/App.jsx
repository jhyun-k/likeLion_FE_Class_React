import React, { useState, useDeferredValue } from 'react';

export default function App() {
  let heavyArray = new Array(10000).fill(0);

  const [type, setType] = useState(0);
  let deferredType = useDeferredValue(type);
  const typeChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={typeChange} />
      {heavyArray.map(() => {
        return <div>{deferredType}</div>;
      })}
    </div>
  );
}
