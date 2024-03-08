import {View, Text} from 'react-native';
import React from 'react';
import FillProjectDetails from '../components/FillProjectDetails';
import InviteClients from '../components/InviteClients';
import SelectProjectManager from '../components/SelectProjectManager';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const NewProject = () => {
  return (
    <Stack.Navigator initialRouteName="FillProjectDetails">
      <Stack.Screen name="FillProjectDetails" component={FillProjectDetails} />
      <Stack.Screen name="InviteClients" component={InviteClients} />
      <Stack.Screen
        name="SelectProjectManager"
        component={SelectProjectManager}
      />
    </Stack.Navigator>
  );
};

export default NewProject;
