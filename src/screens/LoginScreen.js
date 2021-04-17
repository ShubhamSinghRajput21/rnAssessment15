import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {connect} from 'react-redux';
import {loginUser} from '../modules/user';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const style = {
  color: 'grey',
  backgroundColor: '#fff',
};

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      eyeIcon: true,
      userInfo: null,
    };
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();

      console.log(userData);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };

  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '808751039254-cg9c9rlfmetpgs77gfrg2n7gkf2dgfvb.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }

  handleLogin = () => {
    const data = {
      username: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(data, this.props.navigation);
  };

  render() {
    const {email, password, secureTextEntry, eyeIcon} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.activeHeaderText}> Login </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.inactiveHeaderText}> Sign Up </Text>
            </TouchableOpacity>
          </View>
          <Ionicons
            name="person-circle-outline"
            color="#d9d9d9"
            style={styles.userIcon}
          />
          <View style={styles.centeredView}>
            <TextInput
              value={email}
              onChangeText={(text) => this.setState({email: text})}
              placeholder="Username or email address"
              style={styles.input}
            />
            <View style={styles.inputView}>
              <TextInput
                value={password}
                onChangeText={(text) => this.setState({password: text})}
                placeholder="Password"
                style={styles.input2}
                secureTextEntry={secureTextEntry}
              />
              {!eyeIcon ? (
                <Ionicons
                  name="eye-outline"
                  size={22}
                  color="grey"
                  onPress={() =>
                    this.setState({
                      secureTextEntry: !secureTextEntry,
                      eyeIcon: !eyeIcon,
                    })
                  }
                />
              ) : (
                <Ionicons
                  name="eye-off-outline"
                  size={22}
                  color="grey"
                  onPress={() =>
                    this.setState({
                      secureTextEntry: !secureTextEntry,
                      eyeIcon: !eyeIcon,
                    })
                  }
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.handleLogin()}>
              <Ionicons name="checkmark" color="blue" size={20} />
              <Text style={styles.btnText}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginWithTextView}>
            <Text style={styles.loginWithText}>Log in with</Text>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => this.signIn()}>
              <FontAwesome
                name="google-plus-official"
                color="#ff531a"
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="github" size={50} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="twitter-with-circle" color="#1DA1F2" size={50} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="facebook-with-circle" size={50} color="#4267B2" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: style.backgroundColor,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  activeHeaderText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  inactiveHeaderText: {
    fontSize: 18,
    color: style.color,
  },
  userIcon: {
    alignSelf: 'center',
    fontSize: 200,
    marginBottom: 10,
  },
  centeredView: {
    flex: 2,
    justifyContent: 'space-evenly',
  },
  input: {
    borderBottomWidth: 0.3,
    marginHorizontal: 30,
    fontSize: 18,
    padding: 10,
  },
  input2: {
    fontSize: 18,
    flex: 1,
    marginRight: 10,
    padding: 10,
  },
  inputView: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    marginHorizontal: 30,
    fontSize: 18,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    fontSize: 18,
    color: 'blue',
    marginLeft: 10,
  },
  loginWithTextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWithText: {
    color: style.color,
    alignSelf: 'center',
  },
  iconsContainer: {
    flex: 1,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    id: state.users.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data, navigation) => dispatch(loginUser(data, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
