import { Tabs, useNavigation } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { registerRootComponent } from "expo";

function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarItemStyle: { padding: 14 },
        tabBarStyle: {
          height: 80,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 10,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="default"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#F48749",
          tabBarInactiveTintColor: "#818080",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="home-outline"
              color={focused ? "#F48749" : "#818080"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarActiveTintColor: "#F48749",
          tabBarInactiveTintColor: "#818080",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="chatbubbles-outline"
              color={focused ? "#F48749" : "#818080"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Yoga",
          tabBarActiveTintColor: "#F48749",
          tabBarInactiveTintColor: "#818080",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name="person-outline"
              color={focused ? "#F48749" : "#818080"}
            />
          ),
        }}
      />
    </Tabs>
  );
}

registerRootComponent(TabLayout)