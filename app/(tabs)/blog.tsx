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
          BlogPost(
            Images.fish1,
            styles.image,
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            Images.fish2,
            styles.image,
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            Images.fish3,
            styles.image,
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            Images.jellyfish1,
            styles.image,
            "Jellyfish",
            undefined,
            "The jellyfish from Vancouver Aquarium.\nThey look like tiny stars floating in space.\n\t\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            Images.jellyfish2,
            styles.image,
            "Jellyfish",
            undefined,
            "The jellyfish from Vancouver Aquarium,\nswimming carelessly in circles.\n\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            Images.flower2,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower3,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower4,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower5,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower10,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower11,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower12,
            styles.image,
            "Waterfall",
            undefined,
            "This is a waterfall display in Butchard's Garden. 2024"
          )
        }
        {
          BlogPost(
            Images.flower13,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower14,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower15,
            styles.image,
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            Images.flower16,
            styles.image,
            "Plant Dog",
            undefined,
            "The plant dog from a display window in Butchard's Garden.\nI left my signature on the signature book near it :D\n\t\t\t\t\t\t\t\t\t\t2024"
          )
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
