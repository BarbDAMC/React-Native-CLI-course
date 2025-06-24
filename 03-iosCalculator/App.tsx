import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';
import { styles } from './src/config/theme/app-theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
