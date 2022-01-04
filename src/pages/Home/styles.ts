import styled from 'styled-components/native';
import { FlatList, FlatListProps, Platform } from 'react-native';
import Constants from 'expo-constants';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { OrderListProps } from '.';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: ${statusBarHeight}px;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 16px;
`;

export const OrderList = styled(
  FlatList as new (
    props: FlatListProps<OrderListProps>,
  ) => FlatList<OrderListProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})`
  margin-top: 20px;
`;
