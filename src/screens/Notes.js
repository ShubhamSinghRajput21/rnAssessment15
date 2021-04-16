import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

export default class Notes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={styles.mainBody}></View>
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
  },
  header: {
    flex: 1,
  },
  mainBody: {
    flex: 4,
  },
});
