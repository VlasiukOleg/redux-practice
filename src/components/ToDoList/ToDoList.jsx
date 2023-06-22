import { DoList, DoListInfo } from './ToDOList.styled';
import { ToDo } from 'components/ToDo/ToDo';

export const ToDoList = ({ todos, onDeleteToDo, onToogleCompleted }) => {
  const competedToDo = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0
  );
  return (
    <>
      <DoListInfo>
        <p>Загальна кількість ToDO:{todos.length}</p>
        <p>Скільки виконали ToDO: {competedToDo}</p>
      </DoListInfo>
      <DoList>
        {todos.map(todo => (
          <ToDo
            key={todo.id}
            todo={todo}
            onDeleteToDo={onDeleteToDo}
            onToogleCompleted={onToogleCompleted}
          />
        ))}
      </DoList>
    </>
  );
};
