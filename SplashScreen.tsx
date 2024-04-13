import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const SplashScreen = ({setUserRole, showSplashScreen, setShowSplashScreen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const items = [
    {
      label: 'Admin',
      value: 'Admin',
    },
    {
      label: 'Manager',
      value: 'Manager',
    },
    {
      label: 'Client',
      value: 'Client',
    },
    {
      label: 'Auditor',
      value: 'Auditor',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          items={items}
          open={isOpen}
          setOpen={setIsOpen}
          value={currentValue}
          setValue={setCurrentValue}
          placeholder="Select Role"
          containerStyle={styles.dropdown}
          style={styles.dropdownStyle}
          textStyle={styles.dropdownTextStyle}
          onChangeValue={value => setUserRole(value)}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowSplashScreen(false);
        }}
        style={[
          styles.button,
          isOpen && {
            marginTop: 150,
          },
        ]}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#F5F5F5',
    borderWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  dropdownStyle: {
    backgroundColor: '#F5F5F5',
  },
  dropdownTextStyle: {
    fontSize: 18,
    color: '#333333',
  },
  dropdownArrowIcon: {
    color: '#333333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default SplashScreen;
