import React from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { Feather as IconFeather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { IconButton } from '../../components/IconButton';
import { ActiveLighthouseIcon } from '../../components/SVGs/ActiveLighthouseIcon';
import { SearchBar } from '../../components/SearchBar';
import { Button } from '../../components/Button';
import { OrderItem, OrderProps } from './components/OrderItem';
import { Typography } from '../../components/Typography';

export interface OrderListProps extends OrderProps {
  id: string;
}

type HomeProps = DrawerHeaderProps;

function Home({ navigation }: HomeProps) {
  const data: OrderListProps[] = [
    {
      id: '1',
      number: '1256468132',
      name: 'Construserv Ltda.',
      status: 'blocked',
    },
    {
      id: '2',
      number: '1256468132',
      name: 'Davi e Francisca Ltda.',
      status: 'released',
    },
    {
      id: '3',
      number: '1256468132',
      name: 'A C S Nery Andrade Me',
      status: 'refused',
    },
    {
      id: '4',
      number: '1256468132',
      name: 'Construserv Ltda.',
      status: 'blocked',
    },
    {
      id: '5',
      number: '1256468132',
      name: 'T D F Alameda',
      status: 'released',
    },
    {
      id: '6',
      number: '1256468132',
      name: 'T D F Alameda',
      status: 'released',
    },
    {
      id: '7',
      number: '1256468132',
      name: 'Construserv Ltda.',
      status: 'waiting',
    },
    {
      id: '8',
      number: '1256468132',
      name: 'Edson e Eduarda Ltda',
      status: 'refused',
    },
  ];

  return (
    <Layout>
      <S.Container>
        <Header
          left={
            <IconButton onPress={() => navigation.openDrawer()}>
              <IconFeather name="menu" size={26} color="#3D71AA" />
            </IconButton>
          }
          title="Home"
          right={<ActiveLighthouseIcon width={26} height={26} />}
        />

        <S.Content>
          <SearchBar placeholder="Consultar Clientes ou Pedidos" />

          <Button>Novo Pedido</Button>

          <S.OrderList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <OrderItem data={item} />}
            ListHeaderComponent={<Typography>Status de Pedidos</Typography>}
            ListHeaderComponentStyle={{
              marginBottom: 8,
            }}
          />
        </S.Content>
      </S.Container>
    </Layout>
  );
}

export default Home;
