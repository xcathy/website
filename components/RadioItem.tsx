import { Images } from "@/constants/Images";
import { Image, ImageBackground, ImageSource } from 'expo-image';
import { CSSProperties, DragEventHandler, useEffect, useReducer, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Audio, AVPlaybackSource } from 'expo-av';
import { Audios } from "@/constants/Audios";
import { Sound } from "expo-av/build/Audio";

export function RadioItem(id: string, handleDrag?: DragEventHandler<HTMLDivElement> | undefined, style?: CSSProperties | undefined ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const [ LBtn, setLBtn ] = useState<ImageSource>(Images.leftButton);
    const [ PBtn, setPBtn ] = useState<ImageSource>(Images.pauseButton);
    const [ RBtn, setRBtn ] = useState<ImageSource>(Images.rightButton);
    
    const playlist : AVPlaybackSource[] = [
        Audios.morning,
        Audios.raindrops,
        Audios.happy,
    ];

    const [ index, setIndex ] = useState<number>(0);
    const [ status, setStatus ] = useState<string>('paused');

    const img = document.createElement('img');
    img.src = Images.clearImg;

    async function playMusic( previous: boolean, pause: boolean,  next: boolean ) {
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
        }
        if (pause) {
            setPBtn(Images.pauseButtonClick);
            setTimeout(function(){
                setPBtn(Images.pauseButton);
            }, 880);
        }
        if (next) {
            setRBtn(Images.rightButtonClick);
            setTimeout(function(){
                setRBtn(Images.rightButton);
            }, 880);

            if ( index < playlist.length - 1 ) {
                setIndex(index + 1);
            } else {
                setIndex(0);
            }
        }

        const { sound } = await Audio.Sound.createAsync(playlist[index]);
        sound.setIsLoopingAsync(true);
    
        if (status !== 'playing' && next) {
            await sound.playAsync();
            setStatus('playing');
        }

        if (pause) {
            await sound.pauseAsync();
            await sound.unloadAsync();
            setStatus('paused');
        }
        
    }

    const radio =
        <div
            id={ id }
            onDragStart={ (e) => e.dataTransfer.setDragImage(img, 0, 0) }
            onDrag={ handleDrag }
            style={ style }
        >
            <ImageBackground
                source={Images.radio || blurhash}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).radio}
            >
                <div
                    style={{
                        display: "flex",
                        paddingLeft: "10px",
                        paddingTop: "40px",
                        alignSelf: "baseline",
                    }}
                >
                    <Image
                        source={ LBtn }
                        style={ styles().leftButton }
                        onPointerUp={ 
                            () => playMusic(true, false, false)
                        }
                    />
                    <Image
                        source={ PBtn }
                        style={ styles().pauseButton }
                        onPointerUp={ () => playMusic(false, true, false) }
                    />
                    <Image
                        source={ RBtn }
                        style={ styles().rightButton }
                        onPointerUp={ () => playMusic(false, false, true) }
                    />
                </div>
            </ImageBackground>
        </div>;

    return radio as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
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
    leftButton: {
        height: 28,
        width: 17,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: 10,
    },
    pauseButton: {
        height: 28,
        width: 19,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: 10,
    },
    rightButton: {
        height: 28,
        width: 17,
        position: 'relative',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
        zIndex: 13,
        margin: 10,
    },
    
});