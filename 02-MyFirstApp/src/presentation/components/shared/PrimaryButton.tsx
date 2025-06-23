
import React from 'react'
import { Platform, StyleSheet, Text, Pressable } from 'react-native'

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label = 'Increment', onPress, onLongPress }: Props) => {
  return (
    <>
      <Pressable 
        onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttoPressed
        ]}
      >
        <Text style={ {color: Platform.OS === 'android' ? 'white' : '#5856D6'}}>{label}</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS == 'android' ? '#5856D6' : 'White',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttoPressed: {
    backgroundColor: '#4746AB',
  }
})



