/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/about` | `/(tabs)/blog` | `/(tabs)/contacts` | `/(tabs)/desk` | `/(tabs)/game` | `/..\constants\Games` | `/_sitemap` | `/about` | `/blog` | `/contacts` | `/desk` | `/game`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
