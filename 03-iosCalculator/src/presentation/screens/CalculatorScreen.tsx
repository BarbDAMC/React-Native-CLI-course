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
    formula,
    previousNumber,
    clean,
    deleteOperation,
    toogleSign,
    buildNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
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

    if (label === '+') {
      addOperation();
    }

    if (label === '-') {
      subtractOperation();
    }

    if (label === 'x') {
      multiplyOperation();
    }

    if (label === '÷') {
      divideOperation();
    }

    if (label === '=') {
      calculateResult();
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
          {formula}
        </Text>
        
        {
          (formula === previousNumber) ? <Text style={styles.subResult} ></Text>
          : 
          (
            <Text 
              style={styles.subResult}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
             {previousNumber}
            </Text>
          )
        }
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
