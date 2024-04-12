import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useContext, useEffect, useState} from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import UserContext from '../context/UserContext';
import uuid from 'react-native-uuid';
import getCurrentDate from '../utils/currentDate';
getCurrentDate;

const backIcon = <AntDesignIcons name="arrowleft" size={30} color="black" />;

const SelectProjectManager = () => {
  const navigation = useNavigation();
  const {
    user,
    projectData,
    setProjectData,
    projectsListData,
    setProjectsListData,
    addingUserToggle,
    setAddingUserToggle,
  } = useContext(UserContext);

  const [items, setItems] = useState([]);

  const [projectManagersList, setProjectManagersList] = useState([]);

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/getManagers', {
        params: {
          role_id: user.roleId,
        },
      })
      .then(response => {
        const formattedManagers = response.data.map(element => ({
          label: element.name,
          value: element.user_id,
        }));

        setItems(formattedManagers);

        setProjectManagersList(response.data);
      })
      .catch(error => {
        console.log("Error in fetching manager's list", error);
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  async function addProject() {
    try {
      const response = await axios.post(
        'http://localhost:8000/addProject',
        projectData,
      );
      console.log(response.data);
      setProjectData({
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

      setAddingUserToggle(prevVal => !prevVal);

      navigation.navigate('Projects');
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  }

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>{backIcon}</TouchableOpacity>
        <Text style={styles.heading}>Select Project Manager</Text>
      </View>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={setIsOpen}
        value={currentValue}
        setValue={setCurrentValue}
        placeholder="Select Project Manager"
        textStyle={{fontSize: 18}}
        onChangeValue={value => {
          const selectedManager = projectManagersList.find(
            manager => manager.user_id === value,
          );
          setProjectData({
            ...projectData,
            associated_manager: {
              _id: selectedManager?.user_id,
              name: selectedManager?.name,
              designation: 'Manager',
            },
          });
        }}
      />

      <TouchableOpacity
        style={[styles.button, isOpen && {marginTop: 150}]}
        onPress={addProject}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SelectProjectManager;
