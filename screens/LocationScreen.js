import { Text, View, StyleSheet, ImageBackground } from "react-native"
import { BlurView } from "expo-blur"
import * as Location from "expo-location"
import { useState, useEffect } from "react"

function LocationScreen() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    ;(async () => {
      let location = await Location.getCurrentPositionAsync({}) //etch the current location using Location.getCurrentPositionAsync() when the component mounts.
      setLocation(location)
    })()
  }, [])

  let text
  if (location) {
    text = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
  }

  return (
    <ImageBackground
      source={require("../assets/images/map.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Location!</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 25,
    marginTop: 50,
    fontFamily: "MilkyCoffee",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
})

export default LocationScreen
