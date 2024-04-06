import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TableCell = ({
  name,
  start_date,
  status,
  associated_manager,
  members = 0,
}) => {
  const getStatusCellColor = status => {
    switch (status) {
      case 'On-Going':
        return 'green';
      case 'In progress':
        return 'green';
      case 'Hold':
        return 'black';
      case 'Closed':
        return 'red';
    }
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('ProjectDetails', {name});
      }}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{name} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{start_date} </Text>
      </View>
      <View
        style={[
          styles.cell,
          {
            backgroundColor: getStatusCellColor(status),
            borderRadius: 5,
            paddingVertical: 10,
          },
        ]}>
        <Text
          style={[
            styles.cellText,
            {
              color: 'white',
            },
          ]}>
          {status}
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{associated_manager.name} </Text>
      </View>
      {/* <View style={styles.cell}>
        <Text style={styles.cellText}>{members} </Text>
      </View> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 8,
    marginTop: 5,
  },
  cellText: {
    textAlign: 'center',
  },
});

export default TableCell;
