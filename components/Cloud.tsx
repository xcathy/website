import { Image } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { CSSProperties, useEffect, useState } from "react";

export function Cloud(id: string, image: string, style?: CSSProperties | undefined, pace?: number, speed?: number ) : React.JSX.Element {
    const windowW = Dimensions.get('window').width;
    const webView = (Dimensions.get('window').width > 800);
    const [ x, setX ] = useState<number>(0.0);
    const loopPoint = webView ? 0.6 * windowW : 0.2 * windowW;

    useEffect(() => {
        setTimeout(() => {
            setX(x - (pace ? pace : 0.0));
            if (x <= -loopPoint) {
                setX(0.0);
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
                    style={styles({ x: x, height: style?.height, width: style?.width, zIndex: style?.zIndex }).cloud}
                    source={image}
                    contentFit="cover"
                    transition={1000}
                />
            </ThemedView>
        </div>;
    return cloud as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    cloud: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        left: props?.x || 'auto',
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: props.zIndex || -1,
    },
});