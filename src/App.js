import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/reusable';
import reducers from './reducers';
import LibraryList from './components/LibraryList'

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header HeaderText="TechStack" />
        <LibraryList />
      </View>
    </Provider>
  );
};

export default App;
