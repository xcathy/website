import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import Clock from 'react-live-clock';
import { ThemedText } from "./ThemedText";
import { Images } from "@/constants/Images";

export function ClockItem(id: string, handleDrag?: DragEventHandler<HTMLDivElement> | undefined, style?: CSSProperties | undefined ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const img = new Image();
    img.src = Images.clearImg;

    const clock =
        <div
            id={ id }
            onDragStart={ (e) => e.dataTransfer.setDragImage(img, 0, 0) }
            onDrag={ handleDrag }
            style={ style }
        >
            <ImageBackground
                source={Images.clock || blurhash}
                contentFit="cover"
                style={styles().clock}
            >
                <ThemedText
                    type="default"
                    lightColor="#FFF6ED"
                    darkColor="#FFF6ED"
                >
                    <Clock
                        className={styles.time}
                        format={'h:mm:ssa'}
                        ticking={true}
                    />
                </ThemedText>
            </ImageBackground>
        </div>;

    return clock as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    clock: {
        height: 60,
        width: 180,
        position: 'absolute',
        backgroundColor: 'transparent',
        shadowColor: '#001a33',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
    },
    time: {
        fontSize: 16,
        lineHeight: 24,
    },
});