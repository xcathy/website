import { StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '@/constants/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { BlogPost } from '@/components/BlogPost';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={ false }
      >
        {
          BlogPost(
            Images.flower9,
            styles.image,
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower5,
            styles.image,
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower7,
            styles.image,
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.fountain,
            styles.image,
            "Fountain",
            undefined,
            "The picture of a fountain from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower6,
            styles.image,
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.seal,
            styles.image,
            "Seal :)",
            undefined,
            "Seal from Vancouver Aquarium, I love the smile!\n^U^\n\t\t\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            Images.frog1,
            styles.image,
            "Frogs from Vancouver Aquarium",
            undefined,
            "Frog pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            Images.frog2,
            styles.image,
            "Frogs from Vancouver Aquarium",
            undefined,
            "Frog pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(Images.fish1, styles.image)
        }
        {
          BlogPost(Images.fish2, styles.image)
        }
        {
          BlogPost(Images.fish3, styles.image)
        }
        {
          BlogPost(Images.jellyfish1, styles.image)
        }
        {
          BlogPost(Images.jellyfish2, styles.image)
        }
        {
          BlogPost(Images.flower2, styles.image)
        }
        {
          BlogPost(Images.flower3, styles.image)
        }
        {
          BlogPost(Images.flower4, styles.image)
        }
        {
          BlogPost(Images.flower5, styles.image)
        }
        {
          BlogPost(Images.flower10, styles.image)
        }
        {
          BlogPost(Images.flower11, styles.image)
        }
        {
          BlogPost(Images.flower12, styles.image)
        }
        {
          BlogPost(Images.flower13, styles.image)
        }
        {
          BlogPost(Images.flower14, styles.image)
        }
        {
          BlogPost(Images.flower15, styles.image)
        }
        {
          BlogPost(Images.flower16, styles.image)
        }
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
    justifyContent: 'center',
    cursor: "pointer",
  },
});
