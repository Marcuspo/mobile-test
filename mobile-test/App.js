import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Routes from "./src/routes/routes"
import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </NavigationContainer>
  )
}
