import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import List from './List';

const CompletedProjectsList = () => {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.heading}>Completed Projects</Text>
      </View>
      <View>
        <List statusType="Closed" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CompletedProjectsList;
