import { Image, ImageBackground, ImageStyle } from "expo-image";
import { Animated, Dimensions, StyleProp, StyleSheet } from "react-native";
import { Sprites } from '@/constants/Sprites';
import { useEffect, useReducer, useState } from "react";
import Clock from 'react-live-clock';
import { ThemedText } from "./ThemedText";
import { Images } from "@/constants/Images";

export function ClockItem(id?: string, layout?: Object, style?: StyleProp<ImageStyle>) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const clock =
        <div
            key={ id }
            data-grid={ layout }
            style={styles().container}
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    clock: {
        height: 60,
        width: 180,
        position: 'absolute',
        backgroundColor: 'transparent',
        shadowColor: '#001a33',
        shadowRadius: 5,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 5 },
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        fontSize: 16,
        lineHeight: 24,
    },
});