import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Invernadero from '../screens/Invernadero'
import Configuracion from '../screens/Configuracion'


const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
            name="Invernadero"
            component={Invernadero}
            />
            <Tab.Screen
            name="Configuración"
            component={Configuracion}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}