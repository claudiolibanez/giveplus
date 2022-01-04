import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import * as S from './styles';

import { Typography } from '../Typography';

interface ButtonProps extends RectButtonProps {
  children: string;
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <Typography variant="darkButton">{children}</Typography>
    </S.Container>
  );
}

export { Button };
