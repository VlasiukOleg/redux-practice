import { Link, useLocation } from 'react-router-dom';
import { DoListItem, DoItemText, DoListBtnDelete } from './ToDo.styled';

export const ToDo = ({ todo, onDeleteToDo, onToogleCompleted }) => {
  const location = useLocation();
  return (
    <DoListItem key={todo.id} checked={todo.completed}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          onToogleCompleted(todo.id);
        }}
      />
      <Link to={todo.id} state={{ from: location }}>
        <DoItemText checked={todo.completed}>{todo.text}</DoItemText>
      </Link>

      <DoListBtnDelete
        disabled={!todo.completed}
        type="button"
        onClick={() => onDeleteToDo(todo.id)}
      >
        delete
      </DoListBtnDelete>
    </DoListItem>
  );
};
