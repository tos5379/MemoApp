import { View, Text, StyleSheet } from 'react-native'

type Props = {
    name: string
}

export default function Hello(props: Props) {
    const { name } = props
    return (
      <View>
        <Text style={styles.text}>Hello {name}</Text>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    text: {
      backgroundColor: 'blue',
      color: '#ffffff',
      fontSize: 24,
      padding: 16,
      fontWeight: 'bold',
    },
  })
  