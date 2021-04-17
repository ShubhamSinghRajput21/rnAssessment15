import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getNotes} from '../modules/note';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MyNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: 0,
      work: 0,
      Ideas: 0,
      lists: 0,
    };
    this.props.getNotes(this.props.id, this.props.navigation);
  }

  filterNotes = () => {
    let personal = 0;
    let work = 0;
    let Ideas = 0;
    let lists = 0;
    this.props.notes.map((item) => {
      if (item.title === 'Personal') {
        ++personal;
      } else if (item.title === 'Work') {
        ++work;
      } else if (item.title === 'Ideas') {
        ++Ideas;
      } else if (item.title === 'Lists') {
        ++lists;
      }
    });
    this.setState({personal, work, Ideas, lists});
  };

  componentDidMount() {
    this.filterNotes();
  }
  render() {
    const {personal, work, Ideas, lists} = this.state;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.myText}>My </Text>
            <Text style={styles.notesText}>Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notesContainer}
            onPress={() => this.props.navigation.navigate('Notes')}>
            <Text style={styles.notesTitle}>Personal</Text>
            <Text style={styles.notesCount}>{personal}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notesContainer}
            onPress={() => this.props.navigation.navigate('Notes')}>
            <Text style={styles.notesTitle}>Work</Text>
            <Text style={styles.notesCount}>{work}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notesContainer}
            onPress={() => this.props.navigation.navigate('Notes')}>
            <Text style={styles.notesTitle}>Ideas</Text>
            <Text style={styles.notesCount}>{Ideas}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notesContainer}
            onPress={() => this.props.navigation.navigate('Notes')}>
            <Text style={styles.notesTitle}>Lists</Text>
            <Text style={styles.notesCount}>{lists}</Text>
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
    id: state.users.id,
    notes: state.notes.notes,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getNotes: (id, navigation) => dispatch(getNotes(id, navigation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyNotes);
