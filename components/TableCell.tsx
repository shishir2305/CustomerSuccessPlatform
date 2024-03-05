import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const TableCell = () => {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Data 1</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Data 2</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Data 3</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Data 3</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>Data 3</Text>
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
