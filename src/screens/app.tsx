import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import { StyleSheet, Text, View } from 'react-native'
import Hello from '../components/Hello'

function App() {
  return (
    <View style={styles.container}>
      <Hello name={"おうは"}/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
registerRootComponent(App)

