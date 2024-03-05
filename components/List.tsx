import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TableCell from './TableCell';

const Table = () => {
  return (
    <View>
      {/* Table Header */}
      <View style={[styles.row, styles.header]}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Project Name</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Started On</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Status</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Project Manager</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Members</Text>
        </View>
      </View>

      <TableCell />
      <TableCell />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  header: {
    backgroundColor: 'lightgray',
  },
  cell: {
    flex: 1,
    padding: 8,
  },
  cellText: {
    textAlign: 'center',
  },
});

export default Table;
