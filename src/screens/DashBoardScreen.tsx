import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import IndexesView from '../components/IndexesView';
import IndexDataCard from '../components/Cards/IndexDataCard';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {indexesData} from '../data/indexesData';

const DashBoardScreeen = () => {
  const bottomBarHeight = useBottomTabBarHeight();
  return (
    <SafeAreaView className=" bg-[#F2F2F2] flex-1 py-4 px-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full">
        <Header showProfile={true} />
        <View className=" flex-1 mt-4 pt-4">
          <Text className=" text-base font-semibold text-[#00000099]">
            Manage all the indexes you've bought from one place.
          </Text>
          <View className="mt-8">
            <IndexesView />
          </View>
          {indexesData.map(item => {
            return (
              <View key={item.id} className=" mt-8 w-full h-40 ">
                <IndexDataCard
                  indexName={item.indexName}
                  priceChange={item.priceChange}
                  currentPrice={item.currentPrice}
                  profitLoss={item.profitLoss}
                />
              </View>
            );
          })}
          {/* <View className=" mt-8 w-full h-40 ">
            <IndexDataCard
              indexName="WETH-DAI-WBTC"
              priceChange={1.7}
              currentPrice={0.99}
              profitLoss={0.21}
            />
          </View> */}
        </View>
        {/* PlaceHOLDER Block */}
        <View className=" w-full" style={{height: bottomBarHeight}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoardScreeen;
