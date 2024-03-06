import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import List from './List';

const AllProjectsList = () => {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.heading}>All Projects</Text>
      </View>
      <View>
        <List statusType="all" />
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

export default AllProjectsList;
