import {Image, Text, View} from 'react-native';

interface Props {
  indexName: string;
  currBalance: string;
  indexLogo: string;
}

const IndexCard: React.FC<Props> = ({indexName, currBalance, indexLogo}) => {
  return (
    <View className="flex w-full h-full bg-[#8247E5]/10 justify-between rounded-xl p-4">
      <View className=" w-full flex flex-row justify-between">
        <Text className=' text-lg font-bold text-black'>{indexName}</Text>
        <Image
          source={{uri: indexLogo}}
          resizeMode="contain"
          className=" w-6 aspect-auto"
        />
      </View>
      <View className="">
        <Text className=' text-sm font-semibold'>Currrent Balance</Text>
        <Text className=' text-sm font-bold'>{currBalance}</Text>
      </View>
    </View>
  );
};

export default IndexCard;
