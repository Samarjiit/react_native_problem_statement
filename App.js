import * as React from "react"
import { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "./screens/HomeScreen"
import CameraScreen from "./screens/CameraScreen"
import ListScreen from "./screens/ListScreen"
import LocationScreen from "./screens/LocationScreen"
import LocalScreen from "./screens/LocalScreen"

import { SafeAreaProvider } from "react-native-safe-area-context"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen" //splash screen

const Tab = createBottomTabNavigator()

function MyTabs() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    LemonLove: require("./assets/fonts/LemonLove.ttf"),
    MilkyCoffee: require("./assets/fonts/MilkyCoffee.otf"),
  })
  //it will do componentdidmount
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, []) //This code uses the useEffect hook to run an asynchronous function once when the component mounts. The function calls SplashScreen.preventAutoHideAsync() to prevent the splash screen from automatically hiding before the fonts are loaded.

  if (!fontsLoaded) {
    return undefined
  } else {
    SplashScreen.hideAsync()
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "Camera") {
            iconName = focused ? "camera" : "camera-outline"
          } else if (route.name === "Location") {
            iconName = focused ? "location" : "location-outline"
          } else if (route.name === "List") {
            iconName = focused ? "list" : "list-outline"
          }

          // Return the appropriate icon component
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      screenOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome to Home screen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          title: "Welcome to CAMERA screen",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          title: "Welcome to Location screen",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: "Welcome to List screen",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="local"
        component={LocalScreen}
        options={{
          title: "Welcome to Local screen",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="accessibility-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
