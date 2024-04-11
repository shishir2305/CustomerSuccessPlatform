import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const ProjectOverview = props => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Project Name</Text>
        <TextInput value={props.projectDetails.name} style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Project Brief</Text>
        <TextInput
          style={[styles.input, styles.inputLarge]}
          value={props.projectDetails.overview}
          multiline={true}
          textAlignVertical="top"
          placeholder="Write here"
          onChangeText={text => {
            props.setProjectDetails({...props.projectDetails, overview: text});
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Purpose</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Goals</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Objectives</Text>
        <TextInput
          placeholder="Write here"
          style={[styles.input, styles.inputMedium]}
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
            value={props.projectDetails.budget.type_value}
            style={[styles.input, {width: '80%'}]}
            onChangeText={text => {
              props.setProjectDetails({
                ...props.projectDetails,
                budget: {
                  ...props.projectDetails.budget,
                  type_value: text,
                  type: 'Monthly',
                },
              });
            }}
          />
          <Text style={{fontSize: 35}}>$</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // console.log(props.projectDetails);
          props.setActiveTab('scopeAndStack');
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
    marginBottom: 100,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProjectOverview;
