import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

export default function Todo(props) {
  const { todo, deleteTodo, idx } = props;
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(idx)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}
