import React from "react"
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native"

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/success.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>please scroll to get all the 5 images </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Image
            style={styles.image}
            source={require("../assets/images/image1.jpeg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/image1.jpeg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/image1.jpeg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/image1.jpeg")}
          />
          <Image
            style={styles.image}
            source={require("../assets/images/image1.jpeg")}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
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
  image: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 200,
  },
})

export default HomeScreen
