import { StyleSheet, View } from "react-native"

export const HomeworkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  )
}

const styles = StyleSheet.create({
  // Tarea-1
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'column'
  // },

  // Tarea-2
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },

  // Tarea-3
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'flex-end'
  // },

  // Tarea-4
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'column',
  //   alignItems: 'flex-end',
  //   justifyContent: 'space-between',
  // },

  // Tarea-5
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },

  // Tarea-7
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   justifyContent:'center',
  //   alignItems: 'center'
  // },

  // Tarea-8
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   justifyContent:'center',
  //   alignItems: 'center',
  // },

  // Tarea-9 no se si es la mejor forma de hacerlo
  // container: {
  //   flex: 1,
  //   backgroundColor: '#28425b',
  //   flexDirection: 'row',
  //   justifyContent:'center',
  //   alignContent: 'center',
  //   flexWrap: 'wrap',
  // },

  container: {
    flex: 1,
    backgroundColor: '#28425b',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
  },

  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  
  // Tarea-5
  // purpleBox: {
  //   backgroundColor: '#5856d6',
  //   height: 'auto'
  // },

  // Tarea-6
  // purpleBox: {
  //   flex: 1,
  //   backgroundColor: '#5856d6',
  //   width: 'auto',
  // },

  purpleBox: {
    backgroundColor: '#5856d6',
  },

  // Tarea-1
  // orangeBox: {
  //   flex: 1,
  //   backgroundColor: '#F0A23B'
  // },

  // Tarea-3
  // orangeBox: {
  //   backgroundColor: '#F0A23B',
  //   alignSelf: 'flex-start',
  // },

  // Tarea-4
  // orangeBox: {
  //   backgroundColor: '#F0A23B',
  //   alignSelf: 'center',
  // },

  // Tarea-5
  // orangeBox: {
  //   backgroundColor: '#F0A23B',
  //   height: 'auto'
  // },

  // Tarea-6
  // orangeBox: {
  //   flex: 1,
  //   backgroundColor: '#F0A23B',
  //   width: 'auto',
  // },

  // Tarea-8 No se si es la mejor forma de hacerlo
  // orangeBox: {
  //   backgroundColor: '#F0A23B',
  //   marginLeft: 200,
  // },

  orangeBox: {
    backgroundColor: '#F0A23B',
    marginTop: 100,
  },

  // Tarea-2
  // blueBox: {
  //   backgroundColor: '#28C4D9',
  //   width: '100%',
  // },

  // Tarea-3
  // blueBox: {
  //   backgroundColor: '#28C4D9',
  //   alignSelf: 'center', 
  // },

  // Tarea-4
  // blueBox: {
  //   backgroundColor: '#28C4D9',
  //   alignSelf: 'flex-start',
  // },

  // Tarea-5
  // blueBox: {
  //   backgroundColor: '#28C4D9',
  //   height: 'auto',
  // }

  // Tarea-6
  // blueBox: {
  //   flex: 3,
  //   backgroundColor: '#28C4D9',
  //   width: 'auto',
  // }
  
  // Tarea-9 no se si es la mejor forma de hacerlo
  // blueBox: {
  //   backgroundColor: '#28C4D9',
  //    marginLeft: 150,
  //    marginRight: 250,
  // }

  blueBox: {
    backgroundColor: '#28C4D9',
  }
})
