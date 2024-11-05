import { Text, type TextProps, StyleSheet, Linking } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'bigtitle' | 'bigsubtitle';
  url?: string;
  screenType?: 'web' | 'phone',
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  url,
  screenType,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    type === 'link' ? 
      <Text
        style={[ styles().link, style ]}
        onPress={ url ? () => Linking.openURL(url) : () => {} }
        {...rest}
      />
      :
      <Text
        style={[
          { color },
          type === 'default' ? styles(screenType).default : undefined,
          type === 'title' ? styles(screenType).title : undefined,
          type === 'defaultSemiBold' ? styles(screenType).defaultSemiBold : undefined,
          type === 'subtitle' ? styles(screenType).subtitle : undefined,
          type === 'bigtitle' ? styles(screenType).bigTitle : undefined,
          type === 'bigsubtitle' ? styles(screenType).bigSubtitle : undefined,
          style,
        ]} 
        {...rest}
      />
  );
}

const styles : any = (props: any) => StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  bigTitle: {
    fontSize: props?.screenType === 'web' ? 60 : 40,
    fontWeight: 'bold',
    lineHeight: 32,
    textShadowColor: '#193047',
    textShadowRadius: 6,
    textAlign: 'center',
    flexDirection: 'column',
  },
  bigSubtitle: {
    fontSize: props?.screenType === 'web' ? 16 : 10,
    lineHeight: 24,
    textShadowColor: '#193047',
    textShadowRadius: 6,
  }
});
