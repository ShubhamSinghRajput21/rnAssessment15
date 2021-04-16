import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MyNotes from '../screens/MyNotes';
import AddNote from '../screens/AddNote';
import Notes from '../screens/Notes';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer
        theme={(this.scheme = 'dark' ? DefaultTheme : DefaultTheme)}>
        <Drawer.Navigator initialRouteName="Login-Screen">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Login-Screen" component={LoginScreen} />
          <Drawer.Screen name="SignUp" component={SignupScreen} />
          <Drawer.Screen name="My-Notes" component={MyNotes} />
          <Drawer.Screen name="Add-Note" component={AddNote} />
          <Drawer.Screen name="Notes" component={Notes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
