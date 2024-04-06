import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useContext, useEffect, useState} from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import UserContext from '../context/UserContext';

const backIcon = <AntDesignIcons name="arrowleft" size={30} color="black" />;

const SelectProjectManager = () => {
  const navigation = useNavigation();

  const {user} = useContext(UserContext);

  const [items, setItems] = useState([]);

  const [projectManagersList, setProjectManagersList] = useState([]);

  useEffect(() => {
    console.log(user);
    axios
      .get('http://localhost:8000/getManagers', {
        params: {
          role_id: user.roleId,
        },
      })
      .then(response => {
        console.log(response.data[0].name);

        const formattedManagers = response.data.map(element => ({
          label: element.name,
          value: element.name,
        }));

        setItems(formattedManagers);

        setProjectManagersList(response.data);
      })
      .catch(error => {
        console.log("Error in fetching manager's list", error);
      });
  }, [user]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

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
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={val => setCurrentValue(val)}
        placeholder="Select Project Manager"
        textStyle={{fontSize: 18}}
      />
      <TouchableOpacity
        style={[styles.button, isOpen && {marginTop: 150}]}
        onPress={() => {
          navigation.navigate('Projects');
        }}>
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
