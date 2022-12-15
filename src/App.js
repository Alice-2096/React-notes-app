import Notes from './components/Notes';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import UserDataContext from './data/UserData';
import Header from './components/Header';

const App = () => {
  const [data, setData] = useState([
    { id: nanoid(), text: 'this is my first note', date: '12-12-2022' },
    { id: nanoid(), text: 'this is my second note', date: '12-12-2022' },
    { id: nanoid(), text: 'this is my third note', date: '12-12-2022' },
  ]);

  const _delete = (id) => {
    setData(data.filter((x) => x.id != id));
  };

  const save = (text) => {
    if (text == '') {
      return;
    }

    let now = new Date().toISOString().slice(0, 10);
    let newNote = { id: nanoid(), text: text, date: now };
    setData([...data, newNote]);
  };

  const [mode, setMode] = useState(false); //false => white; true => black

  return (
    <div className={mode ? 'container darkmode' : 'container'}>
      <Header mode={mode} setMode={setMode}></Header>

      {/* pass both data and setters to its children */}
      <UserDataContext.Provider value={{ data, _delete, save }}>
        <Notes></Notes>
      </UserDataContext.Provider>
    </div>
  );
};

export default App;
