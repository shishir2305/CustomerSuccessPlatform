import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TableCell from './TableCell';
import UserContext from '../context/UserContext';

const Table = ({statusType}) => {
  const {projectsListData} = useContext(UserContext);
  useEffect(() => {
    console.log('hi');
    console.log(projectsListData);
  }, []);
  return (
    <View>
      {/* Table Header */}
      <View style={[styles.row, styles.header]}>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Name</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Started On</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Status</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}>Manager</Text>
        </View>
        {/* <View style={styles.cell}>
          <Text style={styles.cellText}>Members</Text>
        </View> */}
      </View>

      <ScrollView>
        {statusType === 'all' &&
          projectsListData.map(item => <TableCell key={item._id} {...item} />)}

        {(statusType === 'On going' || statusType === 'In progress') &&
          projectsListData
            .filter(
              item =>
                item.status === 'On-Going' || item.status === 'In progress',
            )
            .map(item => <TableCell key={item._id} {...item} />)}

        {statusType === 'Completed' &&
          projectsListData
            .filter(item => item.status === 'Completed')
            .map(item => <TableCell key={item._id} {...item} />)}

        {statusType === 'Hold' &&
          projectsListData
            .filter(item => item.status === 'Hold')
            .map(item => <TableCell key={item._id} {...item} />)}
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
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  cellText: {
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Table;
