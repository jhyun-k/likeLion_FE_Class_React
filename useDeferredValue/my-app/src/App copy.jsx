import React, { useState } from 'react';

export default function App() {
  let heavyArray = new Array(10000).fill(0);

  const [type, setType] = useState(0);
  const typeChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={typeChange} />
      {heavyArray.map(() => {
        return <div>{type}</div>;
      })}
    </div>
  );
}
