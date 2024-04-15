import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ProjectOverview from './ProjectOverview';
import ScopeAndStack from './ScopeAndStack';
import EscalationMatrix from './EscalationMatrix';
import VersionHistory from './VersionHistory';
import Files from './Files';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const backIcon = <AntDesignIcons name="arrowleft" size={30} color="black" />;

const ProjectDetails = ({route, navigation}) => {
  const [activeTab, setActiveTab] = useState('projectOverview');

  // from the route params accessing the values of the passed data from previous screen
  const [projectDetails, setProjectDetails] = useState(route.params);

  const handleBack = () => {
    navigation.goBack();
  };

  // using a step loader technique and rendering the selected component and its component on clicking a particular step
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{marginLeft: 10}} onPress={handleBack}>
          {backIcon}
        </TouchableOpacity>
        <Text style={styles.heading}>{projectDetails.name}</Text>
        <View style={styles.emptyIcon}></View>
      </View>
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
        <ProjectOverview
          setActiveTab={setActiveTab}
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
        />
      )}
      {activeTab === 'scopeAndStack' && (
        <ScopeAndStack
          setActiveTab={setActiveTab}
          projectDetails={projectDetails}
          setProjectDetails={setProjectDetails}
        />
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
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  emptyIcon: {
    width: 40,
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
