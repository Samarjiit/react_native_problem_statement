import React, { useState, useEffect } from "react"
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native"

function ListScreen() {
  const [isLoading, setIsLoading] = useState(true) //sLoading is used to indicate whether data is being fetched,
  const [data, setData] = useState([])

  useEffect(() => {
    //fetch data from the provided API URL when the component mounts.Upon successful parsing, we update the data state with the fetched JSON data and set isLoading to false to indicate that data fetching is complete.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          initialNumToRender={5}
          data={data}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.text}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  item: {
    backgroundColor: "#55E2E9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    color: "black",
    fontSize: 20,
    marginTop: 40,
    fontFamily: "MilkyCoffee",
  },
})

export default ListScreen
