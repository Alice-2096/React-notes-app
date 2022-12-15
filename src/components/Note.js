import React, { useContext, useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import UserDataContext from '../data/UserData';

export default function ({ id, text, date }) {
  const { _delete } = useContext(UserDataContext);

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => _delete(id)}
        ></MdDeleteForever>
      </div>
    </div>
  );
}
