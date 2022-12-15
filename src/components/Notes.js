import React, { useContext } from 'react';
import UserDataContext from '../data/UserData';
import AddNote from './AddNote';
import Note from './Note';

export default function Notes() {
  const { data } = useContext(UserDataContext);

  return (
    <div className="notes-list">
      {data.map((x) => (
        <Note id={x.id} text={x.text} date={x.date}></Note>
      ))}
      <AddNote></AddNote>
    </div>
  );
}
