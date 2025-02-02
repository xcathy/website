import { Image, ImageBackground } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import { Images } from "@/constants/Images";
import { DraggableContainer } from "./DraggableContainer";

export function GameItem(id: string, handleDrag: DragEventHandler<HTMLDivElement>, style: CSSProperties, handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined ) : React.JSX.Element {
    const webView = (Dimensions.get('window').width > 800);

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            handleClick={ handleClick }
            style={ style }
        > 
            <ImageBackground
                source={Images.canvas}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).canvas}
            >
                <Image
                    style={styles({ height: style?.height, width: style?.width }).icon}
                    source={Images.maze}
                    contentFit='cover'
                    transition={1000}
                />
            </ImageBackground>
        </DraggableContainer>
    ) as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    canvas: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
    },
    icon: {
        top: 15,
        height: props?.height * 0.85 || 0.0,
        width: props?.width * 0.92 || 0.0,
        position: 'relative',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
    },
});