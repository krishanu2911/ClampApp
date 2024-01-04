import {Text, View} from 'react-native';

const TableHeader = () => {
  return (
    <View className=" w-full mb-4">
      <View className=" w-full h-10 flex flex-row items-center px-1">
        <View className="flex-1">
          <Text className=" text-sm text-black font-semibold ">
            Hash Number
          </Text>
        </View>
        <View className=" flex-1">
          <Text className=" text-sm text-black font-semibold ">
            Transaction Type
          </Text>
        </View>
        <View className=" flex-1">
          <Text className="text-sm text-black font-semibold ">Token Name</Text>
        </View>
      </View>
    </View>
  );
};

export default TableHeader;
