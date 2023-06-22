import { UserForm } from 'components/UserForm/UserForm';

export const UserFormPage = ({ onSubmit }) => {
  return (
    <main>
      <UserForm onSubmit={onSubmit} />
    </main>
  );
};
