import {Text, View} from 'react-native';

interface Props {
  indexName: string;
  priceChange: number;
  currentPrice: number;
  profitLoss: number;
}

const IndexDataCard: React.FC<Props> = ({
  indexName,
  priceChange,
  currentPrice,
  profitLoss,
}) => {
  return (
    <View className="flex w-full h-full  p-4 bg-white rounded-xl justify-between">
      <View className=" flex flex-row justify-between items-center">
        <Text className=" text-lg font-bold text-black">{indexName}</Text>
        <View className=" px-4 py-2 rounded-xl bg-black">
          <Text className=" text-white text-sm font-semibold">Swap</Text>
        </View>
      </View>
      <View className=" flex flex-row justify-between">
        <View className=" flex items-center justify-center">
          <Text className=" text-sm font-semibold text-[#00000099]">
            Price Change
          </Text>
          <Text className=" text-lg font-bold text-black">{priceChange}%</Text>
        </View>
        <View className=" flex items-center justify-center">
          <Text className=" text-sm font-semibold text-[#00000099]">
            Current Price
          </Text>
          <Text className=" text-lg font-bold text-black">${currentPrice}</Text>
        </View>
        <View className=" flex items-center justify-center">
          <Text className=" text-sm font-semibold text-[#00000099]">
            Profit/Loss
          </Text>
          <Text
            className={`text-lg font-bold ${
              profitLoss < 0 ? ' text-red-400 ' : ' text-green-400 '
            } `}>
            {profitLoss}%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default IndexDataCard;
