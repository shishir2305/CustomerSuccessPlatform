import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Main from './Main';
import {SafeAreaView} from 'react-native';

function App() {
  // wrapping the entire application around the usercontextprovider so that all the components inside it can have access to the global states
  return (
    <UserContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    </UserContextProvider>
  );
}

export default App;
