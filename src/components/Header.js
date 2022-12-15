import React, { useState } from 'react';

export default function Header({ mode, setMode }) {
  // const func = () => {
  //   document.body.style.backdgroundColor = 'green';
  // };

  return (
    <>
      <div className={mode ? 'header darkmode' : 'header'}>
        <h1>Notes</h1>
        <button
          className="btn"
          onClick={() => {
            setMode(!mode);
          }}
        >
          Toggle Mode
        </button>
      </div>
      <hr className={mode ? 'hr darkmode' : 'hr'}></hr>
    </>
  );
}
