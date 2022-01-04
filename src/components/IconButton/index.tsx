import React, { ReactNode } from 'react';
import { TouchableHighlightProps } from 'react-native';
import * as S from './styles';

interface IconButtonProps extends TouchableHighlightProps {
  children: ReactNode;
}

function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <S.Container {...rest} underlayColor="#DDDDDD">
      {children}
    </S.Container>
  );
}

export { IconButton };
