import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import List from './List';

const AllProjectsList = () => {
  return (
    <View>
      <View>
        <Text style={style.heading}>All Projects</Text>
      </View>
      <View>
        <List />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AllProjectsList;
