import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TableCell = props => {
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
      case 'Completed':
        return 'red';
      default:
        return 'black';
    }
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('ProjectDetails', props);
      }}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{props.name} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{props.start_date} </Text>
      </View>
      <View
        style={[
          styles.cell,
          {
            backgroundColor: getStatusCellColor(props.status),
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
          {props.status}
        </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{props.associated_manager.name} </Text>
      </View>
      {/* <View style={styles.cell}>
        <Text style={styles.cellText}>{props.members} </Text>
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
