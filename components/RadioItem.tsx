import { Images } from "@/constants/Images";
import { Image, ImageBackground, ImageSource } from 'expo-image';
import React, { CSSProperties, DragEventHandler, useCallback, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Audios } from "@/constants/Audios";
import { ThemedText } from "./ThemedText";

interface Track {
    title: string
    path: string
}

export function RadioItem(id: string, handleDrag?: DragEventHandler<HTMLDivElement> | undefined, style?: CSSProperties | undefined ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const isWideScreen = (Dimensions.get('window').width > 800);

    const [ LBtn, setLBtn ] = useState<ImageSource>(Images.leftButton);
    const [ PBtn, setPBtn ] = useState<ImageSource>(Images.pauseButton);
    const [ RBtn, setRBtn ] = useState<ImageSource>(Images.rightButton);
    
    const playlist : Record<number, Track>[] = [
        { 0: { title: "morning", path: Audios.morning }},
        { 1: { title: "raindrops", path: Audios.raindrops }},
        { 2: { title: "happy", path: Audios.happy }},
    ];

    const [ index, setIndex ] = useState<number>(0);
    const [ status, setStatus ] = useState<string>('init');
    const music = document.getElementById("audio") as HTMLVideoElement;

    const img = document.createElement('img');
    img.src = Images.clearImg;

    const playMusic = useCallback(( previous: boolean, pause: boolean,  next: boolean ) => {
        if (previous) {
            setLBtn(Images.leftButtonClick);
            setTimeout(function(){
                setLBtn(Images.leftButton);
            }, 880);

            if ( index > 0 ) {
                setIndex(index - 1);
            } else {
                setIndex(playlist.length - 1);
            }
            setStatus('playing');
        }
    
        if (pause) {
            setPBtn(Images.pauseButtonClick);
            setTimeout(function(){
                setPBtn(Images.pauseButton);
            }, 880);

            music.pause();
            setStatus('paused');
        }
    
        if (next) {
            setRBtn(Images.rightButtonClick);
            setTimeout(function(){
                setRBtn(Images.rightButton);
            }, 880);

            if (status !== 'playing') {
                music.play();
                setStatus('playing');
            } else {
                if ( index < playlist.length - 1 ) {
                    setIndex(index + 1);
                } else {
                    setIndex(0);
                }
            }   
        }
        
    },[ music, index, setIndex, status, setStatus ]);

    const radio =
        <div
            id={ id }
            onDragStart={ (e) => e.dataTransfer.setDragImage(img, 0, 0) }
            onDrag={ handleDrag }
            style={ style }
        >
            <audio
                loop
                autoPlay
                id="audio"
                src={ status === "init" ? "" : playlist[index][index]?.path }
            />
            
            <ImageBackground
                source={Images.radio || blurhash}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).radio}
            >
                <ThemedText
                    lightColor="#FFF6ED"
                    darkColor="#FFF6ED"
                    style={styles({ radioH: style?.height, webView: isWideScreen }).nowPlaying}
                >
                    { status === "init" ? 
                        "press right arrow to play! :)"
                        :
                        `Now playing: ${ playlist[index][index]?.title }`
                    }
                </ThemedText>
                <div
                    style={ styles({ webView: isWideScreen }).buttonDisplay }
                >
                    <Image
                        source={ LBtn }
                        style={ styles({ webView: isWideScreen }).leftButton }
                        onPointerUp={ 
                            () => playMusic(true, false, false)
                        }
                    />
                    <Image
                        source={ PBtn }
                        style={ styles({ webView: isWideScreen }).pauseButton }
                        onPointerUp={ () => playMusic(false, true, false) }
                    />
                    <Image
                        source={ RBtn }
                        style={ styles({ webView: isWideScreen }).rightButton }
                        onPointerUp={ () => playMusic(false, false, true) }
                    />
                </div>
            </ImageBackground>
        </div>;

    return radio as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    nowPlaying: {
        paddingTop: props?.webView ? 0.39 * props?.radioH : 0.35 * props?.radioH,
        fontSize: props?.webView ? 10 : 5,
    },
    radio: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 12,
    },
    buttonDisplay: {
        display: "flex",
        paddingLeft: props?.webView ? 8 : 5,
        paddingTop:  props?.webView ? 10 : 0,
        alignSelf: "baseline",
    },
    leftButton: {
        height: props?.webView ? 28 : 15,
        width: props?.webView ? 17 : 9,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: props?.webView ? 10 : 4,
    },
    pauseButton: {
        height: props?.webView ? 28 : 15,
        width: props?.webView ? 19 : 10,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: props?.webView ? 10 : 4,
    },
    rightButton: {
        height: props?.webView ? 28 : 15,
        width: props?.webView ? 17 : 9,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: props?.webView ? 10 : 4,
    },
    
});