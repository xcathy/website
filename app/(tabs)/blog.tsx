import { SafeAreaView, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '@/constants/Images';
import { Dimensions } from 'react-native';
import { BlogPost } from '@/components/BlogPost';
import GridLayout from 'react-grid-layout';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Cat } from '@/components/Cat';

export default function TabTwoScreen() {
  const screenW = Dimensions.get('window').width;
  const screenH = Dimensions.get('window').height;
  const isWideScreen = (Dimensions.get('window').width > 800);

  return (
    <SafeAreaView
        style={styles({ screenW, screenH }).container}
    > 
      <ScrollView
        style={styles().scrollView}
        showsVerticalScrollIndicator={ false }
      >
        <GridLayout
          className='layout'
          cols={6}
          rowHeight={isWideScreen ? (0.2 * screenH) : (0.6 * screenH)}
          width={screenW}
          margin={[0.04 * screenW, 0.04 * screenH]}
          containerPadding={ [0.1 * screenW, 0.1 * screenH]}
          allowOverlap={ false }
        >
          {
            BlogPost(
              'flower9',                                                  //ID, also serve as the key
              Images.flower9,                                             //Image source
              styles({ width: 0.4, height: 0.8 }).image,                  //Image style, width and height specifies how much it will be multiplied with respect to the window width and height
              isWideScreen ? 
                { x: 0, y: 0, w: 1, h: 1, static: true}
                :
                { x: 0, y: 0, w: 1, h: 1, static: true },                 //Grid layout information, specifies placement of images
              'Trip to the Butchart Gardens',                             //Title
              undefined,                                                  //Subtitle
              'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of hydrangea.',  //Post content
              'Cathy\n2024',                                              //Signature
            )
          }
          {
            BlogPost(
              'flower5',
              Images.flower5,
              styles({ width: 0.4, height: 0.5 }).image,
              isWideScreen ? 
                { x: 3, y: 0, w: 1, h: 1, static: true }
                :
                { x: 0, y: 1, w: 1, h: 1, static: true }, 
              'Trip to the Butchart Gardens',
              undefined,
              'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of amaranth.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower7',
              Images.flower7,
              styles({ width: 0.4, height: 0.8 }).image,
              isWideScreen ? 
                { x: 3, y: 2.2, w: 1, h: 1, static: true}
                :
                { x: 0, y: 2, w: 1, h: 1, static: true }, 
              'Trip to the Butchart Gardens',
              undefined,
              'Flower picture taken from the trip to the Butchart Gardens.\nIt looks like it belongs to a species of astilbe.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'fountain',
              Images.fountain,
              styles({ width: 0.4, height: 0.49 }).image,
              isWideScreen ?
              { x: 0, y: 3.5, w: 1, h: 1, static: true}
              :
              { x: 0, y: 3, w: 1, h: 1, static: true }, 
              'Fountain',
              undefined,
              'The picture of a fountain from the trip to the Butchart Gardens.\nThere is a sculpture of a frog standing on the edge of it.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower6',
              Images.flower6,
              styles({ width: 0.4, height: 0.8 }).image,
              isWideScreen ? 
              { x: 0, y: 5.7, w: 1, h: 1, static: true}
              :
              { x: 0, y: 4, w: 1, h: 1, static: true }, 
              'The Butchart Gardens Visit',
              undefined,
              'Flower pictures from the trip to the Butchart Gardens',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'frog1',
              Images.frog1,
              styles({ width: 0.4, height: 0.8 }).image,
              isWideScreen ?
              { x: 3, y: 5.7, w: 1, h: 1, static: true}
              :
              { x: 0, y: 5, w: 1, h: 1, static: true }, 
              'Frogs from Vancouver Aquarium',
              undefined,
              'Frog pictures from the trip to Vancouver Aquarium.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'seal',
              Images.seal,
              styles({ width: 0.82, height: 1 }).image,
              isWideScreen ?
              { x: 0, y: 9.2, w: 1, h: 1, static: true}
              :
              { x: 0, y: 6, w: 1, h: 1, static: true }, 
              'Seal :)',
              undefined,
              'Seal from Vancouver Aquarium, I love the smile!\n^U^',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'jellyfish1',
              Images.jellyfish1,
              styles({ width: 0.6, height: 1 }).image,
              isWideScreen ?
              { x: 0, y: 13.5, w: 1, h: 1, static: true}
              :
              { x: 0, y: 7, w: 1, h: 1, static: true }, 
              'Jellyfish',
              undefined,
              'The jellyfish from Vancouver Aquarium.\nThey look like tiny stars floating in space.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower4',
              Images.flower4,
              styles({ width: 0.2, height: 0.3 }).image,
              isWideScreen ?
              { x: 4.4, y: 13.5, w: 1, h: 1, static: true}
              :
              { x: 0, y: 8, w: 1, h: 1, static: true }, 
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'fish1',
              Images.fish1,
              styles({ width: 0.2, height: 0.66 }).image,
              isWideScreen ?
              { x: 4.4, y: 14.9, w: 1, h: 1, static: true}
              :
              { x: 0, y: 9, w: 1, h: 1, static: true }, 
              'Fish from Vancouver Aquarium',
              undefined,
              'Fish pictures from the trip to Vancouver Aquarium.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'fish2',
              Images.fish2,
              styles({ width: 0.27, height: 0.7 }).image,
              isWideScreen ?
              { x: 0, y: 17.8, w: 1, h: 1, static: true}
              :
              { x: 0, y: 10, w: 1, h: 1, static: true }, 
              'Fish from Vancouver Aquarium',
              undefined,
              'Fish pictures from the trip to Vancouver Aquarium.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'fish3',
              Images.fish3,
              styles({ width: 0.27, height: 0.7 }).image,
              isWideScreen ?
              { x: 2, y: 17.8, w: 1, h: 1, static: true}
              :
              { x: 0, y: 11, w: 1, h: 1, static: true }, 
              'Fish from Vancouver Aquarium',
              undefined,
              'Fish pictures from the trip to Vancouver Aquarium.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower2',
              Images.flower2,
              styles({ width: 0.26, height: 0.7 }).image,
              isWideScreen ?
              { x: 4, y: 17.8, w: 1, h: 1, static: true}
              :
              { x: 0, y: 12, w: 1, h: 1, static: true }, 
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'jellyfish2',
              Images.jellyfish2,
              styles({ width: 0.4, height: 0.8 }).image,
              isWideScreen ?
              { x: 0, y: 20.8, w: 1, h: 1, static: true }
              :
              { x: 0, y: 13, w: 1, h: 1, static: true }, 
              'Jellyfish',
              undefined,
              'The jellyfish from Vancouver Aquarium,\nswimming carelessly in circles.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower3',
              Images.flower3,
              styles({ width: 0.41, height: 0.8 }).image,
              isWideScreen ?
              { x: 2.9, y: 20.8, w: 1, h: 1, static: true}
              :
              { x: 0, y: 14, w: 1, h: 1, static: true }, 
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'frog2',
              Images.frog2,
              styles({ width: 0.81, height: 1.2 }).image,
              isWideScreen ?
              { x: 0, y: 24.2, w: 1, h: 1, static: true}
              :
              { x: 0, y: 15, w: 1, h: 1, static: true }, 
              'Frogs from Vancouver Aquarium',
              undefined,
              'Frog pictures from the trip to Vancouver Aquarium.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower10',
              Images.flower10,
              styles({ width: 0.4, height: 0.8 }).image,
              isWideScreen ?
              { x: 0, y: 29.3, w: 1, h: 1, static: true}
              :
              { x: 0, y: 16, w: 1, h: 1, static: true },
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower11',
              Images.flower11,
              styles({ width: 0.39, height: 0.8 }).image,
              isWideScreen ?
              { x: 3, y: 29.3, w: 1, h: 2, static: true}
              :
              { x: 0, y: 17, w: 1, h: 1, static: true },
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower13',
              Images.flower13,
              styles({ width: 0.6, height: 1 }).image,
              isWideScreen ?
              { x: 0, y: 32.7, w: 1, h: 1, static: true}
              :
              { x: 0, y: 18, w: 1, h: 1, static: true },
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower12',
              Images.flower12,
              styles({ width: 0.19, height: 1 }).image,
              isWideScreen ?
              { x: 4.4, y: 32.7, w: 1, h: 1, static: true}
              :
              { x: 0, y: 19, w: 1, h: 1, static: true },
              'Waterfall',
              undefined,
              'This is a waterfall display in the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower14',
              Images.flower14,
              styles({ width: 0.5, height: 0.5 }).image,
              isWideScreen ?
              { x: 0, y: 37, w: 1, h: 1, static: true}
              :
              { x: 0, y: 20, w: 1, h: 1, static: true },
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower15',
              Images.flower15,
              styles({ width: 0.29, height: 1.53 }).image,
              isWideScreen ?
              { x: 3.7, y: 37, w: 1, h: 1, static: true}
              :
              { x: 0, y: 21, w: 1, h: 1, static: true },
              'Flowers',
              undefined,
              'Flower pictures from the Butchart Gardens.',
              'Cathy\n2024',
            )
          }
          {
            BlogPost(
              'flower16',
              Images.flower16,
              styles({ width: 0.5, height: 1 }).image,
              isWideScreen ?
              { x: 0, y: 39.2, w: 1, h: 1, static: true}
              :
              { x: 0, y: 22, w: 1, h: 1, static: true },
              'Plant Dog',
              undefined,
              'The plant dog from a display window in the Butchart Gardens.\nI left my signature on the signature book near it :D',
              'Cathy\n2024',
            )
          }

          {
            <div
              key='footer'
              data-grid={
                isWideScreen ?
                { x: 0, y: 43.3, w: 1, h: 1, static: true}
                :
                { x: 0, y: 23, w: 1, h: 1, static: true }
              }
            >
              <ThemedView 
                style={styles().footer}
              >
                <ThemedText
                  type='default'
                  lightColor='#9896AA'
                  darkColor='#9896AA'
                >
                  you have reached the end :O
                </ThemedText>
              </ThemedView>
            </div>
          }
        </GridLayout>
      </ScrollView>
      { 
        Cat(
          `Hello!\nYou can press the photos to flip to see the blog posts!\nThanks for visiting my page! :3\n(click anywhere to close this tooltip)\n`,
          true,
        )
      }
    </SafeAreaView>
  );
}

const styles : any = (props: any) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  scrollView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#BDD5E7',
  },
  image: {
    width: ((Dimensions.get('window').width > 800) ? props?.width : 0.8 ) * Dimensions.get('window').width,
    height: ((Dimensions.get('window').width > 800) ? props?.height : 0.6 ) * Dimensions.get('window').height,
    borderRadius: 5,
    shadowColor: '#001a33',
    shadowRadius: 15,
    shadowOpacity: 0.6,
    justifyContent: 'center',
    cursor: 'pointer',
  },
  footer: {
    width: 0.81 * Dimensions.get('window').width,
    height: 0.1 * Dimensions.get('window').height,
    marginTop: 0.1 * Dimensions.get('window').height,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
