import styled from '@emotion/styled';

export const ColorPickerWrap = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  border: 2px solid black;
  padding: 15px;
`;

export const ColorPickerBtn = styled.button`
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  background-color: ${props => {
    return props.color;
  }};

  transform: ${props => {
    if (props.index === props.state) {
      return 'scale(1.3)';
    }
  }};
`;
