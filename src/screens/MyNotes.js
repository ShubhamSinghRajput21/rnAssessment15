import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {addNote} from '../modules/note';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MyNotes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>{this.props.id}</Text>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.myText}>My </Text>
            <Text style={styles.notesText}>Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Personal</Text>
            <Text style={styles.notesCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Work</Text>
            <Text style={styles.notesCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Ideas</Text>
            <Text style={styles.notesCount}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Lists</Text>
            <Text style={styles.notesCount}>0</Text>
          </TouchableOpacity>
          <View style={styles.menuContainer}>
            <TouchableOpacity>
              <FontAwesome name="bars" size={45} color="#4267B2" />
              <Text style={styles.menuText}>Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Add-Note')}>
              <FontAwesome name="plus-circle" color="#ff531a" size={80} />
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
  notesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 30,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4267B2',
  },
  notesCount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#4267B2',
  },
  menuText: {
    color: '#ff531a',
    fontWeight: 'bold',
  },
});
const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MyNotes);
