import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import NewProject from './screens/NewProject';
import Projects from './screens/Projects';
import ProjectManagers from './screens/ProjectManagers';
import Employees from './screens/Employees';
import Settings from './screens/Settings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import UserContextProvider from './context/UserContextProvider';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
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
                  fontSize: 18,
                  color: 'black',
                },
                headerShown: false,
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
                  fontSize: 18,
                  color: 'black',
                },
                headerShown: false,
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
                  fontSize: 18,
                  color: 'black',
                },
                headerShown: false,
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
                  fontSize: 18,
                  color: 'black',
                },
                headerShown: false,
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
                  fontSize: 18,
                  color: 'black',
                },
                headerShown: false,
              }}
            />
          </Drawer.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </UserContextProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
    width: '80%',
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    fontSize: 20,
  },
});

export default App;
