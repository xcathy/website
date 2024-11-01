import { StyleSheet, Dimensions, PointerEvent } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Images } from '@/constants/Images';
import { Colors } from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useCallback, useState} from 'react';
import { imageMoveHover } from '@/hooks/imageMoveHover';

export default function HomeScreen() {

  const [ x, setX ] = useState<number>(0.0);
  const [ y, setY ] = useState<number>(0.0);
  const bannerImage = document.getElementById("banner");
  const bannerBox = bannerImage?.getBoundingClientRect();

  const hoverImg = useCallback((e: PointerEvent) => {
    const coordinates = imageMoveHover(e, x, y, bannerBox);
    setX(coordinates.x);
    setY(coordinates.y);
  }, [ x, y ]);

  return (
    
      <SafeAreaView style={styles().container}>
        <ScrollView
          style={styles().scrollView}
          showsVerticalScrollIndicator={ false }
        >
          <Image
            id="banner"
            style={styles({x, y}).banner}
            source={Images.seal}
            placeholder={ Colors.blurhash }
            transition={1000}
            onPointerMove={ (e) => hoverImg(e) }
          />
        </ScrollView>
        <ThemedView style={styles().titleContainer} >
          <ThemedText
            type="title"
            lightColor="white"
            darkColor="white"
          >
            Welcome to my blog!
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles().contentContainer}>
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

const styles : any = (props: any) => StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#BDD5E7',
    alignItems: 'center',
  },
  scrollView: {
    marginVertical: 0,
    marginHorizontal: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  banner: {
    width: Dimensions.get('window').width * 1.1,
    height: Dimensions.get('window').height * 1.1,
    position: 'absolute',
    top: props?.x,
    left: props?.y,
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
