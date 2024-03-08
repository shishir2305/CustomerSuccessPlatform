import {View, Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import NewProject from './screens/NewProject';
import Projects from './screens/Projects';
import ProjectManagers from './screens/ProjectManagers';
import Employees from './screens/Employees';
import Settings from './screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Projects">
        <Drawer.Screen
          name="New Project"
          component={NewProject}
          options={{
            drawerLabel: 'New Project',
            drawerIcon: ({color, size}) => (
              <AntDesignIcons name="plus" size={30} color="black" />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
        <Drawer.Screen
          name="Projects"
          component={Projects}
          options={{
            drawerLabel: 'Projects',
            drawerIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="bag-personal-outline"
                size={30}
                color="black"
              />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
        <Drawer.Screen
          name="Project Managers"
          component={ProjectManagers}
          options={{
            drawerLabel: 'Project Managers',
            drawerIcon: ({color, size}) => (
              <AntDesignIcons name="user" size={30} color="black" />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
        <Drawer.Screen
          name="Employees"
          component={Employees}
          options={{
            drawerLabel: 'Employees',
            drawerIcon: ({color, size}) => (
              <AntDesignIcons name="adduser" size={30} color="black" />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerLabel: 'Settings',
            drawerIcon: ({color, size}) => (
              <AntDesignIcons name="setting" size={30} color="black" />
            ),
            drawerLabelStyle: {
              fontSize: 20,
              color: 'black',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
