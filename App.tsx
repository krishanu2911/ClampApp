import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from './src/route/DrawerNavigator';

enableScreens();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor={'#F2F2F2'} />
        <DrawerNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
