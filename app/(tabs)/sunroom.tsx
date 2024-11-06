import GridLayout from 'react-grid-layout';
import { Cat } from '@/components/Cat';
import { SafeAreaView, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Images } from '@/constants/Images';

export default function TabTwoScreen() {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const screenW = Dimensions.get('window').width;
    const screenH = Dimensions.get('window').height;
    const isWideScreen = (Dimensions.get('window').width > 800);
  
    return (
        <SafeAreaView
            style={styles({ screenW, screenH }).container}
        >
            <Image
                id="background"
                style={styles().background}
                source={Images.deskBackground}
                placeholder={ blurhash }
                contentFit="cover"
                transition={1000}
            />
            
            <GridLayout
                className="layout"
                cols={6}
                rowHeight={isWideScreen ? (0.2 * screenH) : (0.6 * screenH)}
                width={screenW}
                margin={[0.04 * screenW, 0.04 * screenH]}
                containerPadding={ [0.1 * screenW, 0.1 * screenH]}
                allowOverlap={ false }
            >

            </GridLayout>
        { Cat() }
        </SafeAreaView>
    );
}

const styles : any = (props: any) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent',
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
    },
});