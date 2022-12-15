import React, { useContext, useState } from 'react';
import UserDataContext from '../data/UserData';

export default function AddNote() {
  const [text, setText] = useState('');
  const { save } = useContext(UserDataContext);

  const _save = () => {
    save(text);
    setText('');
  };

  return (
    <div className="note new">
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div className="note-footer">
        <button className="btn" onClick={_save}>
          Save
        </button>
      </div>
    </div>
  );
}
