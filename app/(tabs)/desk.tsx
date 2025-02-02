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
import { CatSleep } from '@/components/CatSleep';
import { GameItem } from '@/components/GameItem';

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
    const webView = (Dimensions.get('window').width > 800);
    
    const defaultPositions: Record<string, Position> = 
    {
        "clock":  webView ? { left: 0.8 * screenW, top: 0.53 * screenH } : { left: 0.56 * screenW, top: 0.56 * screenH },
        "calendar": webView ? { left: 0.85 * screenW, top: 0.05 * screenH } : { left: 0.56 * screenW, top: 0.37 * screenH },
        "radio": webView ? { left: 0.45 * screenW, top: 0.4 * screenH } : { left: 0.13 * screenW, top: 0.3 * screenH },
        "plant": webView ? { left: 0.75 * screenW, top: 0.16 * screenH } : { left: 0.65 * screenW, top: 0.18 * screenH },
        "game": webView ? { left: 0.45 * screenW, top: 0.06 * screenH } : { left: 0.6 * screenW, top: 0.1 * screenH },
        "catSleep": webView ? { left: 0.02 * screenW, top: 0.45 * screenH } : { left: 0 * screenW, top: 0.63 * screenH },
    }
    const defaultSize: Record<string, Size> = 
    {
        "clock": webView ? { height: 0.1  * screenH, width: 0.3 * screenH } : { height: 0.05 * screenH, width: 0.15 * screenH },
        "calendar": webView ? { height: 0.4  * screenH, width: 0.2 * screenH } : { height: 0.3  * screenH, width: 0.15 * screenH },
        "radio": webView ? { height: 0.27 * screenH, width: 0.25 * screenH } : { height: 0.21 * screenH, width: 0.19 * screenH },
        "plant": { height: 0.2 * screenH, width: 0.1 * screenH },
        "game": { height: 0.2 * screenH, width: 0.2 * screenH },
        "catSleep": webView ? { height: 0.6 * screenH, width: 0.6 * screenH } : { height: 0.4 * screenH, width: 0.4 * screenH },
    }

    const [ clockBox, setCBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["clock"].left,
            b: defaultPositions["clock"].top,
            c: defaultPositions["clock"].left + defaultSize["clock"].width,
            d: defaultPositions["clock"].top + defaultSize["clock"].height,
            W: defaultSize["clock"].width,
            H: defaultSize["clock"].height
        });
    const [ calendarBox, setCLBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["calendar"].left,
            b: defaultPositions["calendar"].top,
            c: defaultPositions["calendar"].left + defaultSize["calendar"].width,
            d: defaultPositions["calendar"].top + defaultSize["calendar"].height,
            W: defaultSize["calendar"].width,
            H: defaultSize["calendar"].height
        });
    const [ radioBox, setRDBox ] = useState<ElemntBox>(
        { 
            a: defaultPositions["radio"].left, 
            b: defaultPositions["radio"].top,
            c: defaultPositions["radio"].left + defaultSize["radio"].width,
            d: defaultPositions["radio"].top + defaultSize["radio"].height,
            W: defaultSize["radio"].width,
            H: defaultSize["radio"].height
        });
    const [ plantBox, setPTBox ] = useState<ElemntBox>(
        {
            a: defaultPositions["plant"].left,
            b: defaultPositions["plant"].top,
            c: defaultPositions["plant"].left + defaultSize["plant"].width,
            d: defaultPositions["plant"].top + defaultSize["plant"].height,
            W: defaultSize["plant"].width,
            H: defaultSize["plant"].height
        });
    const [ gameBox, setGMBox ] = useState<ElemntBox>(
    {
        a: defaultPositions["game"].left,
        b: defaultPositions["game"].top,
        c: defaultPositions["game"].left + defaultSize["game"].width,
        d: defaultPositions["game"].top + defaultSize["game"].height,
        W: defaultSize["game"].width,
        H: defaultSize["game"].height
    });

    const moveItem = useCallback((id: string, e: PointerEvent, box: ElemntBox) => {
        if (box.W === 0.0 || box.H === 0.0) {
            if ( id === "clock" ) setCBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["clock"].width, H: defaultSize["clock"].height });
            if ( id === "calendar" ) setCLBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["calendar"].width, H: defaultSize["calendar"].height });
            if ( id === "radio" ) setRDBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["radio"].width, H: defaultSize["radio"].height });
            if ( id === "game" ) setGMBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["game"].width, H: defaultSize["game"].height });
            if ( id === "plant" ) setPTBox({ a: box.a, b: box.b, c: box.c, d: box.d, W: defaultSize["plant"].width, H: defaultSize["plant"].height });
        } else {
            if ( id === "clock" ) setCBox(imageMove(e, box));
            if ( id === "calendar" ) setCLBox(imageMove(e, box));
            if ( id === "radio" ) setRDBox(imageMove(e, box));
            if ( id === "game" ) setGMBox(imageMove(e, box));
            if ( id === "plant" ) setPTBox(imageMove(e, box));
        }
    }, [ clockBox, calendarBox, radioBox, plantBox, gameBox ]);
  
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
            {
                GameItem(
                    "game",
                    (e) => moveItem("game", e, gameBox),
                    styles({
                        x: gameBox.a,
                        y: gameBox.b,
                        height: defaultSize["game"].height,
                        width: defaultSize["game"].width,
                    }).draggableContainer,
                    () => window.open( "./game", "_self"),
                )
            }

            {
                CatSleep(
                    "You can drag and re-arrange the items on the desk!\nExcept for me, I am unmovable.\n",
                    true,
                    styles({
                        left: defaultPositions["catSleep"].left,
                        top: defaultPositions["catSleep"].top,
                        height: defaultSize["catSleep"].height,
                        width: defaultSize["catSleep"].width,
                    }).catSleep,
                )
            }
            
            <div
                draggable={ false }
            >
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