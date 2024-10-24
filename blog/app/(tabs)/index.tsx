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
      <Image
        style={styles.banner}
        source={Images.jellyfish1}
        placeholder={ Colors.blurhash }
        contentFit="cover"
        transition={1000}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={ false }
      >
          
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to my blog!</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
        </ThemedView>
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
  banner: {
    width: Dimensions.get('window').width,
    height: 0.4 * Dimensions.get('window').height,
    shadowColor: '#001a33',
    shadowRadius: 15,
    shadowOpacity: 0.6,
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#BDD5E7',
    margin: 30,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#FFFFFF',
    backgroundColor: '#BDD5E7',
    marginHorizontal: 30,
  },
});
