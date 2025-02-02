import { ImageBackground } from "expo-image";
import { Dimensions, StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import Clock from 'react-live-clock';
import { ThemedText } from "./ThemedText";
import { Images } from "@/constants/Images";
import { DraggableContainer } from "./DraggableContainer";

export function CalendarItem(id: string, handleDrag: DragEventHandler<HTMLDivElement>, style: CSSProperties ) : React.JSX.Element {
    const webView = (Dimensions.get('window').width > 800);

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
            <ImageBackground
                source={Images.calendar}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).calendar}
            >
                <ThemedText
                    type="default"
                    lightColor="#EE8EA5"
                    darkColor="#EE8EA5"
                >
                    <div
                        style={{ display: "grid" }}
                    >
                        <Clock
                            style={styles({ calendarH: style?.height }).year}
                            format={'dddd YYYY'}
                            ticking={false}
                        />
                        <Clock
                            style={styles({ calendarH: style?.height }).date}
                            format={'DD'}
                            ticking={false}
                        />
                        <Clock
                            style={styles({ webView: webView }).month}
                            format={'MMMM'}
                            ticking={false}
                        />
                    </div>
                </ThemedText>
                
            </ImageBackground>
        </DraggableContainer>
    ) as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    calendar: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'pointer',
    },
    year: {
        fontSize: 10,
        lineHeight: 0.015 * props?.calendarH || 0,
        textAlign: 'center',
        userSelect: 'none',
    },
    date: {
        fontSize: 30,
        paddingTop: 8,
        paddingBottom: 8,
        lineHeight: 0.005 * props?.calendarH || 0,
        textAlign: 'center',
        userSelect: 'none',
    },
    month: {
        fontSize: 16,
        textAlign: 'center',
        userSelect: 'none',
    },
});