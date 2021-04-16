import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  render() {
    const {title, description} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.myText}>Add </Text>
            <Text style={styles.notesText}>Note</Text>
          </View>
          <TextInput
            value={title}
            onChangeText={(text) => this.setState({title: text})}
            placeholder="Add title for your note"
            style={styles.input}
          />
          <TextInput
            value={description}
            onChangeText={(text) => this.setState({description: text})}
            placeholder="Here Add the description of Note"
            style={styles.input2}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.handleLogin()}>
            <FontAwesome name="plus-circle" color="blue" size={20} />
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'row',
  },
  myText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff531a',
  },
  notesText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4267B2',
  },
  input: {
    borderBottomWidth: 0.3,
    fontSize: 18,
    padding: 10,
  },
  input2: {
    borderWidth: 0.3,
    fontSize: 18,
    padding: 10,
    height: 200,
    borderRadius: 5,
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
});
