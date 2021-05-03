import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import Content from "./components/Content";
import Favorites from "./screens/Favorites";
import Settings from "./screens/Settings";
import Song from "./components/Song";

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  switch (routeName) {
    case "Home":
      return "Wende Nyasaye";
    case "Favorites":
      return "Favorites";
    case "Settings":
      return "Settings";
  }
}

function Dialpad() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#02A676",
        inactiveTintColor: "#333333",
        style: { paddingTop: 9, paddingBottom: 3 },
        labelStyle: {
          fontSize: 14,
          fontFamily: "Nova",
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Content}
        options={{
          tabBarLabel: "Hymns",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="playlist-music"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dialpad"
        component={Dialpad}
        options={{
          tabBarLabel: "Search ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dialpad" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={21} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ContentStack({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return <MyTabs />;
}
export default function App() {
  const [loaded] = useFonts({
    Nova: require("./assets/fonts/proxima_nova_soft_medium.ttf"),
    NovaBold: require("./assets/fonts/proxima_nova_soft_bold.ttf"),
    NovaSemiBold: require("./assets/fonts/proxima_nova_soft_semibold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={ContentStack}
          options={{
            headerTitleStyle: {
              fontFamily: "NovaSemiBold",
              fontSize: 22,
            },
          }}
        />
        <Stack.Screen
          name="Song"
          component={Song}
          options={{
            title: "Wende Nyasaye",
            headerTitleStyle: {
              fontFamily: "NovaSemiBold",
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
      <View>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
