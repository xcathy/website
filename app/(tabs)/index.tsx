import { StyleSheet, Dimensions, PointerEvent } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Images } from '@/constants/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useCallback, useState} from 'react';
import { imageMoveHover } from '@/hooks/imageMoveHover';

export default function HomeScreen() {

  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const bannerImage = document.getElementById("banner");

  const W = bannerImage?.clientWidth || 0.0;
  const H = bannerImage?.clientHeight || 0.0;
  const [ a, setA ] = useState<number>(-10.0);
  const [ b, setB ] = useState<number>(-10.0);
  const [ c, setC ] = useState<number>(a + W);
  const [ d, setD ] = useState<number>(b + H);
  
  const hoverImg = useCallback((e: PointerEvent) => {
    const coordinates = imageMoveHover(e, a, b, c, d, W, H);

    setA(coordinates.a);
    setB(coordinates.b);
    setC(coordinates.c);
    setD(coordinates.d);
  }, [ a, b, c, d ]);

  return (
    
      <SafeAreaView style={styles().container}>
        <ScrollView
          style={styles().scrollView}
          showsVerticalScrollIndicator={ false }
        >
          <Image
            id="banner"
            style={styles({a, b}).banner}
            source={Images.seal}
            placeholder={ blurhash }
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
    width: Dimensions.get('window').width * 1.2,
    height: Dimensions.get('window').height * 1.2,
    position: 'absolute',
    left: props?.a,
    top: props?.b,
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
