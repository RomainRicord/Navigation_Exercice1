import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import * as React from 'react';
import { Platform } from 'react-native';
import ImageScreen from './src/screens/ImageScreen';
import TextScreen from './src/screens/TextScreen';

const Tab = createBottomTabNavigator();

const App = () => (

  <NavigationContainer>
    <Tab.Navigator screenOptions={({route}) => ({

        tabBarIcon: ({focused, color, size}) => {

          let iconName

          if (route.name == "Home"){
            iconName = Platform.OS === "ios" ? 'ios-list' : 'home'
          }else if (route.name == "Test"){
            iconName = Platform.OS === "ios" ? 'chatbubble-ellipses-outline' : 'comment'
          }

          return (Platform.OS === "ios" ? <Ionicons name={iconName} size={size} color={color} /> : <FontAwesome name={iconName} size={size} color={color} /> )
        }

    }) }>
      <Tab.Screen component={ImageScreen} name="Home" />
      <Tab.Screen component={TextScreen} name="Text" />
    </Tab.Navigator>
  </NavigationContainer>

)

export default App

/*

  npm install @react-navigation/native @react-navigation/native-stack
  expo install react-native-safe-area-context react-native-screens

*/