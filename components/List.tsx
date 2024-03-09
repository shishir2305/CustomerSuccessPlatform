import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TableCell from './TableCell';

const projectListArray = [
  {
    projectName: 'Food on time1',
    startedOn: '12 Feb 24',
    status: 'On going',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time2',
    startedOn: '12 Feb 24',
    status: 'Closed',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time3',
    startedOn: '12 Feb 24',
    status: 'In progress',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time4',
    startedOn: '12 Feb 24',
    status: 'On going',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time5',
    startedOn: '12 Feb 24',
    status: 'On going',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time6',
    startedOn: '12 Feb 24',
    status: 'Hold',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time7',
    startedOn: '12 Feb 24',
    status: 'Hold',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
  {
    projectName: 'Food on time8',
    startedOn: '12 Feb 24',
    status: 'Hold',
    projectManager: 'Dipa Majumdar',
    members: 6,
  },
];

const Table = ({statusType}) => {
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

      <ScrollView>
        {statusType === 'all' &&
          projectListArray.map(item => (
            <TableCell key={item.projectName} {...item} />
          ))}

        {(statusType === 'On going' || statusType === 'In progress') &&
          projectListArray
            .filter(
              item =>
                item.status === 'On going' || item.status === 'In progress',
            )
            .map(item => <TableCell key={item.projectName} {...item} />)}

        {statusType === 'Closed' &&
          projectListArray
            .filter(item => item.status === 'Closed')
            .map(item => <TableCell key={item.projectName} {...item} />)}

        {statusType === 'Hold' &&
          projectListArray
            .filter(item => item.status === 'Hold')
            .map(item => <TableCell key={item.projectName} {...item} />)}
        <View style={{height: 150}}></View>
      </ScrollView>
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
