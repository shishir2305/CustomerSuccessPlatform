import {View, Text} from 'react-native';
import React from 'react';
import FillProjectDetails from '../components/FillProjectDetails';
import InviteClients from '../components/InviteClients';
import SelectProjectManager from '../components/SelectProjectManager';

const NewProject = () => {
  return (
    <View>
      {/* <FillProjectDetails /> */}
      {/* <InviteClients /> */}
      <SelectProjectManager />
    </View>
  );
};

export default NewProject;
