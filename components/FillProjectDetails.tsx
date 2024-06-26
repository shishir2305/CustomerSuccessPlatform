import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import uuid from 'react-native-uuid';
import UserContext from '../context/UserContext';

const FillProjectDetails = ({navigation}) => {
  const {projectData, setProjectData} = useContext(UserContext);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Add Project Details</Text>

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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Enter name"
            style={[styles.input, {width: '80%'}]}
          />
          <Text style={{fontSize: 35}}>$</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setProjectData({
            ...projectData,
            _id: uuid.v4(),
          });
          navigation.navigate('InviteClients');
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
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
  inputLarge: {
    height: 200,
  },
  inputMedium: {
    height: 100,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FillProjectDetails;
