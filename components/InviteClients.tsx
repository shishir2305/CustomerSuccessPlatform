import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const backIcon = <AntDesignIcons name="arrowleft" size={30} color="black" />;
const addIcon = <AntDesignIcons name="plus" size={30} color="black" />;
const deleteIcon = <AntDesignIcons name="close" size={20} color="black" />;

const InviteClients = () => {
  const navigation = useNavigation();
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [emailsList, setEmailsList] = useState([]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAddEmail = () => {
    if (clientEmail.trim() !== '') {
      setEmailsList([...emailsList, clientEmail]);
      setClientEmail('');
    }
  };

  const handleDeleteEmail = email => {
    setEmailsList(emailsList.filter(e => e !== email));
  };

  const handleContinue = () => {
    navigation.navigate('SelectProjectManager');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>{backIcon}</TouchableOpacity>
        <Text style={styles.heading}>Invite Clients</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Client Name</Text>
        <TextInput
          placeholder="Client name"
          style={styles.input}
          value={clientName}
          onChangeText={setClientName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Client Email</Text>
        <View style={styles.emailInputContainer}>
          <TextInput
            placeholder="example@work.com"
            style={[styles.input, styles.emailInput]}
            value={clientEmail.toLocaleLowerCase()}
            onChangeText={setClientEmail}
          />
        </View>
      </View>

      <View style={styles.emailsList}>
        {emailsList.map((email, index) => (
          <View style={styles.emailItem} key={index}>
            <Text style={{fontSize: 20}}>{email}</Text>
            <TouchableOpacity onPress={() => handleDeleteEmail(email)}>
              {deleteIcon}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddEmail}>
        <Text style={styles.buttonText}>Add</Text>
        {addIcon}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={[styles.buttonText, {color: 'white'}]}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
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
    fontSize: 18,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailInput: {
    flex: 1,
  },
  emailsList: {
    marginBottom: 20,
  },
  emailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  addButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 30,
    gap: 10,
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
    color: 'black',
  },
});

export default InviteClients;
