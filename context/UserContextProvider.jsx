import React, {useState} from 'react';
import UserContext from './UserContext';

function UserContextProvider({children}) {
  const [user, setUser] = useState({
    role: 'Admin',
    userId: 'auth0|660e9fcef5c5f28eda8b8c30',
    roleId: 'rol_qLO42FIvSNsdZEO4',
  });

  const [projectsListData, setProjectsListData] = useState([]);

  const contextValue = {
    user: user,
    projectsListData: projectsListData,
    setProjectsListData: setProjectsListData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
