import React, {useState} from 'react';
import UserContext from './UserContext';
import getCurrentDate from '../utils/currentDate';
import {adminCredentials, auditorCredentials, roleId} from '../config';

function UserContextProvider({children}) {
  const [user, setUser] = useState({
    // role: adminCredentials.adminRole,
    // userId: adminCredentials.adminUserId,
    role: auditorCredentials.auditorRole,
    userId: auditorCredentials.auditorUserId,
    roleId: roleId,
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
    start_date: getCurrentDate(),
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
