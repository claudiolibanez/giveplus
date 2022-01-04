import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 14px;

  background-color: ${({ theme }) => theme.colors.surface};

  border-radius: 5px;

  margin-bottom: 12px;

  align-items: flex-start;
`;

export const Content = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 4px;
`;
