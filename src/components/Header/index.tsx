import React, { ReactNode } from 'react';
import { Feather as IconFeather } from '@expo/vector-icons';
import * as S from './styles';

import { IconButton } from '../IconButton';

interface HeaderProps {
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
  backButton?: boolean;
  iconColor?: string;
}

function Header({
  title,
  left,
  right,
  backButton,
  iconColor = '#3D71AA',
}: HeaderProps) {
  return (
    <S.Container>
      <S.Left>
        {backButton ? (
          <IconButton onPress={() => true}>
            <IconFeather name="arrow-left" size={26} color={iconColor} />
          </IconButton>
        ) : (
          left
        )}
      </S.Left>

      <S.Middle>{title && <S.Title>{title}</S.Title>}</S.Middle>

      <S.Right>{right}</S.Right>
    </S.Container>
  );
}

export { Header };
