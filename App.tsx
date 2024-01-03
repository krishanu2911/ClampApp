import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/route/MainStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainStackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
