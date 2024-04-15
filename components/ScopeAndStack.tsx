import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import UserContext from '../context/UserContext';

const items = [
  {
    label: 'Backend',
    value: 'backend',
  },
  {label: 'Frontend', value: 'frontend'},
  {label: 'Mobile-App', value: 'mobile_app'},
  {label: 'Database', value: 'database'},
];

const ScopeAndStack = props => {
  const {user, addingUserToggle, setAddingUserToggle} = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  // accessing the passed stack value to prepopulate the dropdown
  const [currentValue, setCurrentValue] = useState(
    props.projectDetails.stack.value,
  );

  // using user based permission to disable read write permissions fo rcertain users
  const disableFields = () => {
    return user.role === 'Client' || user.role === 'Auditor';
  };

  // whenever something is updated this function is executed and it does the job based on the user with write persmission
  const handleUpdate = async () => {
    if (user.role === 'Admin' || user.role === 'Manager') {
      try {
        const response = await axios.post(
          `http://localhost:8000/project/${props.projectDetails._id}/project_details`,
          {
            projectDetails: props.projectDetails,
          },
        );

        console.log(response.data);

        setAddingUserToggle(!addingUserToggle);
      } catch (error) {
        console.log('Error in updating project', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Select Project Technology's</Text>
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={value => {
            setCurrentValue(value);
          }}
          placeholder="Select Project Technology's"
          mode="BADGE"
          showTickIcon={false}
          textStyle={{fontSize: 20}}
          onChangeValue={value => {
            const selectedItem = items.find(item => {
              return item.value === value;
            });
            props.setProjectDetails({
              ...props.projectDetails,
              stack: selectedItem,
            });
          }}
          disabled={disableFields()}
        />
      </View>
      <View style={[styles.inputContainer, isOpen && {marginTop: 150}]}>
        <Text style={styles.inputLabel}>Project Scope</Text>
        <TextInput
          value={props.projectDetails.scope}
          style={[styles.input, styles.inputMedium]}
          multiline={true}
          textAlignVertical="top"
          placeholder="Write here"
          onChangeText={text => {
            props.setProjectDetails({...props.projectDetails, scope: text});
          }}
          editable={!disableFields()}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  inputMedium: {
    height: 100,
  },
  picker: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
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

export default ScopeAndStack;
