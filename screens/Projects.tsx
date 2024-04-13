import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
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
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import UserContext from '../context/UserContext';
import axios from 'axios';

const searchIcons = <AntDesignIcons name="search1" size={30} color="grey" />;
const menuIcon = <FeatherIcons name="menu" size={30} />;

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
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProjectsScreen = () => {
  const navigation = useNavigation();
  const {user, projectsListData, setProjectsListData, addingUserToggle} =
    useContext(UserContext);

  useEffect(() => {
    console.log('Updated');
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
          {menuIcon}
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#999"
          />
          {searchIcons}
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
          <Image
            source={require('../assets/profilepic.jpg')}
            style={{height: 55, width: 55, borderRadius: 50}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#555'}}>
            {user?.role}
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  boxContainer: {
    height: '28%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    paddingVertical: 10,
    marginBottom: 5,
  },
  box: {
    height: '49%',
    width: '47%',
    backgroundColor: '#E8E8E8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    gap: 6,
  },
  boxHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#555',
  },
  boxContent: {
    fontSize: 18,
    color: '#555',
  },
  projectsListContainer: {
    height: '72%',
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
    width: '70%',
    backgroundColor: '#F5F5F5',
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
