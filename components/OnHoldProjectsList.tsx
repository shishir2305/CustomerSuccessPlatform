import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import List from './List';

const OnHoldProjectsList = () => {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <Text style={styles.heading}>On Hold Projects</Text>
      </View>
      <View>
        <List statusType="Hold" />
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

export default OnHoldProjectsList;
