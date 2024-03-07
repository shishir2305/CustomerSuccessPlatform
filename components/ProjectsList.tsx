import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AllProjectsList from './AllProjectsList';
import InProgressProjectsList from './InProgressProjectsList';
import CompletedProjectsList from './CompletedProjectsList';
import OnHoldProjectsList from './OnHoldProjectsList';

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

      {/* <ScrollView> */}
      {activeTab === 'all' && <AllProjectsList />}
      {activeTab === 'inProgress' && <InProgressProjectsList />}
      {activeTab === 'completed' && <CompletedProjectsList />}
      {activeTab === 'onHold' && <OnHoldProjectsList />}
      {/* </ScrollView> */}
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
