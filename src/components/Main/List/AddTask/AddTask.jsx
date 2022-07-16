import { useState } from 'react';
import styles from './AddTask.module.css';

const AddTask = ({ list, allLists, setLists }) => {
  const [task, setTask] = useState('');

  const clickHandler = () => {
    if (task !== '') {
      const newTask = {
        id: new Date().getTime(),
        task,
        status: null,
      };
      list.tasks.push(newTask);
      const updatedLists = allLists.map((item) =>
        item.id === list.id ? list : item
      );
      setLists(updatedLists);
      setTask('');
    }
  };

  return (
    <div className={styles.tasks}>
      <label>
        Add a task:
        <input
          type='text'
          placeholder='Add a task'
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
      </label>
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};
export default AddTask;
