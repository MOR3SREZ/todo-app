import { useEffect, useState } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Side from './components/Side/Side';

function App() {
  const [lists, setLists] = useState([]);

  // getItem if is there any!
  useEffect(() => {
    const json = localStorage.getItem('lists');
    const loadedLists = JSON.parse(json);
    if (loadedLists) {
      setLists(loadedLists);
    }
  }, []);

  // setItem to the local storage
  useEffect(() => {
    if (lists.length !== 0) {
      window.localStorage.setItem('lists', JSON.stringify(lists));
    }
  }, [lists]);

  // console.log(lists);
  return (
    <div className='App'>
      <Side setLists={setLists} />
      <Main lists={lists} setLists={setLists} />
    </div>
  );
}

export default App;
