import { useEffect } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';


export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable 
          style={{
            margin: 5
          }}
          onPress={() => navigation.dispatch( DrawerActions.toggleDrawer )}
        >
          <IonIcon 
            name='menu-outline'
            size={30}
            color={globalColors.dark}
          />
        </Pressable>
      )
    })
  }, [])

  return (<></>)
}
