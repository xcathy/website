import { StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Images } from '@/constants/Images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { useCallback, useState} from 'react';
import { imageHover } from '@/hooks/imageManipulate';

export default function HomeScreen() {

  const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  const bannerImage = document.getElementById("banner");

  const W = bannerImage?.clientWidth || 0.0;
  const H = bannerImage?.clientHeight || 0.0;
  const webView = (Dimensions.get('window').width > 800);

  const [ box, setBbox ] = useState<ElemntBox>({ a: -10.0, b: -10.0, c: -10.0 + W, d: -10.0 + H, W: W, H: H });
  
  const hoverImg = useCallback((e: PointerEvent) => {
    if (box.W === 0.0 || box.H === 0.0) {
      setBbox({ a: box.a, b: box.b, c: box.c, d: box.d, W: W, H: H });
    } else {
      setBbox(imageHover(e, box));
    }

  }, [ box ]);

  return (
    
      <SafeAreaView
        style={styles().container}
        onPointerUp={() => window.open( "./blog", "_self")}
      >
        <ScrollView
          style={styles().scrollView}
          showsVerticalScrollIndicator={ false }
        >
          <Image
            id="banner"
            style={styles({x: box.a, y: box.b}).banner}
            source={Images.seal}
            placeholder={ blurhash }
            transition={1000}
            onPointerMove={ (e) => { hoverImg(e) } }
          />
        </ScrollView>
        <ThemedView style={styles().titleContainer} >
          <ThemedText
            type="bigtitle"
            lightColor="#F2F2F2"
            darkColor="#F2F2F2"
            screenType={ webView ? "web" : "phone" }
          >
            Welcome to my blog!
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles().contentContainer}>
          <ThemedText
            type="bigsubtitle"
            lightColor="#DADEDF"
            darkColor="#DADEDF"
            screenType={ webView ? "web" : "phone" }
          >
            Click anywhere to proceed to blog posts :D
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
    left: props?.x,
    top: props?.y,
  },
  titleContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginVertical: 0.4 * Dimensions.get('window').height,
    backgroundColor: 'none',
    textShadowColor: '#001a3380',
    textShadowRadius: 15,
  },
  contentContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 0.8 * Dimensions.get('window').height,
    backgroundColor: 'none',
    textShadowColor: '#001a3380',
    textShadowRadius: 15,
  },
});
