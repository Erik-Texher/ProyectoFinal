import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Invernadero from '../screens/Invernadero'
import Configuracion from '../screens/Configuracion'
import { Icon } from '@rneui/base'
import Humedad from '../screens/Parametros/Humedad';
import Temperatura from '../screens/Parametros/Temperatura';



const Tab = createBottomTabNavigator()
const ConfStack = createNativeStackNavigator();

function NavigationStackC() {
    return(
        <ConfStack.Navigator
        initialRouteName='ConfiguracionScreen'
        >
            <ConfStack.Screen
            name='ConfiguracionScreen'
            component={Configuracion}
            />
            <ConfStack.Screen
            name='HumedadScreen'
            component={Humedad}
            />
            <ConfStack.Screen
            name='TemperaturaScreen'
            component={Temperatura}
            />
        </ConfStack.Navigator>
    )
}

export default function NavigationTab() {
    // const screenOptions = (route, color) => {
    //     let iconName
    //     switch (route.name) {
    //         case "Invernadero":
    //             iconName = "nature"
    //             break;
    //         case "Configuracion":
    //             iconName = "format-list-bulleted"
    //             break;
    //         default:
    //             break;
    //     }
    //     return(
    //         <Icon
    //         type="material-comunity"
    //         name={iconName}
    //         size={22}
    //         color={color}
    //         />
    //     )
    // }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Invernadero'
                screenOptions={{
                    tabBarActiveTintColor: "#3e6339",
                    tabBarInactiveTintColor: "#73b767"

                }}
            >
                <Tab.Screen
                    name='Invernadero'
                    component={Invernadero}
                    options={{
                        tabBarLabel: 'Invernadero',
                        tabBarIcon: ({ color, size }) => (
                            <Icon type="material-comunity" name="nature" color={color} size={size} />
                        ),
                        
                    }}
                />
                <Tab.Screen
                    name='Configuracion'
                    component={NavigationStackC}
                    options={{
                        tabBarLabel: 'Configuración',
                        tabBarIcon: ({ color, size }) => (
                            <Icon type="material-comunity" name="format-list-bulleted" color={color} size={size} />
                        ),
                        headerShown:false
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Tab.Navigator
        //     initialRouteName='Invernadero'
        //     tabBarOptions={{
        //         inactiveTintColor:"#73b767",
        //         activeTintColor:"#3e6339"
        //     }}
        //     screenOptions={({ route }) =>({
        //         tabBarIcon: ({color}) => screenOptions(route, color)
        //     })}
        //     >
        //         <Tab.Screen
        //             name="Invernadero"
        //             component={Invernadero}
        //         />
        //         <Tab.Screen
        //             name="Configuracion"
        //             component={Configuracion}
        //         />
        //     </Tab.Navigator>
        // </NavigationContainer>
    );
}