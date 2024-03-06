import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import List from './List';

const InProgressProjectsList = () => {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.heading}>In Progress Projects</Text>
      </View>
      <View>
        <List statusType="In progress" />
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

export default InProgressProjectsList;
