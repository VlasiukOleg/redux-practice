import styled from '@emotion/styled';

export const DoList = styled.ul`
  width: 600px;
  display: block;
  list-style: none;
  margin: 0 auto;
  padding-left: 0;
`;

export const DoListItem = styled.li`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  padding: 20px;

  border: 1px solid grey;

  background-color: ${props => {
    if (props.checked) {
      return 'lightgreen';
    }
  }};
`;

export const DoItemText = styled.p`
  margin: 0;
  margin-right: 15px;
  margin-left: 15px;
  text-decoration: ${({ checked }) => {
    if (checked) {
      return 'line-through';
    }
  }};
`;

export const DoListBtnDelete = styled.button`
  display: block;
  background-color: tomato;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DoListInfo = styled.div`
  text-align: center;
`;
