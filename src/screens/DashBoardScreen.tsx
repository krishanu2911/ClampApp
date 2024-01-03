import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from "@react-navigation/native";

const DashBoardScreeen = () => {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());

    }
  return (
    <SafeAreaView>
      <Text onPress={onPressHandler}>DashBoardScreeen</Text>
    </SafeAreaView>
  );
};

export default DashBoardScreeen;
