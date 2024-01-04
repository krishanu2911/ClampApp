import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabsNavigator from './MainTabs';
import DrawerView from '../components/Drawer/DrawerView';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={DrawerView}
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
