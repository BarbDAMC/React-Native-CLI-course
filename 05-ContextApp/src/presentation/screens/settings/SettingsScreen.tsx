import { Pressable, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { styles } from "../../config/app-theme";
import { useCounterStore } from "../../store/counter-store";
import { useEffect } from "react";

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  useEffect(() => {
    navigation.setOptions({
      title: `Count: ${count}`
    })
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable 
        style={styles.primaryButton}
        onPress={() => incrementBy(1)}
      >
        <Text>+1</Text>
      </Pressable>

      <Pressable 
        style={styles.primaryButton}
        onPress={() => incrementBy(-1)}
      >
        <Text>-1</Text>
      </Pressable>
    </View>
  )
}
