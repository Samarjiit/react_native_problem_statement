import React, { useState } from "react"
import { Text, View, Button, StyleSheet } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LocalScreen = () => {
  const [fileContent, setFileContent] = useState(null)

  const toggleReadSave = async () => {
    try {
      let content = null
      const storedContent = await AsyncStorage.getItem("fileContent")
      if (storedContent) {
        content = JSON.parse(storedContent)
      } else {
        content = require("../assets/data.json")

        await AsyncStorage.setItem("fileContent", JSON.stringify(content))
      }

      // Update state with file content
      setFileContent(content)
    } catch (error) {
      console.error("Error reading and saving file content: ", error)
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Read / Save File Content" onPress={toggleReadSave} />
      {fileContent && (
        <View style={styles.contentContainer}>
          <Text style={styles.text}>File Content:</Text>
          <Text>{JSON.stringify(fileContent)}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
})

export default LocalScreen
