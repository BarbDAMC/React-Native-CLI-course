import { Platform, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: (Platform.OS === 'android') ? top + 10 : top - 20
      }}
    >
      <Text style={{ marginBottom: 10 }}>Profile Screen</Text>

      <PrimaryButton 
        label="Abrir menú"
        onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}
      />
    </View>
  )
}
