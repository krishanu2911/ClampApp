import {Text, View} from 'react-native';

interface Props {}

const DrawerView: React.FC<Props> = ({}) => {
  return (
    <View className=" flex-1 bg-white px-4">
      <View className=" w-full flex items-center justify-center pt-6 pb-4">
        <View className=" w-1/3 aspect-square rounded-full bg-orange-600" />
        <Text className=" text-lg text-center font-semibold text-black my-4">
          0x8123...6a8e
        </Text>
        <View className=" w-full h-1 border-b border-b-black/20 my-2" />
        <View className=" flex flex-row justify-between items-center w-full">
          <Text className=" text-black font-bold text-base">Net Worth</Text>
          <Text className=" text-[#00000099] font-bold text-base">$3.11</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerView;
