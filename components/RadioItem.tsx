import { Images } from "@/constants/Images";
import { Image, ImageBackground } from 'expo-image';
import { CSSProperties, DragEventHandler, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Audio, AVPlaybackSource } from 'expo-av';
import { Audios } from "@/constants/Audios";
import { Sound } from "expo-av/build/Audio";

export function RadioItem(id: string, handleDrag?: DragEventHandler<HTMLDivElement> | undefined, style?: CSSProperties | undefined ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const [ track, setTrack ] = useState<AVPlaybackSource>(Audios.morning);
    const [sound, setSound] = useState<Sound>();
    const img = document.createElement('img');
    img.src = Images.clearImg;

    async function playMusic( pause: boolean, previous: boolean, next: boolean ) {
        setTrack(Audios.morning);

        const { sound } = await Audio.Sound.createAsync(track);
        setSound(sound);
    
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

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
                        source={ Images.leftButton }
                        style={ styles().leftButton }
                        onPointerUp={ () => playMusic(true, false, false) }
                    />
                    <Image
                        source={ Images.pauseButton }
                        style={ styles().pauseButton }
                        onPointerUp={ () => playMusic(false, true, false) }
                    />
                    <Image
                        source={ Images.rightButton }
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