import { Outlet } from 'react-router-dom';
import { Container, Footer, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/colorpicker">ColorPicker</Link>
          <Link to="/dropdown">DropDown</Link>
          <Link to="/modal">Modal</Link>
          <Link to="/materials">Materials</Link>
          <Link to="/todos">Todos</Link>
          <Link to="/userform">User Form</Link>
        </nav>
      </Header>
      <Outlet />
      <Footer>Copyright © 2023 Created by Vlasiuk Oleg.</Footer>
    </Container>
  );
};
