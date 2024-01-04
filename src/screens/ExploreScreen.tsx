import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ExploreIndexCard from '../components/Cards/ExploreIndexCard';
import {exploreData} from '../data/exploreData';

const ExploreScreeen = () => {
  return (
    <SafeAreaView className=" bg-[#F2F2F2] flex-1 py-4 px-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full">
        <Header headerTile="Explore" />
        <View className=" flex-1 mt-4 pt-4">
          <Text className=" text-base font-semibold text-[#00000099]">
            Buy any crypto inex anytime anywhere
          </Text>
          {exploreData.map(item => {
            return (
              <View key={item.id} className=" w-full h-48 my-4 ">
                <ExploreIndexCard title={item.title} priceChange={item.priceChange} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreeen;
