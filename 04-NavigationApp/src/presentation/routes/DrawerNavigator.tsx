import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawerContent {...props} />}

      screenOptions={{
        drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',
        headerShown: false,
        

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        }
      }}
    >
      <Drawer.Screen 
        options={{ drawerIcon: ({color}) => ( <IonIcon name='bonfire-outline' size={30} color={color} /> ) }} 
        name="Tabs" 
        component={BottomTabsNavigator} 
      />
      <Drawer.Screen 
        options={{ drawerIcon: ({color}) => ( <IonIcon name='person-circle-outline' size={30} color={color} /> ) }} 
        name="Profile" 
        component={ProfileScreen} 
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}