import { StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '@/constants/Images';
import { Dimensions } from 'react-native';
import { BlogPost } from '@/components/BlogPost';
import GridLayout from 'react-grid-layout';

export default function TabTwoScreen() {
  return (
    <ScrollView
      style={styles().scrollView}
      showsVerticalScrollIndicator={ false }
    >
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={30}
        width={1200}
      >
        {
          BlogPost(
            "flower9",                                                  //ID, also serve as the key
            Images.flower9,                                             //Image source
            styles({ width: 0.45, height: 0.8 }).image,                 //Image style, width and height specifies how much it will be multiplied with respect to the window width and height
            { x: 0, y: 0, w: 1, h: 2, static: true },                   //Grid layout information, specifies placement of images
            "Butchard's Garden Visit",                                  //Title
            undefined,                                                  //Subtitle
            "Flower pictures from the trip to Butchard's Garden, 2024", //Post content
          )
        }
        {
          BlogPost(
            "flower5",
            Images.flower5,
            styles({ width: 0.48, height: 0.5 }).image,
            { x: 6, y: 0, w: 1, h: 2, static: true},
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024",
          )
        }
        {
          BlogPost(
            "flower7",
            Images.flower7,
            styles({ width: 0.48, height: 0.8 }).image,
            { x: 6, y: 7.9, w: 1, h: 2, static: true},
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024",
          )
        }
        {
          BlogPost(
            "fountain",
            Images.fountain,
            styles({ width: 0.45, height: 0.8 }).image,
            { x: 0, y: 12.3, w: 1, h: 2, static: true},
            "Fountain",
            undefined,
            "The picture of a fountain from the trip to Butchard's Garden, 2024",
          )
        }
        {
          BlogPost(
            "flower6",
            Images.flower6,
            styles({ width: 0.45, height: 0.8 }).image,
            { x: 0, y: 24.6, w: 1, h: 2, static: true},
            "Butchard's Garden Visit",
            undefined,
            "Flower pictures from the trip to Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "frog1",
            Images.frog1,
            styles({ width: 0.48, height: 1.1 }).image,
            { x: 6, y: 20.1, w: 1, h: 2, static: true},
            "Frogs from Vancouver Aquarium",
            undefined,
            "Frog pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            "seal",
            Images.seal,
            styles({ width: 0.95, height: 1.5 }).image,
            { x: 0, y: 36.8, w: 1, h: 2, static: true},
            "Seal :)",
            undefined,
            "Seal from Vancouver Aquarium, I love the smile!\n^U^\n\t\t\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            "jellyfish1",
            Images.jellyfish1,
            styles({ width: 0.6, height: 1 }).image,
            { x: 0, y: 59.4, w: 1, h: 2, static: true},
            "Jellyfish",
            undefined,
            "The jellyfish from Vancouver Aquarium.\nThey look like tiny stars floating in space.\n\t\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            "flower4",
            Images.flower4,
            styles({ width: 0.27, height: 0.2 }).image,
            { x: 4.4, y: 74.7, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "fish1",
            Images.fish1,
            styles({ width: 0.33, height: 0.5 }).image,
            { x: 8, y: 59.4, w: 1, h: 2, static: true},
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            "fish2",
            Images.fish2,
            styles({ width: 0.33, height: 0.7 }).image,
            { x: 8, y: 67.2, w: 1, h: 2, static: true},
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            "fish3",
            Images.fish3,
            styles({ width: 0.33, height: 0.7 }).image,
            { x: 0, y: 74.7, w: 1, h: 2, static: true},
            "Fish from Vancouver Aquarium",
            undefined,
            "Fish pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            "jellyfish2",
            Images.jellyfish2,
            styles({ width: 0.61, height: 1.3 }).image,
            { x: 4.4, y: 77.9, w: 1, h: 2, static: true},
            "Jellyfish",
            undefined,
            "The jellyfish from Vancouver Aquarium,\nswimming carelessly in circles.\n\t\t\t\t\t\t2024"
          )
        }
        {
          BlogPost(
            "flower2",
            Images.flower2,
            styles({ width: 0.33, height: 1.3 }).image,
            { x: 0, y: 85.5, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower3",
            Images.flower3,
            styles({ width: 0.61, height: 0.49 }).image,
            { x: 4.4, y: 97.5, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "frog2",
            Images.frog2,
            styles({ width: 0.95, height: 1.5 }).image,
            { x: 0, y: 105.2, w: 1, h: 2, static: true},
            "Frogs from Vancouver Aquarium",
            undefined,
            "Frog pictures from the trip to Vancouver Aquarium, 2024"
          )
        }
        {
          BlogPost(
            "flower10",
            Images.flower10,
            styles({ width: 0.4, height: 1 }).image,
            { x: 0, y: 127.9, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower11",
            Images.flower11,
            styles({ width: 0.54, height: 0.7 }).image,
            { x: 5.3, y: 127.9, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower12",
            Images.flower12,
            styles({ width: 0.54, height: 1 }).image,
            { x: 5.3, y: 138.7, w: 1, h: 2, static: true},
            "Waterfall",
            undefined,
            "This is a waterfall display in Butchard's Garden. 2024"
          )
        }
        {
          BlogPost(
            "flower13",
            Images.flower13,
            styles({ width: 0.4, height: 1 }).image,
            { x: 0, y: 143.1, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower14",
            Images.flower14,
            styles({ width: 0.54, height: 0.5 }).image,
            { x: 5.3, y: 153.9, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower15",
            Images.flower15,
            styles({ width: 0.4, height: 1.24 }).image,
            { x: 0, y: 158.2, w: 1, h: 2, static: true},
            "Flowers",
            undefined,
            "Flower pictures from Butchard's Garden, 2024"
          )
        }
        {
          BlogPost(
            "flower16",
            Images.flower16,
            styles({ width: 0.54, height: 1 }).image,
            { x: 5.3, y: 161.7, w: 1, h: 2, static: true},
            "Plant Dog",
            undefined,
            "The plant dog from a display window in Butchard's Garden.\nI left my signature on the signature book near it :D\n\t\t\t\t\t\t\t\t\t\t2024"
          )
        }
      </GridLayout>
    </ScrollView>
  );
}

const styles : any = (props: any) => StyleSheet.create({
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
    width: ( props?.width || 1.0 ) * Dimensions.get('window').width,
    height: ( props?.height || 1.0 ) * Dimensions.get('window').height,
    margin: 30,
    borderRadius: 5,
    shadowColor: '#001a33',
    shadowRadius: 15,
    shadowOpacity: 0.6,
    justifyContent: 'center',
    cursor: "pointer",
  },
});
