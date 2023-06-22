import styled from '@emotion/styled';

export const BackDrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(174, 185, 196, 0.695);
  transition: scale 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 400px;
  height: 200px;

  background-color: white;
  padding: 40px;

  text-align: center;
`;
