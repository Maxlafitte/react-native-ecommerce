import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '../ui';

const customHeaderIcon = (props) => {
  return (
      <HeaderButton
          {...props}
          IconComponent={MaterialIcons}
          iconSize={24}
          color={Colors.white}
      />
  );
}

export default customHeaderIcon;
