import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FillProjectDetails from '../components/FillProjectDetails';
import InviteClients from '../components/InviteClients';
import SelectProjectManager from '../components/SelectProjectManager';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const searchIcons = <AntDesignIcons name="search1" size={30} color="grey" />;

const NewProject = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={{flex: 1, padding: 10}}>
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
          <Text style={{fontSize: 16}}>Auditor</Text>
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
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

export default NewProject;
