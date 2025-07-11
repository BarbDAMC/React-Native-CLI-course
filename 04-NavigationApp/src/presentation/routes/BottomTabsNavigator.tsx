import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './ToTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        sceneStyle: {
          backgroundColor: globalColors.background
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          color: globalColors.primary
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}

    >
      <Tab.Screen name="Tab1" options={{title: 'Tab1', tabBarIcon: ({color}) => (<IonIcon name='accessibility-outline' size={20} color={color} />)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{title: 'Tab2', tabBarIcon: ({color}) => (<IonIcon name='help-circle-outline' size={20} color={color} />)}} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{title: 'Tab3', tabBarIcon: ({color}) => (<IonIcon name='home-outline' size={20} color={color} />)}} component={StackNavigator} />
    </Tab.Navigator>
  );
}