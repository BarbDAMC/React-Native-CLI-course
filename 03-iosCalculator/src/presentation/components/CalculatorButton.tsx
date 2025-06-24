import { Pressable, Text } from "react-native"
import { colors, styles } from "../../config/theme/app-theme"

interface CalculatorButtonProps {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress
}: CalculatorButtonProps) => {
  return (
    <Pressable 
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
        borderRadius: doubleSize ? 100 : 50
      })}
    >
      <Text style={{
        ...styles.buttoText,
        color: (blackText) ? 'black' : 'white',
      }}>{label}</Text>
    </Pressable>
  )
}
