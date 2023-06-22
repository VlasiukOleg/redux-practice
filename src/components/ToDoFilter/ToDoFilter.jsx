import { ToDoFormFilter } from './ToDoFilter.styled';

export const ToDoFilter = ({ filter, onChange }) => {
  return (
    <ToDoFormFilter>
      <label>
        Фільтр ToDo
        <input type="text" value={filter} onChange={onChange} />
      </label>
    </ToDoFormFilter>
  );
};
