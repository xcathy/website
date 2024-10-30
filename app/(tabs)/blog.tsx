import { StyleSheet} from 'react-native';
import { Image } from 'expo-image';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={ false }
      >
        <Image
          style={styles.image}
          source={Images.flower9}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower8}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower7}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fountain}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower6}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.seal}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.frog1}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.frog2}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish1}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish2}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.fish3}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.jellyfish1}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.jellyfish2}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower2}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower3}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower4}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower5}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower10}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower11}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower12}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower13}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower14}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower15}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Image
          style={styles.image}
          source={Images.flower16}
          placeholder={Colors.blurhash}
          contentFit="cover"
          transition={1000}
        />

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 0,
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#BDD5E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 0.9 * Dimensions.get('window').width,
    height: 0.8 * Dimensions.get('window').height,
    margin: 30,
    borderRadius: 10,
    shadowColor: '#001a33',
    shadowRadius: 15,
    shadowOpacity: 0.6,
  },
});
