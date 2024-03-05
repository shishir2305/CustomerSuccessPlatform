import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProjectsList from '../components/ProjectsList';

const Projects = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>41</Text>
          <Text>All Projects</Text>
        </View>

        <View style={styles.box}>
          <Text>24</Text>
          <Text>In Progress</Text>
        </View>

        <View style={styles.box}>
          <Text>12</Text>
          <Text>Completed</Text>
        </View>

        <View style={styles.box}>
          <Text>5</Text>
          <Text>Hold</Text>
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
  },
  boxContainer: {
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  box: {
    height: '47%',
    width: '45%',
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  projectsListContainer: {
    height: '65%',
  },
});

export default Projects;
