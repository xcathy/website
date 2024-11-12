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

export default function TabTwoScreen() {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const screenW = Dimensions.get('window').width;
    const screenH = Dimensions.get('window').height;
    const clock = document.getElementById("clock");
    const calendar = document.getElementById("calendar");
    const radio = document.getElementById("radio");

    const clockW = clock?.clientWidth || 0.0;
    const clockH = clock?.clientHeight || 0.0;
    const calendarW = calendar?.clientWidth || 0.0;
    const calendarH = calendar?.clientHeight || 0.0;
    const radioW = radio?.clientWidth || 0.0;
    const radioH = radio?.clientHeight || 0.0;

    const isWideScreen = (Dimensions.get('window').width > 800);
    const [ clockBox, setCBox ] = useState<ElemntBox>({ a: 0.8 * screenW, b: 0.53 * screenH, c: 0.8 * screenW + clockW, d: 0.53 * screenH + clockH, W: clockW, H: clockH });
    const [ calendarBox, setCLBox ] = useState<ElemntBox>({ a: 0.85 * screenW, b: 0.05 * screenH, c: 0.85 * screenW + calendarW, d: 0.05 * screenH + calendarH, W: calendarW, H: calendarH });
    const [ radioBox, setRDBox ] = useState<ElemntBox>({ a: 0.45 * screenW, b: 0.28 * screenH, c: 0.85 * screenW + radioW, d: 0.05 * screenH + radioH, W: radioW, H: radioH });

    const moveItem = useCallback((id: string, e: PointerEvent, box: ElemntBox) => {
        if (box.W === 0.0 || box.H === 0.0) {
            if ( id === "clock" ) setCBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: clockW, H: clockH });
            if ( id === "calendar" ) setCLBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: calendarW, H: calendarH });
            if ( id === "radio" ) setRDBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: radioW, H: radioH });
        } else {
            if ( id === "clock" ) setCBox(imageMove(e, box));
            if ( id === "calendar" ) setCLBox(imageMove(e, box));
            if ( id === "radio" ) setRDBox(imageMove(e, box));
        }
    }, [ clockBox, calendarBox, radioBox ]);
  
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
            <div
                draggable={ false }
            >
                <Image
                    source={ Images.catSleep }
                    style={ styles().catSleep }
                />
            </div>
            
            <div
                draggable={ false }
            >
                <ImageBackground
                    source={Images.deskBackground}
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
    catSleep: {
        left: 20,
        top: 250,
        position: 'absolute',
        height: 400,
        width: 400,
        zIndex: 12,
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