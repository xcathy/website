import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { CSSProperties, useState } from "react";
import Tooltip from "react-native-walkthrough-tooltip";
import { Images } from "@/constants/Images";

export function CatSleep(dialogue?: string, defaultShow?: boolean, style?: CSSProperties) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const [ showTips, setShowTips ] = useState<boolean>(defaultShow || false);

    const catSleep =
        <div
            draggable={ false }
            onPointerUp={() => setShowTips(true)}
            style={ style }
        >
            <Tooltip
                isVisible={showTips}
                content={
                    <Text>{ dialogue } </Text>
                }
                placement="top"
                onClose={() => setShowTips(false)}
                tooltipStyle={{ shadowColor: 'transparent', height: 'auto', width: 'auto' }}
            >
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', cursor: 'pointer' }}>
                    <Image
                        style={styles({ height: style?.height, width: style?.width }).img}
                        source={Images.catSleep}
                        placeholder={blurhash}
                        contentFit="fill"
                        transition={1000}
                    />
                </View>
            </Tooltip>
        </div>;

    return catSleep as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    img: {
        height: props?.height || 0.0,
        width: props?.width || 0.0,
        position: 'absolute',
        backgroundColor: 'transparent',
        
    },
});