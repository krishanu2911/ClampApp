import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  headerTile?: string;
  showProfile?: boolean;
}

const Header: React.FC<Props> = ({headerTile, showProfile}) => {
  const navigation = useNavigation();

  const onProfileClick = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View
      className={`w-full flex flex-row ${
        showProfile ? 'justify-between' : ''
      } `}>
      <Text className=" font-bold text-black/80 text-2xl">
        {headerTile || 'Clamp'}
      </Text>
      {showProfile ? (
        <TouchableOpacity onPress={onProfileClick}>
          <View className=" w-8 h-8 rounded-full bg-orange-600" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
