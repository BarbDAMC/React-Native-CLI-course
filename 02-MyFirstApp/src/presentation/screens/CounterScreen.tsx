import React, { useState } from 'react'
import { StyleSheet, Text, View , Pressable} from 'react-native'
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      {/* <PrimaryButton
        label='Increment'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      /> */}

      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode='contained'
      >
        Increment
      </Button>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  }
})
