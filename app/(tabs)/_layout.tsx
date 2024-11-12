import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { faHouse, faCamera, faLeaf, faQuestion, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: '/',
          tabBarIcon: ({ color, focused }) => (
            TabBarIcon( faHouse, color )
          ),
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          title: 'Blog',
          href: '/blog',
          tabBarIcon: ({ color, focused }) => (
            TabBarIcon( faCamera, color )
          ),
        }}
      />
      <Tabs.Screen
        name="desk"
        options={{
          title: 'Desk',
          href: '/desk',
          tabBarIcon: ({ color, focused }) => (
            TabBarIcon( faLeaf, color )
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          href: '/about',
          tabBarIcon: ({ color, focused }) => (
            TabBarIcon( faQuestion, color )
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Contacts',
          href: '/contacts',
          tabBarIcon: ({ color, focused }) => (
            TabBarIcon( faPaperPlane, color )
          ),
        }}
      />
    </Tabs>
  );
}
