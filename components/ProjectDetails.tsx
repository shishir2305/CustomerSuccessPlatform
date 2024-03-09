import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ProjectOverview from './ProjectOverview';
import ScopeAndStack from './ScopeAndStack';
import EscalationMatrix from './EscalationMatrix';
import VersionHistory from './VersionHistory';
import Files from './Files';

const ProjectDetails = ({route}) => {
  const [activeTab, setActiveTab] = useState('projectOverview');
  const {projectName} = route.params;
  return (
    <View>
      <Text style={styles.heading}>{projectName}</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={styles.tabSwitcher}>
          <View>
            <Button
              title="Project Overview"
              onPress={() => setActiveTab('projectOverview')}
              color="black"
            />
            <View
              style={activeTab === 'projectOverview' && styles.isActive}></View>
          </View>

          <View>
            <Button
              title="Scope & Stack"
              onPress={() => setActiveTab('scopeAndStack')}
              color="black"
            />
            <View
              style={activeTab === 'scopeAndStack' && styles.isActive}></View>
          </View>

          <View>
            <Button
              title="Escalation Matrix"
              onPress={() => setActiveTab('escalationMatrix')}
              color="black"
            />
            <View
              style={
                activeTab === 'escalationMatrix' && styles.isActive
              }></View>
          </View>

          <View>
            <Button
              title="Version History"
              onPress={() => setActiveTab('versionHistory')}
              color="black"
            />
            <View
              style={activeTab === 'versionHistory' && styles.isActive}></View>
          </View>

          <View>
            <Button
              title="Files"
              onPress={() => setActiveTab('files')}
              color="black"
            />
            <View style={activeTab === 'files' && styles.isActive}></View>
          </View>
        </View>
      </ScrollView>
      {activeTab === 'projectOverview' && (
        <ProjectOverview setActiveTab={setActiveTab} />
      )}
      {activeTab === 'scopeAndStack' && (
        <ScopeAndStack setActiveTab={setActiveTab} />
      )}
      {activeTab === 'escalationMatrix' && (
        <EscalationMatrix setActiveTab={setActiveTab} />
      )}
      {activeTab === 'versionHistory' && (
        <VersionHistory setActiveTab={setActiveTab} />
      )}
      {activeTab === 'files' && <Files />}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 15,
  },
  container: {
    padding: 10,
  },
  tabSwitcher: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    height: 40,
  },
  isActive: {
    height: 3,
    backgroundColor: 'blue',
  },
});

export default ProjectDetails;
