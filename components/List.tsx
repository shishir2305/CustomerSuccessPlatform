import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TableCell from './TableCell';
import UserContext from '../context/UserContext';

const Table = ({statusType}) => {
  const {projectsListData, addingUserToggle, setAddingUserToggle} =
    useContext(UserContext);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Filter the projects based on the statusType
    let filteredProjects = projectsListData;
    if (statusType === 'On going' || statusType === 'In progress') {
      filteredProjects = filteredProjects.filter(
        item => item.status === 'On-Going' || item.status === 'In progress',
      );
    } else if (statusType === 'Completed') {
      filteredProjects = filteredProjects.filter(
        item => item.status === 'Completed',
      );
    } else if (statusType === 'Hold') {
      filteredProjects = filteredProjects.filter(
        item => item.status === 'Hold',
      );
    }

    // Update the filteredProjects state
    setFilteredProjects(filteredProjects);
  }, [statusType, projectsListData, addingUserToggle]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredProjects.map(item => (
          <TableCell key={item._id} {...item} />
        ))}
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
