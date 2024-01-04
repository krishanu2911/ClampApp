import {ScrollView, View} from 'react-native';
import IndexCard from '../Cards/IndexCard';
import {polygonIcon} from '../../constants/imageUrl';

const IndexesView = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      className=" w-full h-32">
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
  );
};

export default IndexesView;
