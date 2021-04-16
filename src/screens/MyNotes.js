import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MyNotes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.myText}>My </Text>
            <Text style={styles.notesText}>Notes</Text>
          </View>
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Personal</Text>
            <Text style={styles.notesCount}>0</Text>
          </View>
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Work</Text>
            <Text style={styles.notesCount}>0</Text>
          </View>
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Ideas</Text>
            <Text style={styles.notesCount}>0</Text>
          </View>
          <View style={styles.notesContainer}>
            <Text style={styles.notesTitle}>Lists</Text>
            <Text style={styles.notesCount}>0</Text>
          </View>
          <View style={styles.menuContainer}>
            <View>
              <FontAwesome name="bars" size={45} color="#4267B2" />
              <Text style={styles.menuText}>Menu</Text>
            </View>
            <FontAwesome name="plus-circle" color="#ff531a" size={80} />
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
