import { ImageBackground } from "expo-image";
import { StyleSheet } from "react-native";
import { CSSProperties, DragEventHandler } from "react";
import { Images } from "@/constants/Images";
import { DraggableContainer } from "./DraggableContainer";

export function PlantItem(id: string, handleDrag: DragEventHandler<HTMLDivElement>, style: CSSProperties ) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
           <ImageBackground
                source={Images.plant || blurhash}
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