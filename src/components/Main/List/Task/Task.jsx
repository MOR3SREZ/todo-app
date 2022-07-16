import { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

//styles
import styles from './Task.module.css';

const Task = ({ task, allLists, setLists, list }) => {
  const [editText, setEditText] = useState(task.task);
  const [toggleEdit, setToggleEdit] = useState(false);

  const updateList = () => {
    const updatedLists = allLists.map((item) =>
      item.id === list.id ? list : item
    );
    setLists(updatedLists);
  };

  //todo Delete
  const deleteHandler = (e) => {
    const temp = list.tasks.filter((item) => item.id !== e);
    list.tasks = temp;
    console.log(e);
    updateList();
  };

  //Todo done
  const doneHandler = () => {
    if (task.status !== true) {
      task.status = true;
    } else {
      task.status = null;
    }
    list.tasks.map((item) => (item.id === task.id ? task : item));
    updateList();
  };

  //todo not done
  const unDoneHandler = () => {
    if (task.status !== false) {
      task.status = false;
    } else {
      task.status = null;
    }
    list.tasks.map((item) => (item.id === task.id ? task : item));
    updateList();
  };

  //todo edit
  const saveEdit = () => {
    task.task = editText;
    list.tasks.map((item) => (item.id === task.id ? task : item));
    updateList();
  };

  return (
    <div className={styles.task}>
      <div className={styles.editInput}>
        {toggleEdit ? (
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p
            className={`${task.status === null ? styles.title : ''} ${
              task.status === true ? styles['task-done'] : ''
            } ${task.status === false ? styles['task-un-done'] : ''}`}
          >
            {task.task}
          </p>
        )}
      </div>
      <div className={styles.icons}>
        <span
          onClick={() => setToggleEdit((prev) => !prev)}
          className={styles.edit}
        >
          {toggleEdit ? <SaveIcon onClick={saveEdit} /> : <EditIcon />}
        </span>
        <span
          className={`${styles.done} ${task.status && styles.complete}`}
          onClick={doneHandler}
        >
          <DoneIcon />
        </span>
        <span
          className={`${styles.close} ${
            task.status === false && styles.undone
          }`}
          onClick={unDoneHandler}
        >
          <CloseIcon />
        </span>
        <span className={styles.delete} onClick={() => deleteHandler(task.id)}>
          <DeleteIcon />
        </span>
      </div>
    </div>
  );
};
export default Task;
