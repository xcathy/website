import { Image, ImageStyle } from "expo-image";
import { Animated, Dimensions, StyleProp, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Sprites } from '@/constants/Sprites';
import { useEffect, useReducer, useState } from "react";
import Tooltip from "react-native-walkthrough-tooltip";

export function Cat(style?: StyleProp<ImageStyle>) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const spriteDimension = {w: 45, h: 45};
    const pathLength = Dimensions.get('window').width - spriteDimension.w;
    const pace = 5;
    const [ direction, toggleDirection ] = useReducer((prev) => -prev, -1);
    const [ back, setBack ] = useState<number>(0);
    const [ forward, setForward ] = useState<number>(0);
    const [ showTips, setShowTips ] = useState<boolean>(true);

    useEffect(() => {
        if (!showTips) {
            setTimeout(() => {
                if (direction > 0 && (forward + 1) * pace >= pathLength) {
                    toggleDirection();
                }
                if (direction < 0 && (back + 1) * pace >= pathLength) {
                    toggleDirection();
                }

                if (direction > 0) {
                    setBack(0);
                    setForward(forward + 1);
                }
                if (direction < 0) {
                    setForward(0);
                    setBack(back + 1);
                }
            }, 1000);
        }  
    });

    const cat =
        <Animated.View
            onPointerUp={() => setShowTips(true)}
            style={ styles({direction: direction, forward: forward, back: back, pace: pace}).move }
        >
            <Tooltip
                isVisible={showTips}
                content={
                    <Text>{ `Hello!\nYou can press the photos to flip to see the blog posts!\nThanks for visiting my page! :3\n(click anywhere to close this tooltip)` } </Text>
                }
                placement="top"
                onClose={() => setShowTips(false)}
                tooltipStyle={{ shadowColor: 'transparent', height: 'auto', width: 'auto' }}
            >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', cursor: 'pointer' }}>
                    <Image
                        style={styles().img}
                        source={Sprites.catWalkCycle}
                        placeholder={blurhash}
                        contentFit="fill"
                        transition={1000}
                    />
                </View>
            </Tooltip>
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
        left: props?.direction > 0 ? props?.forward * props?.pace : (Dimensions.get('window').width - 45) - props?.back * props?.pace || 'auto',
        right: 0,
        position: 'absolute',
        transform: props?.direction > 0 ? 'rotateY(180deg)' : undefined,
        backgroundColor: 'transparent',
    },
});