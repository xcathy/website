import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import Clock from 'react-live-clock';
import { ThemedText } from "./ThemedText";
import { Images } from "@/constants/Images";
import { DraggableContainer } from "./DraggableContainer";

export function ClockItem(id: string, handleDrag: DragEventHandler<HTMLDivElement>, style: CSSProperties ) : React.JSX.Element {
    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
            <ImageBackground
                source={Images.clock}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).clock}
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
        </DraggableContainer>
    ) as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    clock: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        shadowColor: '#001a33',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
    },
    time: {
        fontSize: 16,
        lineHeight: 24,
        userSelect: 'none',
    },
});