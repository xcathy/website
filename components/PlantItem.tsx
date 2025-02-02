import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import { Images } from "@/constants/Images";
import { DraggableContainer } from "./DraggableContainer";

export function PlantItem(id: string, handleDrag: DragEventHandler<HTMLDivElement>, style: CSSProperties ) : React.JSX.Element {
    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
           <ImageBackground
                source={Images.plant}
                contentFit="cover"
                style={styles({ height: style?.height, width: style?.width }).plant}
            />
        </DraggableContainer>
    ) as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    plant: {
        height: props.height || 0.0,
        width: props.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        userSelect: 'none',
        cursor: 'pointer',
    },
});