import { Text, View } from "react-native"
import { styles } from "../../config/theme/app-theme"
import { CalculatorButton } from "../components/CalculatorButton"
import { buttonsList } from './ButtonsList';
import { useCalculator } from "../hooks/useCalculator";

interface Button {
  label: string;
  colors: string;
  doubleSize?: boolean;
  blackText?: boolean;
}

export const CalculatorScreen = () => {
  const { 
    number, 
    clean,
    deleteOperation,
    toogleSign,
    buildNumber,
  } = useCalculator();

  const handleButtonPress = (label: string) => {
    if (label === 'C') {
      clean();
    }
    
    if (label === 'del') {
      deleteOperation();
    } 

    if (label === '+/-') {
      toogleSign();
    }
    
    if (parseInt(label) >= 0 && parseInt(label) <= 9 || label === '.') {
      buildNumber(label);
    }
  }

  return (
    <View style={styles.calculatorContainer}>

      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <Text 
          style={styles.mainResult}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {number}
        </Text>
        <Text style={styles.subResult}>15</Text>
      </View>

      {
        buttonsList.map((buttonsListRow, index) => (
          <View key={index} style={styles.buttonRow}>
            {buttonsListRow.map((button : Button, index) => (
              <CalculatorButton
                key={index}
                label={button.label}
                color={button.colors}
                doubleSize={button.doubleSize}
                blackText={button.blackText}
                onPress={ () => handleButtonPress(button.label)}
              />
            ))}
          </View>
        ))
      }
    </View>
  )
}
