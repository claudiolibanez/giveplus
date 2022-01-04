import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  padding: 0 16px;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: flex-start;
  align-items: center;
`;

export const Left = styled.View`
  flex-wrap: nowrap;
  width: 24px;
  justify-content: flex-start;
  align-items: center;
`;

export const Middle = styled.View`
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.View`
  width: 24px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #3d71aa;
  text-align: center;
`;
