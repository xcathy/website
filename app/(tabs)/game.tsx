import { StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import { GamePage } from '@/components/GamePage';

export default function TabTwoScreen() {

  const screenW = Dimensions.get('window').width;
  const screenH = Dimensions.get('window').height;
  const isWideScreen = (Dimensions.get('window').width > 800);

  return (
    <SafeAreaView
      style={styles({ screenW, screenH }).container}
    >
      <View style={styles({ screenW, screenH }).body}>
        <GamePage />
      </View>
    </SafeAreaView>
  );
}

const styles : any = (props: any) => StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#231F20',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    body: {
      width: Dimensions.get('window').width * 0.95,
      height: Dimensions.get('window').height * 0.95,
    },
});
