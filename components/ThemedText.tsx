import { Text, type TextProps, StyleSheet, Linking } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'bigtitle' | 'bigsubtitle';
  url?: string;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  url,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'bigtitle' ? styles.bigTitle : undefined,
        type === 'bigsubtitle' ? styles.bigSubtitle : undefined,
        style,
      ]}
      onPress={ url ? () => Linking.openURL(url) : () => {} }
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
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
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  bigTitle: {
    fontSize: 60,
    fontWeight: 'bold',
    lineHeight: 32,
    textShadowColor: '#001a33',
    textShadowRadius: 7,
  },
  bigSubtitle: {
    fontSize: 16,
    lineHeight: 24,
    textShadowColor: '#001a33',
    textShadowRadius: 4,
  }
});
