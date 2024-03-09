import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TableCell = ({
  projectName,
  startedOn,
  status,
  projectManager,
  members,
}) => {
  const getStatusCellColor = status => {
    switch (status) {
      case 'On going':
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
        navigation.navigate('ProjectDetails', {projectName});
      }}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{projectName} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{startedOn} </Text>
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
        <Text style={styles.cellText}>{projectManager} </Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{members} </Text>
      </View>
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
  },
  cellText: {
    textAlign: 'center',
  },
});

export default TableCell;
