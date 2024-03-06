import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TableCell = ({
  projectName,
  startedOn,
  status,
  projectManager,
  members,
}) => {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{projectName} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{startedOn} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{status} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{projectManager} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{members} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  cellText: {
    textAlign: 'center',
  },
});

export default TableCell;
