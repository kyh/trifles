import styled from "styled-components";
import { visible } from "../SpriteAnimation/animations";

const AlertTemplate = styled.div`
  color: ${({ theme }) => theme.ui.alert.text};
  background: ${({ theme }) => theme.ui.alert.background};
  padding: ${({ theme }) => theme.spacings(3)};
  border-radius: ${({ theme }) => theme.border.wavyRadius};
  display: flex;
  align-items: flex-start;
  animation: ${visible} 0s linear 0.1s forwards;
  visibility: hidden;
`;

export const Alert = styled(AlertTemplate)`
  position: absolute;
  top: ${({ theme }) => theme.spacings(3)};
`;

export const ReactAlertTemplate = ({ style, message, close }: any) => {
  return (
    <AlertTemplate style={style}>
      {message}
      <CloseButton onClick={close}>X</CloseButton>
    </AlertTemplate>
  );
};

const CloseButton = styled.button`
  margin-left: ${({ theme }) => theme.spacings(3)};
`;
