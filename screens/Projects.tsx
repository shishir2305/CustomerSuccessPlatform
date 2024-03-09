import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import ProjectsList from '../components/ProjectsList';
import ProjectDetails from '../components/ProjectDetails';

const Stack = createStackNavigator();

const Projects = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsScreen"
        component={ProjectsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProjectDetails"
        component={ProjectDetails}
        // options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>41</Text>
          <Text style={styles.boxContent}>All Projects</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>24</Text>
          <Text style={styles.boxContent}>In Progress</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>12</Text>
          <Text style={styles.boxContent}>Completed</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>5</Text>
          <Text style={styles.boxContent}>Hold</Text>
        </View>
      </View>

      <View style={styles.projectsListContainer}>
        <ProjectsList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
  },
  boxContainer: {
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  box: {
    height: '49%',
    width: '47%',
    backgroundColor: '#E0E5EB',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    gap: 6,
  },
  boxHeading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  boxContent: {
    fontSize: 18,
  },
  projectsListContainer: {
    height: '65%',
  },
});

export default Projects;
