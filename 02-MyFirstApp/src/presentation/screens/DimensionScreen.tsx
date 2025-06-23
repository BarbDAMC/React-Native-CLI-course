import { StyleSheet, useWindowDimensions } from "react-native"
import { View, Text } from "react-native"
import {Dimensions} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        {/* <Text>DimensionScreen</Text> */}

        {/* 0.50 -> 50% */}
        <View style={{...styles.purpleBox, width: width * 0.6}}>

        </View>

      </View>
      
      <Text style={styles.title}>w: {width}, h: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
})
