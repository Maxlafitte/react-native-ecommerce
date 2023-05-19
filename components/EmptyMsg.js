import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../ui';

const EmptyMsg = ({text}) => {
  return (
    <View style={globalStyles.container}>
          <Text style={globalStyles.text}>{text}</Text>
    </View>
  );
}

export default EmptyMsg;
