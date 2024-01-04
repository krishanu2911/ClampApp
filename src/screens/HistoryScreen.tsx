import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../components/Header';
import ListItems from '../components/ListItems';
import TableHeader from '../components/TableHeader';
import { historyData } from '../data/historyData';

const HistoryScreeen = () => {
  return (
    <SafeAreaView className=" bg-[#F2F2F2] flex-1 py-4 px-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-full">
        <Header headerTile="History" />
        <View className=" flex-1 mt-4 pt-4">
          <TableHeader />
          {historyData.map((item) => {
            return <ListItems
            key={item.hashNumber}
            hashNumber={item.hashNumber}
            transactionType={item.transactionType}
            tokenName={item.tokenName}
            age={item.age}
            composition={item.composition}
          />
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HistoryScreeen;
