import Icon from "react-native-vector-icons/Ionicons";

interface IonIconProps {
  name: string,
  size: number,
  color: string
}

export const IonIcon = ({name, size, color} : IonIconProps) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}
