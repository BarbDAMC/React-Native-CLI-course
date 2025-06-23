import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen'
import { DimensionScreen } from './src/presentation/screens/DimensionScreen'
import { PositionScreen } from './src/presentation/screens/PositionScreen'
import { FlexScreen } from './src/presentation/screens/FlexScreen'
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen'
import Ionicons from "react-native-vector-icons/Ionicons";

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <Ionicons {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Barbara Morantes' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
   
  )
}
