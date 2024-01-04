import {Text, View} from 'react-native';

interface Props {
  headerTile?: string;
  showProfile?: boolean
}

const Header:React.FC<Props> = ({headerTile , showProfile}) => {
  return (
    <View className={`w-full flex flex-row ${showProfile ? "justify-between" : ""} `}>
      <Text className=" font-bold text-black/80 text-lg">{headerTile || "Clamp"}</Text>
      {showProfile ? 
      <View className=" w-8 h-8 rounded-full bg-orange-600" /> : null }
    </View>
  );
};

export default Header;
