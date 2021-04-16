/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// import AddNote from './src/screens/AddNote';
import Notes from './src/screens/Notes';
AppRegistry.registerComponent(appName, () => Notes);
