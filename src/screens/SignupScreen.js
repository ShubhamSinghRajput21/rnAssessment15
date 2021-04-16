import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {signupUser} from '../modules/user';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      secureTextEntry: true,
      secureTextEntry2: true,
      eyeIcon: true,
      eyeIcon2: true,
    };
  }

  handleSignup = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.username,
      phoneNumber: 9999373232,
      socialId: null,
    };
    const signupCallback = (status) => {
      if (status === true) {
        // console.log(this.props.status, this.props.userId);
        this.props.navigation.navigate('My-Notes');
      } else {
        Alert.alert('Alert', 'Login Failed');
      }
    };
    this.props.signupUser(data, signupCallback);
  };

  render() {
    const {
      email,
      username,
      repeatPassword,
      password,
      secureTextEntry,
      secureTextEntry2,
      eyeIcon,
      eyeIcon2,
    } = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.activeHeaderText}> Sign Up </Text>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.inactiveHeaderText}> Login </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cameraView}>
            <FontAwesome5
              name="camera"
              color="#d9d9d9"
              style={styles.userIcon}
            />
          </View>
          <TextInput
            value={email}
            onChangeText={(text) => this.setState({email: text})}
            placeholder="Email address"
            style={styles.input}
          />
          <TextInput
            value={username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder="Username"
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
          <View style={styles.inputView}>
            <TextInput
              value={repeatPassword}
              onChangeText={(text) => this.setState({repeatPassword: text})}
              placeholder="Repeat Password"
              style={styles.input2}
              secureTextEntry={secureTextEntry2}
            />
            {!eyeIcon2 ? (
              <Ionicons
                name="eye-outline"
                size={22}
                color="grey"
                onPress={() =>
                  this.setState({
                    secureTextEntry2: !secureTextEntry2,
                    eyeIcon2: !eyeIcon2,
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
                    secureTextEntry2: !secureTextEntry2,
                    eyeIcon2: !eyeIcon2,
                  })
                }
              />
            )}
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleSignup()}>
            <Ionicons name="checkmark" color="blue" size={20} />
            <Text style={styles.btnText}>SIGN UP</Text>
          </TouchableOpacity>
          <Text style={styles.lastText}>Terms of Service</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: '#fff'},
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  header: {
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
    color: 'gray',
  },
  userIcon: {
    alignSelf: 'center',
    fontSize: 120,
    marginBottom: 10,
  },
  cameraView: {
    width: 180,
    height: 180,
    borderWidth: 10,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#d9d9d9',
    alignSelf: 'center',
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
  lastText: {
    color: 'grey',
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    userId: state.userId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signupUser: (data, callback) => dispatch(signupUser(data, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
