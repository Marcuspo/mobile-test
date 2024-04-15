import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Home from "../screens/Home"
import List from "../screens/List"

const Routes = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={List} />
    </Stack.Navigator>
  )
}

export default Routes
