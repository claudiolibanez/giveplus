/* eslint-disable prettier/prettier */
import React from 'react';
import { TextProps } from 'react-native';
import * as S from './styles';

interface TypographyProps extends TextProps {
  children: string;
  variant?:
  | 'pageTitle'
  | 'subTitle'
  | 'itemCaption'
  | 'itemTitle'
  | 'darkButton'
  | 'caption';
  gutterBottom?: boolean;
}

function Typography({
  children,
  variant,
  gutterBottom = false,
  ...rest
}: TypographyProps) {
  return (
    <S.Text variant={variant} gutterBottom={gutterBottom} {...rest}>
      {children}
    </S.Text>
  );
}

export { Typography };
