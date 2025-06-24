import { StyleSheet, View } from "react-native";

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />

      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0.5,
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856d6',
  },
  box2: {
    backgroundColor: '#4c4ac1',
    // alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#3735a3',
  },
  box4: {
    backgroundColor: '#1e1c6e',
  }
})
