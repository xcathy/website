import { SafeAreaView, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Image, ImageBackground } from 'expo-image';
import { Images } from '@/constants/Images';
import { ClockItem } from '@/components/ClockItem';
import { useCallback, useState } from 'react';
import { imageMove } from '@/hooks/imageManipulate';
import { CalendarItem } from '@/components/CalendarItem';
import { Cloud } from '@/components/Cloud';
import { RadioItem } from '@/components/RadioItem';
import { PlantItem } from '@/components/PlantItem';

export default function TabTwoScreen() {
    const screenW = Dimensions.get('window').width;
    const screenH = Dimensions.get('window').height;
    const clock = document.getElementById("clock");
    const calendar = document.getElementById("calendar");
    const radio = document.getElementById("radio");
    const plant = document.getElementById("plant");

    const clockW = clock?.clientWidth || 0.0;
    const clockH = clock?.clientHeight || 0.0;
    const calendarW = calendar?.clientWidth || 0.0;
    const calendarH = calendar?.clientHeight || 0.0;
    const radioW = radio?.clientWidth || 0.0;
    const radioH = radio?.clientHeight || 0.0;
    const plantW = plant?.clientWidth || 0.0;
    const plantH = plant?.clientHeight || 0.0;

    const isWideScreen = (Dimensions.get('window').width > 800);
    const [ clockBox, setCBox ] = useState<ElemntBox>({ a: 0.8 * screenW, b: 0.53 * screenH, c: 0.8 * screenW + clockW, d: 0.53 * screenH + clockH, W: clockW, H: clockH });
    const [ calendarBox, setCLBox ] = useState<ElemntBox>({ a: 0.85 * screenW, b: 0.05 * screenH, c: 0.85 * screenW + calendarW, d: 0.05 * screenH + calendarH, W: calendarW, H: calendarH });
    const [ radioBox, setRDBox ] = useState<ElemntBox>({ a: 0.45 * screenW, b: 0.28 * screenH, c: 0.85 * screenW + radioW, d: 0.05 * screenH + radioH, W: radioW, H: radioH });
    const [ plantBox, setPTBox ] = useState<ElemntBox>({ a: 0.6 * screenW, b: 0.08 * screenH, c: 0.85 * screenW + plantW, d: 0.05 * screenH + plantH, W: plantW, H: plantH });

    const moveItem = useCallback((id: string, e: PointerEvent, box: ElemntBox) => {
        if (box.W === 0.0 || box.H === 0.0) {
            if ( id === "clock" ) setCBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: clockW, H: clockH });
            if ( id === "calendar" ) setCLBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: calendarW, H: calendarH });
            if ( id === "radio" ) setRDBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: radioW, H: radioH });
            if ( id === "plant" ) setPTBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: plantW, H: plantH });
        } else {
            if ( id === "clock" ) setCBox(imageMove(e, box));
            if ( id === "calendar" ) setCLBox(imageMove(e, box));
            if ( id === "radio" ) setRDBox(imageMove(e, box));
            if ( id === "plant" ) setPTBox(imageMove(e, box));
        }
    }, [ clockBox, calendarBox, radioBox, plantBox ]);
  
    return (
        <SafeAreaView
            style={styles().container}
        >
            {
                ClockItem(
                    "clock",
                    (e) => moveItem("clock", e, clockBox),
                    styles({ x: clockBox.a, y: clockBox.b }).clockContainer,
                )
            }
            {
                CalendarItem(
                    "calendar",
                    (e) => moveItem("calendar", e, calendarBox),
                    styles({ x: calendarBox.a, y: calendarBox.b }).calendarContainer,
                )
            }
            {
                RadioItem(
                    "radio",
                    (e) => moveItem("radio", e, radioBox),
                    styles({ x: radioBox.a, y: radioBox.b }).radioContainer,
                )
            }
            {
                PlantItem(
                    "plant",
                    (e) => moveItem("plant", e, plantBox),
                    styles({ x: plantBox.a, y: plantBox.b }).plantContainer,
                )
            }
            
            <div
                draggable={ false }
            >
                <Image
                    source={ Images.catSleep }
                    style={ styles({ webView: isWideScreen }).catSleep }
                />
                <ImageBackground
                    source={isWideScreen ? Images.hBackground : Images.vBackground}
                    contentFit="cover"
                    style={styles().background}
                />
            </div>
            {
                Cloud(
                    "cloud1_1",
                    Images.cloud1,
                    styles().cloud1_1,
                    1,
                    500,
                )
            }
            {
                Cloud(
                    "cloud1_2",
                    Images.cloud1,
                    styles().cloud1_2,
                    1,
                    500,
                )
            }
            {
                Cloud(
                    "cloud1_3",
                    Images.cloud1,
                    styles().cloud1_3,
                    1,
                    500,
                )
            }
            {
                Cloud(
                    "cloud1_4",
                    Images.cloud1,
                    styles().cloud1_4,
                    1,
                    500,
                )
            }
            {
                Cloud(
                    "cloud2_1",
                    Images.cloud2,
                    styles().cloud2_1,
                    1,
                    500,
                )
            }
            {
                Cloud(
                    "cloud2_2",
                    Images.cloud2,
                    styles().cloud2_2,
                    1,
                    500,
                )
            }
        </SafeAreaView>
    );
}

const styles : any = (props: any) => StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#87CEEB',
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
    calendarContainer: {
        left: props?.x || 0,
        top: props?.y || 0,
        position: 'absolute',
        height: 300,
        width: 150,
    },
    radioContainer: {
        left: props?.x || 0,
        top: props?.y || 0,
        position: 'absolute',
        height: 221,
        width: 221,
    },
    plantContainer: {
        left: props?.x || 0,
        top: props?.y || 0,
        position: 'absolute',
        height: 160,
        width: 100,
    },
    catSleep: {
        left: props?.webView ? 0.02 * Dimensions.get("window").width : 0.1 * Dimensions.get("window").width,
        top: props?.webView ? 0.45 * Dimensions.get("window").height : 0.67 * Dimensions.get("window").height,
        position: 'absolute',
        height: 0.5 * Dimensions.get("window").height,
        width: 0.5 * Dimensions.get("window").height,
        zIndex: 12,
        userSelect: 'none',
    },
    cloud1_1: {
        left: 10,
        top: 30,
        position: 'absolute',
        height: 170,
        width: 520,
        zIndex: -12,
    },
    cloud1_2: {
        left: 420,
        top: 20,
        position: 'absolute',
        height: 170,
        width: 530,
        zIndex: -12,
    },
    cloud1_3: {
        left: 800,
        top: 100,
        position: 'absolute',
        height: 170,
        width: 530,
        zIndex: -12,
    },
    cloud1_4: {
        left: 120,
        top: 100,
        position: 'absolute',
        height: 170,
        width: 530,
        zIndex: -12,
    },
    cloud2_1: {
        left: 270,
        top: 30,
        position: 'absolute',
        height: 200,
        width: 530,
        zIndex: -12,
    },
    cloud2_2: {
        left: 100,
        top: -50,
        position: 'absolute',
        height: 170,
        width: 520,
        zIndex: -12,
    },
});