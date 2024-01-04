import {Image, Text, View} from 'react-native';
import {polygonIcon, startIcon} from '../../constants/imageUrl';

interface Props {
  title: string;
  priceChange: number;
}

const ExploreIndexCard: React.FC<Props> = ({title, priceChange}) => {
  return (
    <View className=" flex w-full h-full bg-white rounded-xl">
      <View className=" flex flex-1 justify-between  p-4">
        <View className=" flex flex-row justify-between items-center">
          <Text className=" text-lg font-bold text-black">{title}</Text>
          <Image
            source={{uri: startIcon}}
            resizeMode="contain"
            className=" w-6 aspect-square"
          />
        </View>
        <View className=" flex flex-row justify-between items-start">
          <View>
            <Text className=" text-[#00000099] text-sm font-medium">
              Underlying tokens
            </Text>
            <View className="flex flex-row mt-2">
              <Image
                source={{uri: polygonIcon}}
                resizeMode="contain"
                className=" w-4 h-4 mr-2"
              />
              <Image
                source={{uri: polygonIcon}}
                resizeMode="contain"
                className=" w-4 h-4"
              />
            </View>
          </View>
          <View className=" flex items-end">
            <Text className=" text-[#00000099] text-sm font-medium">
              Price Changes
            </Text>
            <Text className=" mt-2 text-base font-bold text-black">
              {priceChange}%
            </Text>
          </View>
        </View>
      </View>
      <View className=" w-full h-12 bg-black rounded-b-xl rounded-bl-xl flex items-center justify-center">
        <Text className="text-white font-semibold text-base">View Detail</Text>
      </View>
    </View>
  );
};

export default ExploreIndexCard;
