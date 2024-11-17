import { Image, ImageStyle } from 'expo-image';
import { Dimensions, StyleProp, StyleSheet } from 'react-native';
import Animated, { interpolate, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useReducer } from 'react';

export function BlogPost(id: string, image: string, style?: StyleProp<ImageStyle>, layout?: Object, title?: string, subtitle?: string, content?: string, signature?: string) : React.JSX.Element {
    const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
    const [ flipped, flip ] = useReducer((prev) => !prev, false);
    const duration = 500;
    const webView = (Dimensions.get('window').width > 800);

    const flipStyle = useAnimatedStyle(() => {
        const spinValue = interpolate(Number(flipped), [0, 1], [0, 180]);
        const rotateValue = withTiming(`${spinValue}deg`, { duration });
    
        return {
            transform: [{ rotateY: rotateValue }],
            backgroundColor: '#f5f0e8',
        };
    });

    const blogPost = 
        <div key={ id } data-grid={ layout }>
            <Animated.View
                style={[style, flipStyle]}
                onPointerUp={ flip }
            >
                { !flipped &&
                    <ThemedView
                        lightColor='transparent'
                        darkColor='transparent'
                        style={styles().container}
                    >
                    
                        <Image
                            style={[style, flipStyle]}
                            source={image}
                            placeholder={blurhash}
                            contentFit='cover'
                            transition={1000}
                        />
                    </ThemedView>
                }
                { flipped &&
                    <ThemedView
                        lightColor='transparent'
                        darkColor='transparent'
                        style={styles().containerFlipped}
                    >
                        <ThemedText
                            type='title'
                            lightColor='#37352f'
                            darkColor='#37352f'
                            style={styles().title}
                            screenType={ webView ? 'web' : 'phone' }
                        >
                            { title }
                        </ThemedText>
                        <ThemedText
                            type='subtitle'
                            lightColor='#787774'
                            darkColor='#787774'
                            style={styles().subtitle}
                            screenType={ webView ? 'web' : 'phone' }
                        >
                            { subtitle }
                        </ThemedText>
                        <ThemedText
                            type='default'
                            lightColor='#787774'
                            darkColor='#787774'
                            style={styles().content}
                            screenType={ webView ? 'web' : 'phone' }
                        >
                            { content }
                        </ThemedText>
                        <ThemedText
                            type='default'
                            lightColor='#787774'
                            darkColor='#787774'
                            style={styles().signature}
                            screenType={ webView ? 'web' : 'phone' }
                        >
                            { signature }
                        </ThemedText>
                    </ThemedView>
                }
            </Animated.View>
        </div>;
    return blogPost as React.JSX.Element;
}

const styles : any = (props: any) => StyleSheet.create({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    containerFlipped: {
        alignSelf: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        transform: 'rotateY(180deg)',
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    subtitle: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    content: {
        marginHorizontal: 20,
        marginVertical: 10,
        textDecorationLine: 'underline',
        textDecorationStyle: 'dotted',
    },
    signature: {
        marginRight: 40,
        marginVertical: 10,
        alignSelf: 'flex-end',
    },
  });
  
