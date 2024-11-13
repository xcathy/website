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

interface Position {
    left: number
    top: number
}

interface Size {
    height: number
    width: number
}

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

    const webView = (Dimensions.get('window').width > 800);
    const defaultPositions: Record<string, Position> = 
    {
        "clock":  webView ? { left: 0.8 * screenW, top: 0.53 * screenH } : { left: 0.56 * screenW, top: 0.56 * screenH },
        "calendar": webView ? { left: 0.85 * screenW, top: 0.05 * screenH } : { left: 0.56 * screenW, top: 0.37 * screenH },
        "radio": webView ? { left: 0.45 * screenW, top: 0.4 * screenH } : { left: 0.13 * screenW, top: 0.3 * screenH },
        "plant": webView ? { left: 0.6 * screenW, top: 0.17 * screenH } : { left: 0.65 * screenW, top: 0.18 * screenH },
        "catSleep": webView ? { left: 0.02 * screenW, top: 0.45 * screenH } : { left: 0 * screenW, top: 0.67 * screenH },
    }
    const defaultSize: Record<string, Size> = 
    {
        "clock": webView ? { height: 0.1  * screenH, width: 0.3 * screenH } : { height: 0.05 * screenH, width: 0.15 * screenH },
        "calendar": webView ? { height: 0.4  * screenH, width: 0.2 * screenH } : { height: 0.3  * screenH, width: 0.15 * screenH },
        "radio": webView ? { height: 0.25 * screenH, width: 0.25 * screenH } : { height: 0.19 * screenH, width: 0.19 * screenH },
        "plant": { height: 0.2 * screenH, width: 0.1 * screenH },
        "catSleep": { height: 0.5 * screenH, width: 0.5 * screenH },
    }

    const [ clockBox, setCBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["clock"].left,
            b: defaultPositions["clock"].top,
            c: defaultPositions["clock"].left + clockW,
            d: defaultPositions["clock"].top + clockH,
            W: clockW,
            H: clockH
        });
    const [ calendarBox, setCLBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["calendar"].left,
            b: defaultPositions["calendar"].top,
            c: defaultPositions["calendar"].left + calendarW,
            d: defaultPositions["calendar"].top + calendarH,
            W: calendarW,
            H: calendarH
        });
    const [ radioBox, setRDBox ] = useState<ElemntBox>(
        { 
            a: defaultPositions["radio"].left, 
            b: defaultPositions["radio"].top,
            c: defaultPositions["radio"].left + radioW,
            d: defaultPositions["radio"].top + radioH,
            W: radioW,
            H: radioH
        });
    const [ plantBox, setPTBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["plant"].left,
            b: defaultPositions["plant"].top,
            c: defaultPositions["plant"].left + plantW,
            d: defaultPositions["plant"].top + plantH,
            W: plantW,
            H: plantH
        });

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
                    styles({
                        x: clockBox.a,
                        y: clockBox.b,
                        height: defaultSize["clock"].height,
                        width: defaultSize["clock"].width,
                    }).draggableContainer,
                )
            }
            {
                CalendarItem(
                    "calendar",
                    (e) => moveItem("calendar", e, calendarBox),
                    styles({
                        x: calendarBox.a,
                        y: calendarBox.b,
                        height: defaultSize["calendar"].height,
                        width: defaultSize["calendar"].width,
                    }).draggableContainer,
                )
            }
            {
                RadioItem(
                    "radio",
                    (e) => moveItem("radio", e, radioBox),
                    styles({
                        x: radioBox.a,
                        y: radioBox.b,
                        height: defaultSize["radio"].height,
                        width: defaultSize["radio"].width,
                    }).draggableContainer,
                )
            }
            {
                PlantItem(
                    "plant",
                    (e) => moveItem("plant", e, plantBox),
                    styles({
                        x: plantBox.a,
                        y: plantBox.b,
                        height: defaultSize["plant"].height,
                        width: defaultSize["plant"].width,
                    }).draggableContainer,
                )
            }
            
            <div
                draggable={ false }
            >
                <Image
                    source={ Images.catSleep }
                    style={ styles({
                        left: defaultPositions["catSleep"].left,
                        top: defaultPositions["catSleep"].top,
                        height: defaultSize["catSleep"].height,
                        width: defaultSize["catSleep"].width,
                    }).catSleep }
                />
                <ImageBackground
                    source={webView ? Images.hBackground : Images.vBackground}
                    contentFit="cover"
                    style={styles().background}
                />
            </div>
            {
                Cloud(
                    "clouds",
                    Images.clouds,
                    styles().clouds,
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
    draggableContainer: {
        left: props?.x || 0,
        top: props?.y || 0,
        position: 'absolute',
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        zIndex: 13,
    },
    catSleep: {
        left: props?.left || 0.0,
        top: props?.top || 0.0,
        position: 'absolute',
        height: props?.height || 0.0,
        width: props?.height || 0.0,
        zIndex: 12,
        userSelect: 'none',
    },
    clouds: {
        position: 'absolute',
        height: Dimensions.get('window').height || 900,
        width: Dimensions.get('window').width || 1000,
        zIndex: -12,
    },
});