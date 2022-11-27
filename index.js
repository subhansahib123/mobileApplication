import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';

import {Provider as StoreProvider} from 'react-redux';
import {store} from '../drtele24/src/store/Store';

export default function Main() {
  return (
    
        
        <App />
        
    
  );
}

AppRegistry.registerComponent(appName, () => App);
