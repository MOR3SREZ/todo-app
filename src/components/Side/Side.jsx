import { useEffect, useState } from 'react';

//styles
import styles from './Side.module.css';

const Side = ({ setLists }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //Todo Handel delete function

  //* adding a new list
  const submitHandler = (e) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
      //adding a new list
      const newList = {
        id: new Date().getTime(),
        title,
        description,
        tasks: [],
      };
      setLists((prev) => [...prev, newList]);

      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className={styles.aside}>
      <h1>Insert a new list</h1>
      <form onSubmit={submitHandler}>
        <label>
          Title:
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Insert list title'
          />
        </label>
        <label>
          Description:
          <textarea
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Insert list description'
          />
        </label>
        <button>Add List</button>
      </form>
    </div>
  );
};
export default Side;
