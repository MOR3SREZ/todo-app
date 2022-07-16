import { useState } from 'react';

import styles from './List.module.css';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import Task from './Task/Task';
import AddTask from './AddTask/AddTask';

const List = ({ list, allLists, setLists }) => {
  //material handler
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteHandler = (e) => {
    const temp = allLists.filter((item) => item.id !== e);
    allLists = temp;
    const updatedLists = allLists.map((item) =>
      item.id === list.id ? list : item
    );
    if (updatedLists.length === 0) {
      window.localStorage.clear();
    }
    setLists(updatedLists);
  };
  return (
    <div className={styles.card}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
          sx={{
            backgroundColor: 'cadetblue',
            color: 'white',
          }}
        >
          <Typography
            sx={{
              width: '33%',
              flexShrink: 0,
              fontSize: '1.2rem',
              fontWeight: 500,
            }}
          >
            {list.title}
          </Typography>
          <Typography
            sx={{ color: '#f7f7f7', fontSize: '1rem', fontWeight: 400 }}
          >
            {list.description}
          </Typography>
          <span
            className={styles.delete}
            onClick={() => deleteHandler(list.id)}
          >
            <DeleteIcon />
          </span>
        </AccordionSummary>
        <AccordionDetails>
          {list.tasks &&
            list.tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                allLists={allLists}
                setLists={setLists}
                list={list}
              />
            ))}
          <AddTask list={list} allLists={allLists} setLists={setLists} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default List;
