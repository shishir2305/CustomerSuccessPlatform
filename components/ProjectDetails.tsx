import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProjectOverview from './ProjectOverview';
import ScopeAndStack from './ScopeAndStack';
import EscalationMatrix from './EscalationMatrix';

const ProjectDetails = () => {
  return (
    <View>
      <Text style={styles.heading}>Food on time</Text>
      {/* <ProjectOverview /> */}
      {/* <ScopeAndStack /> */}
      <EscalationMatrix />
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
});

export default ProjectDetails;
