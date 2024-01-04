import {ScrollView, Text, View, ViewBase} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import IndexCard from '../components/Cards/IndexCard';
import {polygonIcon} from '../constants/imageUrl';
import IndexesView from '../components/IndexesView';

const DashBoardScreeen = () => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView className=" bg-[#F2F2F2] flex-1 py-4 px-6">
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} className=" flex-1 mt-4 pt-4">
        <Text className=" text-base font-semibold text-[#00000099]">
          Manage all the indexes you've bought from one place.
        </Text>
        <View className='mt-8'>
          <IndexesView />
        </View>

        <View className=" w-1/2 rounded-lg bg-white p-5">
          <Text onPress={onPressHandler}>DashBoardScreeen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoardScreeen;
