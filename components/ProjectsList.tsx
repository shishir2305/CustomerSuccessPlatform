import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import List from './List';

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <View style={styles.container}>
      <View style={styles.tabSwitcher}>
        <View>
          <Button
            title="All Projects"
            onPress={() => setActiveTab('all')}
            color="black"
          />
          <View style={activeTab === 'all' && styles.isActive}></View>
        </View>

        <View>
          <Button
            title="In Progress"
            onPress={() => setActiveTab('inProgress')}
            color="black"
          />
          <View style={activeTab === 'inProgress' && styles.isActive}></View>
        </View>

        <View>
          <Button
            title="Completed"
            onPress={() => setActiveTab('completed')}
            color="black"
          />
          <View style={activeTab === 'completed' && styles.isActive}></View>
        </View>

        <View>
          <Button
            title="Hold"
            onPress={() => setActiveTab('onHold')}
            color="black"
          />
          <View style={activeTab === 'onHold' && styles.isActive}></View>
        </View>
      </View>

      {activeTab === 'all' && <List statusType="all" />}
      {activeTab === 'inProgress' && <List statusType="In progress" />}
      {activeTab === 'completed' && <List statusType="Completed" />}
      {activeTab === 'onHold' && <List statusType="Hold" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabSwitcher: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    gap: 5,
  },
  tab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isActive: {
    height: 3,
    backgroundColor: 'blue',
  },
});

export default ProjectsList;
