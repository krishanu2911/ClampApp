import {ScrollView, Text, View, ViewBase} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import IndexCard from '../components/Cards/IndexCard';
import {polygonIcon} from '../constants/imageUrl';

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
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            className=" h-32 mt-8">
            <View className=" w-60 h-full mr-2">
              <IndexCard
                indexName="Matic"
                indexLogo={polygonIcon}
                currBalance="0.14354734"
              />
            </View>
            <View className=" w-60 h-full">
              <IndexCard
                indexName="Matic"
                indexLogo={polygonIcon}
                currBalance="0.14354734"
              />
            </View>
          </ScrollView>
        </View>

        <View className=" w-1/2 rounded-lg bg-white p-5">
          <Text onPress={onPressHandler}>DashBoardScreeen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashBoardScreeen;
