import { SafeAreaView, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { ImageBackground } from 'expo-image';
import { Images } from '@/constants/Images';
import { ClockItem } from '@/components/ClockItem';
import { useCallback, useState } from 'react';
import { imageMove } from '@/hooks/imageManipulate';

export default function TabTwoScreen() {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const screenW = Dimensions.get('window').width;
    const screenH = Dimensions.get('window').height;
    const clock = document.getElementById("clock");

    const clockW = clock?.clientWidth || 0.0;
    const clockH = clock?.clientHeight || 0.0;

    const isWideScreen = (Dimensions.get('window').width > 800);
    const [ clockBox, setCBox ] = useState<ElemntBox>({ a: 0.8 * screenW, b: 0.53 * screenH, c: 0.8 * screenW + clockW, d: 0.53 * screenH + clockH, W: clockW, H: clockH });
  
    const moveItem = useCallback((id: string, e: PointerEvent, box: ElemntBox) => {
        if (box.W === 0.0 || box.H === 0.0) {
            if ( id === "clock" ) setCBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: clockW, H: clockH });
        } else {
            if ( id === "clock" ) setCBox(imageMove(e, box));
        }
    }, [ clockBox ]);
  
    return (
        <SafeAreaView
            style={styles().container}
        >
            {
                ClockItem(
                    "clock",
                    (e) => {
                        moveItem("clock", e, clockBox);
                    },
                    styles({ x: clockBox.a, y: clockBox.b }).clockContainer,
                )
            }
            <div
                draggable={ false }
            >
                <ImageBackground
                    source={Images.deskBackground}
                    contentFit="cover"
                    style={styles().background}
                />
            </div>
        </SafeAreaView>
    );
}

const styles : any = (props: any) => StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'transparent',
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        zIndex: -10,
    },
    clockContainer: {
        left: props?.x || 0,
        top: props?.y || 0,
        position: 'absolute',
        height: 60,
        width: 180,
    },
});