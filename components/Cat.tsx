import { Image, ImageStyle } from "expo-image";
import { Animated, Dimensions, StyleProp, StyleSheet } from "react-native";
import { Sprites } from '@/constants/Sprites';

export function Cat(e?: PointerEvent, style?: StyleProp<ImageStyle>) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    
    const cat =
        <Animated.View
            style={ styles().move }
        >
            <Image
                style={styles().img}
                source={Sprites.catWalkCycle}
                placeholder={blurhash}
                contentFit="fill"
                transition={1000}
            />
        </Animated.View>;

    return cat as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    img: {
        height: 45,
        width: 45,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    move: {
        height: 45,
        width: 45,
        top: 'auto',
        bottom: 0,
        left: 'auto',
        right: 0,
        position: 'absolute',
        backgroundColor: 'transparent',
    },
});