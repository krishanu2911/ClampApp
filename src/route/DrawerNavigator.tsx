import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import MainTabsNavigator from './MainTabs';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={() => <View className=" flex-1 bg-red-400"></View>}
      useLegacyImplementation={false}
      screenOptions={{
        swipeEnabled: true,
        swipeEdgeWidth: 1,
        headerShown: false,
        drawerPosition: 'right',
      }}>
      <Drawer.Screen name="Home" component={MainTabsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
