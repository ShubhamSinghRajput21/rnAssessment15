import React, {Component} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {Alert, Text, StyleSheet, Switch, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MyNotes from '../screens/MyNotes';
import AddNote from '../screens/AddNote';
import Notes from '../screens/Notes';
import {AppearanceProvider} from 'react-native-appearance';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {getLocalUser, clearUser} from '../modules/user';

const Drawer = createDrawerNavigator();

class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.props.getLocalUser();
    this.state = {
      isEnabled: false,
    };
  }
  CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label={() => <Text style={styles.logout}>Logout</Text>}
          onPress={() =>
            Alert.alert('Alert', 'Do you really want to logout?', [
              {
                text: 'OK',
                onPress: () => this.props.clearUser(),
              },
            ])
          }
        />
        <DrawerItem
          label={() => (
            <View style={styles.themeBtn}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={this.state.isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  this.setState({isEnabled: !this.state.isEnabled})
                }
                value={this.state.isEnabled}
              />
              <Text style={styles.themeBtnText}>Change Theme</Text>
            </View>
          )}
        />
      </DrawerContentScrollView>
    );
  };

  render() {
    if (this.props.id) {
      console.log('true');
      return (
        <AppearanceProvider>
          <NavigationContainer
            theme={this.state.isEnabled === true ? DarkTheme : DefaultTheme}>
            <Drawer.Navigator
              initialRouteName="My-Notes"
              drawerContent={(props) => (
                <this.CustomDrawerContent {...props} />
              )}>
              <Drawer.Screen name="My-Notes" component={MyNotes} />
              <Drawer.Screen name="Add-Note" component={AddNote} />
              <Drawer.Screen name="Notes" component={Notes} />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      );
    } else {
      console.log('false');
      return (
        <AppearanceProvider>
          <NavigationContainer
            theme={(this.scheme = 'dark' ? DefaultTheme : DefaultTheme)}>
            <Drawer.Navigator initialRouteName="Login-Screen">
              <Drawer.Screen name="Login-Screen" component={LoginScreen} />
              <Drawer.Screen name="SignUp" component={SignupScreen} />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      );
    }
  }
}

const styles = StyleSheet.create({
  logout: {
    backgroundColor: '#ffafa1',
    padding: 10,
    fontSize: 20,
  },
  themeBtn: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#ffafa1',
    padding: 10,
  },
  themeBtnText: {
    fontSize: 18,
  },
});

const mapStateToProps = (state) => {
  return {
    id: state.users.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getLocalUser: () => dispatch(getLocalUser()),
  clearUser: () => dispatch(clearUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator);
