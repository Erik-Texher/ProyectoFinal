import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Invernadero from '../screens/Invernadero'
import Configuracion from '../screens/Configuracion'
import { Icon } from '@rneui/base'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "Invernadero":
                iconName = "nature"
                break;
            case "Configuracion":
                iconName = "format-list-bulleted"
                break;
            default:
                break;
        }
        return(
            <Icon
            type="material-comunity"
            name={iconName}
            size={22}
            color={color}
            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='Invernadero'
            tabBarOptions={{
                inactiveTintColor:"#73b767",
                activeTintColor:"#3e6339"
            }}
            screenOptions={({ route }) =>({
                tabBarIcon: ({color}) => screenOptions(route, color)
            })}
            >
                <Tab.Screen
                    name="Invernadero"
                    component={Invernadero}
                />
                <Tab.Screen
                    name="Configuracion"
                    component={Configuracion}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}