import { Link, useLocation, useParams } from 'react-router-dom';

export const ToDoDetails = ({ todos }) => {
  const { todosId } = useParams();
  console.log(todosId);
  const location = useLocation();

  const backToDoLink = location.state?.from ?? '/todos';

  return (
    <div>
      <Link to={backToDoLink}>Back to ToDos</Link>
      {todos.map(
        todo => todo.id === todosId && <p key={todo.id}>{todo.text}</p>
      )}
    </div>
  );
};
