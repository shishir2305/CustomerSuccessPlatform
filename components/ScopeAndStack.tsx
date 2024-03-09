import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const items = [
  {
    label: 'Backend',
    value: 'backend',
  },
  {label: 'Frontend', value: 'frontend'},
  {label: 'Mobile App', value: 'mobileApp'},
  {label: 'Database', value: 'database'},
];

const ScopeAndStack = ({setActiveTab}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Select Project Technology's</Text>
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={val => setCurrentValue(val)}
          placeholder="Select Project Technology's"
          multiple={true}
          mode="BADGE"
          showTickIcon={false}
        />
      </View>
      <View style={[styles.inputContainer, isOpen && {marginTop: 150}]}>
        <Text style={styles.inputLabel}>Project Scope</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setActiveTab('escalationMatrix');
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
