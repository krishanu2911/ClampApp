import {Text, View} from 'react-native';

const Header = () => {
  return (
    <View className="w-full flex flex-row justify-between">
      <Text className=" font-bold text-black/80 text-lg">Clamp</Text>
      <View className=" w-8 h-8 rounded-full bg-orange-600" />
    </View>
  );
};

export default Header;
