import { ToDoList } from 'components/ToDoList/ToDoList';
import { ToDoFilter } from 'components/ToDoFilter/ToDoFilter';
import { ToDoEditor } from 'components/ToDoEditor/ToDoEditor';
// import { useLocation } from 'react-router-dom';

export const ToDosPage = ({
  onAddToDo,
  filter,
  onChange,
  todos,
  onDeleteToDo,
  onToogleCompleted,
}) => {
  return (
    <main>
      <ToDoEditor onAddToDo={onAddToDo} />
      <ToDoFilter filter={filter} onChange={onChange} />
      <ToDoList
        todos={todos}
        onDeleteToDo={onDeleteToDo}
        onToogleCompleted={onToogleCompleted}
      />
    </main>
  );
};
