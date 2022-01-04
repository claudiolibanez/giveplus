import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather as IconFeather } from '@expo/vector-icons';

import * as S from './styles';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
}

function SearchBar({ placeholder, ...rest }: SearchBarProps) {
  return (
    <S.Container>
      <IconFeather name="search" size={24} color="#3D71AA" />
      <S.Input placeholder={placeholder} {...rest} />
    </S.Container>
  );
}

export { SearchBar };
