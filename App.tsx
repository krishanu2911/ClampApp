import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/route/MainTabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from './src/route/DrawerNavigator';

enableScreens();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DrawerNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
