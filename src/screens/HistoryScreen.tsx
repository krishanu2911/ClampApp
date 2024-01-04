import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import TableHeader from '../components/TableHeader';

const HistoryScreeen = () => {
  return (
    <SafeAreaView className=" bg-[#F2F2F2] flex-1 py-4 px-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full">
        <Header headerTile="History" />
        <View className=" flex-1 mt-4 pt-4">
          <TableHeader />
          <ListItems
            hashNumber="0x8123...6a8e"
            transactionType="Deposit"
            tokenName="WETH-DAI-WBTC"
            age="10 second ago"
            composition={[
              {indexName: 'WETH', value: 234332},
              {indexName: 'DAI', value: 211332},
            ]}
          />
          <ListItems
            hashNumber="0x8123...6a8e"
            transactionType="Deposit"
            tokenName="WETH-DAI-WBTC"
            age="10 second ago"
            composition={[
              {indexName: 'WETH', value: 234332},
              {indexName: 'DAI', value: 211332},
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreeen;
