import React, { useId } from 'react';

export default function Child() {
  const id = useId();

  return (
    <>
      <br />
      <label htmlFor={id}>Child Check</label>
      <input type="checkbox" id={id} />
    </>
  );
}
