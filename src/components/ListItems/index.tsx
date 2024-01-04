import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {downArrowIcon} from '../../constants/imageUrl';

interface indexCompositionInterface {
  indexName: string;
  value: number;
}

interface Props {
  hashNumber: string;
  transactionType: 'Deposit' | 'Swap';
  tokenName: string;
  composition: indexCompositionInterface[];
  age: string;
}

const ListItems: React.FC<Props> = ({
  hashNumber,
  transactionType,
  tokenName,
  composition,
  age,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <View className=" w-full">
      <View className=" w-full h-10 flex flex-row items-center">
        <View className="w-[30%] px-1">
          <Text className=" text-sm text-black font-semibold">
            {hashNumber}
          </Text>
        </View>
        <View className="w-[30%]">
          <View className=" bg-yellow-200 border border-yellow-400 rounded-xl py-1">
            <Text className=" text-center text-sm font-semibold text-yellow-600">
              {transactionType}
            </Text>
          </View>
        </View>
        <View className=" flex-1 px-1">
          <Text className="text-sm text-black font-semibold text-center">
            {tokenName}
          </Text>
        </View>
        <TouchableOpacity onPress={() => setExpanded(prev => !prev)}>
          <View>
            <Image
              source={{uri: downArrowIcon}}
              resizeMode="contain"
              className="w-3 h-3"
            />
          </View>
        </TouchableOpacity>
      </View>
      {expanded ? (
        <View className=" w-full px-1">
          <Text className=" text-[#00000099] font-bold mb-2">Composition</Text>
          {composition.map(item => {
            return (
              <View key={`${item.value}_clamp`} className=" flex flex-row">
                <Text className=" text-black font-semibold">
                  {item.indexName}
                </Text>
                <Text className=" text-[#00000099] font-semibold ml-2">
                  {item.value}
                </Text>
              </View>
            );
          })}
          <Text className=" text-[#00000099] font-bold my-2">Age</Text>
          <Text className=" text-black font-semibold">{age}</Text>
        </View>
      ) : null}
      <View className=" w-full h-1 border-b border-b-black/20 my-2" />
    </View>
  );
};
export default ListItems;
