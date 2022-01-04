import styled from 'styled-components/native';

interface ContainerProps {
  status: 'refused' | 'blocked' | 'released' | 'waiting';
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ status, theme }) => {
    switch (status) {
      case 'refused':
        return theme.colors.melon;
      case 'blocked':
        return theme.colors.melon;
      case 'released':
        return theme.colors.harmonies;
      case 'waiting':
        return '#F36F24';
      default:
        return theme.colors.light;
    }
  }};

  padding: 2px 10px;

  border-radius: 12px;
`;
