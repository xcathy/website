import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'expo-image';
import { Images } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { Dimensions } from 'react-native';
import { Link } from '@react-navigation/native';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.banner}
        source={Images.flower36}
        placeholder={Colors.blurhash}
        contentFit="cover"
        transition={1000}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={ false }
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Contacts</ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          <ThemedText type="link" url="https://www.linkedin.com/in/cathyxie97">Linkedin</ThemedText>
          <ThemedText type="link" url="https://github.com/xcathy">Github</ThemedText>
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
  },
  banner: {
    width: Dimensions.get('window').width,
    height: 0.4 * Dimensions.get('window').height,
    opacity: 1,
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
    margin: 40,
  },
  contentContainer: {
    color: '#FFFFFF',
    backgroundColor: '#BDD5E7',
    marginHorizontal: 40,
  },
});
