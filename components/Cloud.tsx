import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { CSSProperties, useEffect, useState } from "react";

export function Cloud(id: string, image: string, style?: CSSProperties | undefined, pace?: number, speed?: number ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const [ x, setX ] = useState<number>(style?.width ? -style?.width : 0.0);
    const webView = (Dimensions.get('window').width > 800);

    useEffect(() => {
        setTimeout(() => {
            setX(x + (pace ? pace : 0.0));
            if (x >= Dimensions.get('window').width) {
                setX(style?.width ? -style?.width : 0.0);
            }
        }, (speed ? speed : 1000)); 
    });

    const cloud = 
        <div
            id={id}
            style={ style }
        >
            <ThemedView
                lightColor="transparent"
                darkColor="transparent"
                style={{
                    alignSelf: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    style={styles({ x: x, height: style?.height, width: style?.width, top: style?.top, zIndex: style?.zIndex }).cloud}
                    source={image}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                />
            </ThemedView>
        </div>;
    return cloud as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    cloud: {
        height: props.height || 0.0,
        width: props.width || 0.0,
        top: props.top || 0.0,
        bottom: 0,
        left: (Dimensions.get('window').width - (props.width || 0.0)) - props?.x || 'auto',
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: props.zIndex || -1,
    },
});