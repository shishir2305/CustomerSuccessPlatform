import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import uuid from 'react-native-uuid';
import UserContext from '../context/UserContext';
import FeatherIcons from 'react-native-vector-icons/Feather';

const FillProjectDetails = ({navigation}) => {
  const {projectData, setProjectData} = useContext(UserContext);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleContinue = () => {
    setProjectData({
      ...projectData,
      _id: uuid.v4(),
    });
    navigation.navigate('InviteClients');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={openDrawer}>
          <FeatherIcons name="menu" size={30} color="#333333" />
        </TouchableOpacity>
        <Text style={styles.heading}>Add Project Details</Text>
        <View style={styles.emptyIcon}></View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Project Name</Text>
        <TextInput
          placeholder="Enter name"
          style={styles.input}
          value={projectData.name}
          onChangeText={text => setProjectData({...projectData, name: text})}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Project Brief</Text>
        <TextInput
          style={[styles.input, styles.inputLarge]}
          placeholder="Write here"
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Purpose</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Goals</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Objectives</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Budget</Text>
        <View style={styles.budgetContainer}>
          <TextInput
            placeholder="Enter name"
            style={[styles.input, styles.budgetInput]}
          />
          <Text style={styles.currency}>$</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    borderRadius: 50,
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
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 18,
    color: '#333333',
  },
  inputLarge: {
    height: 200,
    paddingTop: 10,
  },
  inputMedium: {
    height: 100,
    paddingTop: 10,
  },
  budgetContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  budgetInput: {
    flex: 1,
    marginRight: 10,
  },
  currency: {
    fontSize: 24,
    color: '#333333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default FillProjectDetails;
