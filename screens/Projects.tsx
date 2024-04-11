import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ProjectsList from '../components/ProjectsList';
import ProjectDetails from '../components/ProjectDetails';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import UserContext from '../context/UserContext';
import axios from 'axios';

const searchIcons = <AntDesignIcons name="search1" size={30} color="grey" />;

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
  const navigation = useNavigation();
  const {user, projectsListData, setProjectsListData, addingUserToggle} =
    useContext(UserContext);

  useEffect(() => {
    axios
      .get('http://localhost:8000/projects', {
        params: {
          role: user.role,
          id: user.userId,
        },
      })
      .then(response => {
        console.log(response.data.data);
        setProjectsListData(response.data.data);
      })
      .catch(error => console.log('Error in fetching projects list', error));
  }, [addingUserToggle]);

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}
          onPress={openDrawer}>
          <Image
            source={require('../assets/profilepic.jpg')}
            style={{height: 55, width: 55, borderRadius: 50}}
          />
          <Text style={{fontSize: 16}}>{user?.role}</Text>
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
          />
          {searchIcons}
        </View>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxHeading}>{projectsListData.length}</Text>
          <Text style={styles.boxContent}>All Projects</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>
            {
              projectsListData.filter(project => project.status === 'On-Going')
                .length
            }
          </Text>
          <Text style={styles.boxContent}>In Progress</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>
            {
              projectsListData.filter(project => project.status === 'Completed')
                .length
            }
          </Text>
          <Text style={styles.boxContent}>Completed</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.boxHeading}>
            {
              projectsListData.filter(project => project.status === 'Hold')
                .length
            }
          </Text>
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
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 5,
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
    height: '70%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  searchInput: {
    padding: 15,
    borderRadius: 5,
    fontSize: 20,
    width: '80%',
  },
});

export default Projects;
