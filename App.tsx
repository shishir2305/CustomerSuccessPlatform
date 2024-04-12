import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Main from './Main';

function App() {
  return (
    <UserContextProvider>
      <Main />
    </UserContextProvider>
  );
}

export default App;
