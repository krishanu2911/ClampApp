import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {appTabs} from './util/AppTabs';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tabs = createBottomTabNavigator();

const MainTabsNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarInactiveTintColor: '#00000099',
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          position: 'absolute',
          height: 80 + insets.bottom,
        },
        tabBarShowLabel: false,
      }}>
      {appTabs.map(tab => {
        return (
          <Tabs.Screen
            key={tab.tabName}
            name={tab.tabName}
            component={tab.component}
            options={{
              tabBarIcon: ({focused}) => (
                <View className=" flex items-center">
                  <Image
                    source={{uri: tab.tabIconsUrl}}
                    resizeMode="contain"
                    className=" w-5 aspect-square"
                  />
                  <Text
                    className={` ${
                      focused ? 'text-black' : 'text-black/50'
                    } text-sm mt-2 font-semibold`}>
                    {tab.tabName}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Tabs.Navigator>
  );
};

export default MainTabsNavigator;
