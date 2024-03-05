import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';

const SelectProjectManager = () => {
  const items = [
    {
      label: 'Dipa Majumdar',
      value: 'dipa majumdar',
    },
    {label: 'Firoza Parveen', value: 'firoza parveen'},
    {label: 'Shishir Jha', value: 'shishir jha'},
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Project Manager</Text>
      <DropDownPicker
        items={items}
        open={isOpen}
        setOpen={() => setIsOpen(!isOpen)}
        value={currentValue}
        setValue={val => setCurrentValue(val)}
        placeholder="Select Project Manager"
        multiple={true}
        mode="BADGE"
        showTickIcon={false}
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
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
  picker: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    marginTop: 130,
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
