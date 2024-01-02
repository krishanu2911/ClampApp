import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

enableScreens();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View className=" flex-1 bg-red-400">
        <Text>Clamp App</Text>
      </View>
    </NavigationContainer>
  );
}

export default App;
