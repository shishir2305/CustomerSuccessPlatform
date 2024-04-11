import React, {useState} from 'react';
import UserContext from './UserContext';

function UserContextProvider({children}) {
  const [user, setUser] = useState({
    role: 'Admin',
    userId: 'auth0|660e9fcef5c5f28eda8b8c30',
    roleId: 'rol_qLO42FIvSNsdZEO4',
  });

  const [addingUserToggle, setAddingUserToggle] = useState(true);

  const [projectsListData, setProjectsListData] = useState([]);

  const [projectData, setProjectData] = useState({
    _id: '',
    name: '',
    associated_manager: {
      _id: '',
      name: '',
      designation: 'Manager',
    },
    status: 'On-Going',
    start_date: '2024-4-9',
  });

  const contextValue = {
    user: user,
    projectsListData: projectsListData,
    setProjectsListData: setProjectsListData,
    projectData: projectData,
    setProjectData: setProjectData,
    addingUserToggle: addingUserToggle,
    setAddingUserToggle: setAddingUserToggle,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
