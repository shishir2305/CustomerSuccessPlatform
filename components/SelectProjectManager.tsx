import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import UserContext from '../context/UserContext';
import getCurrentDate from '../utils/currentDate';

const backIcon = <AntDesignIcons name="arrowleft" size={30} color="black" />;

const SelectProjectManager = () => {
  const navigation = useNavigation();
  const {
    user,
    projectData,
    setProjectData,
    addingUserToggle,
    setAddingUserToggle,
  } = useContext(UserContext);
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

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
        setAddingUserToggle(!addingUserToggle);
      })
      .catch(error => {
        console.log("Error in fetching manager's list", error);
      });
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const addProject = async () => {
    try {
      await axios.post('http://localhost:8000/addProject', projectData);
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
      navigation.navigate('Projects');
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>{backIcon}</TouchableOpacity>
        <Text style={styles.heading}>Select Project Manager</Text>
        <View style={styles.emptyIcon}></View>
      </View>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={setIsOpen}
        value={currentValue}
        setValue={setCurrentValue}
        placeholder="Select Project Manager"
        textStyle={styles.dropDownText}
        onChangeValue={value => {
          const selectedManager = items.find(
            manager => manager.value === value,
          );
          setProjectData({
            ...projectData,
            associated_manager: {
              _id: selectedManager?.value,
              name: selectedManager?.label,
              designation: 'Manager',
            },
          });
        }}
      />
      <TouchableOpacity style={styles.button} onPress={addProject}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  emptyIcon: {
    width: 30,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  dropDownText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default SelectProjectManager;
