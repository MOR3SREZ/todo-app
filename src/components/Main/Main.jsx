import List from './List/List';
import styles from './Main.module.css';

const Main = ({ lists, setLists }) => {
  return (
    <div className={styles.lists}>
      {lists ? (
        lists.map((list) => (
          <List
            list={list}
            allLists={lists}
            setLists={setLists}
            key={list.id}
          />
        ))
      ) : (
        <h1>There is no list!</h1>
      )}
    </div>
  );
};
export default Main;
