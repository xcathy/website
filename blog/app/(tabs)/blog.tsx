import { StyleSheet} from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '@/constants/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';

export default function TabTwoScreen() {
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.image}
          source={Images.CanadaPlace}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.seal}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.frog1}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.frog2}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower2}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish2}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish3}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish4}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.jellyfish1}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.jellyfish3}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#BDD5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 30,
    backgroundColor: '#BDD5E7',
  },
  scrollView: {
    marginVertical: 0,
    marginHorizontal: 0,
  },
});
