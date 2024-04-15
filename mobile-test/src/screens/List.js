import { useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text } from "react-native"

const List = () => {
  const route = useRoute()

  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        {route.params.user.name}
      </Text>
      <Text style={{ fontSize: 17, marginBottom: 10 }}>Interest: </Text>
      {route.params.user.interest.map((el, index) => {
        return <Text key={index}>{el}</Text>
      })}
    </View>
  )
}

export default List
