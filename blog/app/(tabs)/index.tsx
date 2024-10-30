import { StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Images } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={ false }
      >
        <Image
          style={styles.banner}
          source={Images.seal}
          placeholder={ Colors.blurhash }
          contentFit="cover"
          transition={1000}
        />
      </ScrollView>
      <ThemedView style={styles.titleContainer} >
        <ThemedText
          type="title"
          lightColor="white"
          darkColor="white"
        >
          Welcome to my blog!
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.contentContainer}>
        <ThemedText
          type="default"
          lightColor="#EEEEEE"
          darkColor="white"
        >
          New updates incoming...
        </ThemedText>
      </ThemedView>
      
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
  banner: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    marginVertical: 0.4 * Dimensions.get('window').height,
    backgroundColor: 'none',
    textShadowColor: '#001a3380',
    textShadowRadius: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 0.3 * Dimensions.get('window').height,
    backgroundColor: 'none',
    textShadowColor: '#001a3380',
    textShadowRadius: 15,
  },
});
