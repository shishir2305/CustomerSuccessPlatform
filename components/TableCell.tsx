import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const TableCell = props => {
  // getting colors based on the status of the project
  const getStatusCellColor = status => {
    switch (status) {
      case 'On-Going':
      case 'In progress':
        return '#4CAF50'; // Green
      case 'Hold':
        return '#555'; // Amber
      case 'Closed':
      case 'Completed':
        return '#F44336'; // Red
      default:
        return '#9E9E9E'; // Grey
    }
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        // passing props as data to the next screen along with navigating to the next screen
        navigation.navigate('ProjectDetails', props);
      }}
      style={styles.container}>
      <View style={styles.card}>
        <View style={styles.infoColumn}>
          <Text style={styles.title}>{props.name}</Text>
          <View style={styles.managerRow}>
            <AntDesignIcons name="user" size={16} color="#555" />
            <Text style={styles.subTitle}>
              Manager: {props.associated_manager.name}
            </Text>
          </View>
          <View style={styles.dateRow}>
            <AntDesignIcons name="calendar" size={16} color="#555" />
            <Text style={styles.subTitle}>Start Date: {props.start_date}</Text>
          </View>
        </View>
        <View
          style={[
            styles.statusColumn,
            {backgroundColor: getStatusCellColor(props.status)},
          ]}>
          <Text style={styles.status}>{props.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoColumn: {
    flex: 1,
  },
  managerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: '#555',
    marginLeft: 4,
  },
  statusColumn: {
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
  },
  status: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default TableCell;
