import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const CardItem = () => {
  return (
    <View style={styles.cardComponent}>
      <Text style={styles.date}>Today at 12:35</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        hendrerit sagittis purus id viverra. Sed ut augue varius, ultrices arcu
        eget, aliquam quam.
      </Text>
    </View>
  );
};

export default class Notes extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.backButtonText}>{'<'} Back </Text>
        </TouchableOpacity>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Work</Text>
            <View style={styles.notesLengthView}>
              <Text style={styles.notesLength}>0</Text>
            </View>
          </View>
          <View style={styles.mainBody}>
            <CardItem />
            <CardItem />
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
  backButtonText: {
    fontSize: 20,
    color: '#4267B2',
    marginLeft: 20,
  },
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainBody: {
    flex: 4,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ff531a',
  },
  notesLengthView: {
    backgroundColor: '#ffafa1',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesLength: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff531a',
  },
  cardComponent: {
    marginHorizontal: 30,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  content: {
    marginTop: 10,
    textAlign: 'justify',
    color: '#4267B2',
  },
  date: {
    color: '#ff531a',
  },
});
