import { useNavigation } from "@react-navigation/native"
import React, { useEffect } from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native"
import { useList } from "../hooks/useList"
import { useQuery } from "react-query"

const Home = () => {
  const navigation = useNavigation()

  const data = useQuery({
    queryKey: "List",
    queryFn: async () => {
      const response = await fetch(
        "https://dev.api.syncremote.co/api/v1/admin/users"
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    },
    refetchInterval: 1000,
  })

  if (data.error) {
    return <Text>Deu erro</Text>
  }

  console.log(data.data[0])
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20 }}>Name List</Text>
      <FlatList
        data={data.data.users}
        contentContainerStyle={{ alignItems: "center", gap: 10, width: "100%" }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: "blue", borderRadius: 15 }}
            onPress={() => navigation.navigate("Details", { user: item })}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              {item.name !== "" ? item.name : "Name not found"}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Home
