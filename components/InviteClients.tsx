import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const addIcon = <AntDesignIcons name="plus" size={30} color="black" />;

const InviteClients = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Invite Clients</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Client Name</Text>
        <TextInput placeholder="Client name" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Client Email</Text>
        <TextInput placeholder="example@work.com" style={styles.input} />
      </View>

      <TouchableOpacity
        style={[styles.button, styles.addButton]}
        onPress={() => {}}>
        {addIcon}
        <Text style={[styles.buttonText, {color: 'black', fontWeight: '500'}]}>
          Add
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('SelectProjectManager');
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
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
  },
  addButton: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'lightgrey',
  },
  button: {
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

export default InviteClients;
