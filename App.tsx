import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Main from './Main';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <UserContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    </UserContextProvider>
  );
}

export default App;
