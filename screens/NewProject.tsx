import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FillProjectDetails from '../components/FillProjectDetails';
import InviteClients from '../components/InviteClients';
import SelectProjectManager from '../components/SelectProjectManager';

const Stack = createStackNavigator();

const NewProject = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="FillProjectDetails"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="FillProjectDetails"
          component={FillProjectDetails}
        />
        <Stack.Screen name="InviteClients" component={InviteClients} />
        <Stack.Screen
          name="SelectProjectManager"
          component={SelectProjectManager}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  menuButton: {
    borderRadius: 50,
    marginLeft: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyIcon: {
    width: 30, // Adjust according to your icon size
  },
});

export default NewProject;
