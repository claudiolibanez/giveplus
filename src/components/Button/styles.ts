import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.crusta};

  padding: 14px;

  border-radius: 5px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text``;
