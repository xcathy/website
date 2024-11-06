import GridLayout from 'react-grid-layout';
import { Cat } from '@/components/Cat';
import { SafeAreaView, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

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
                    className="layout"
                    cols={6}
                    rowHeight={isWideScreen ? (0.2 * screenH) : (0.6 * screenH)}
                    width={screenW}
                    margin={[0.04 * screenW, 0.04 * screenH]}
                    containerPadding={ [0.1 * screenW, 0.1 * screenH]}
                    allowOverlap={ false }
                >

                </GridLayout>
            </ScrollView>
        { Cat() }
        </SafeAreaView>
    );
}

const styles : any = (props: any) => StyleSheet.create({
});