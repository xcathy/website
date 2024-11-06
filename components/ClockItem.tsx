import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { CSSProperties, PointerEventHandler } from "react";
import Clock from 'react-live-clock';
import { ThemedText } from "./ThemedText";
import { Images } from "@/constants/Images";

export function ClockItem(id: string, handleClick?: PointerEventHandler<HTMLDivElement> | undefined, style?: CSSProperties | undefined ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    
    console.log("style: " + JSON.stringify(style));
    const clock =
        <div
            id={ id }
            onPointerUp={ handleClick }
            style={ style || { height: '600', width: '300' } }
        >
            <ImageBackground
                source={Images.clock}
                contentFit="cover"
                style={styles().clock}
            >
                <ThemedText
                    type="default"
                    lightColor="#DADEDF"
                    darkColor="#DADEDF"
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
        top: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        shadowColor: '#001a33',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    time: {
        fontSize: 16,
        lineHeight: 24,
    },
});