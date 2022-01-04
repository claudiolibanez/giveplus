import React from 'react';

import * as S from './styles';

import { Chip } from '../../../../components/Chip';
import { Typography } from '../../../../components/Typography';

export interface OrderProps {
  number: string;
  name: string;
  status: 'refused' | 'blocked' | 'released' | 'waiting';
}

interface OrderItemProps {
  data: OrderProps;
}

function OrderItem({ data }: OrderItemProps) {
  const { number, name, status } = data;

  return (
    <S.Container>
      <S.Content>
        <Typography variant="itemCaption">{number}</Typography>
        <Chip status={status} />
      </S.Content>
      <Typography variant="itemTitle">{name}</Typography>
    </S.Container>
  );
}

export { OrderItem };
