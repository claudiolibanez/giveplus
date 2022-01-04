import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';

const { Navigator, Screen } = createDrawerNavigator();

function AppRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, drawerLabel: 'Home' }}
      />
      {/* <Screen   /> */}
      {/* <Screen   /> */}
    </Navigator>
  );
}

export { AppRoutes };
