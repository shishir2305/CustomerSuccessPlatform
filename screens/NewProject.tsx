import {View, Text} from 'react-native';
import React from 'react';
import FillProjectDetails from '../components/FillProjectDetails';
import InviteClients from '../components/InviteClients';
import SelectProjectManager from '../components/SelectProjectManager';
import ProjectDetails from '../components/ProjectDetails';

const NewProject = () => {
  return (
    <View>
      {/* <FillProjectDetails /> */}
      {/* <InviteClients /> */}
      {/* <SelectProjectManager /> */}
      <ProjectDetails />
    </View>
  );
};

export default NewProject;
