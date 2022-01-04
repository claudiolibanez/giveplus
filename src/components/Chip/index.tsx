import React from 'react';

import * as S from './styles';

import { Typography } from '../Typography';

interface ChipProps {
  status: 'refused' | 'blocked' | 'released' | 'waiting';
}

function Chip({ status }: ChipProps) {
  function getStatus() {
    switch (status) {
      case 'blocked':
        return 'BLOQUEADO';
      case 'refused':
        return 'RECUSADO PELO GESTOR';
      case 'released':
        return 'LIBERADO';
      case 'waiting':
        return 'AGUARDANDO APROV.';
      default:
        return '';
    }
  }

  return (
    <S.Container status={status}>
      <Typography variant="caption">{getStatus()}</Typography>
    </S.Container>
  );
}

export { Chip };
