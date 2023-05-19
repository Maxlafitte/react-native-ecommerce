import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { globalStyles, Colors } from '../ui'

import { MaterialIcons } from '@expo/vector-icons';

const Courses = ({image, title, price, addToCart, viewDetails}) => {
  return (
      <TouchableHighlight
          onPress={viewDetails}
          underlayColor={Colors.green}
      >
          <View style={globalStyles.courseContainer}> 
            <View style={globalStyles.imageContainer}>
                <Image
                    style={globalStyles.image}
                    source={{uri: image}}
                />
            </View>
            <View style={globalStyles.courseContainerDetails}>
                <Text style={globalStyles.courseTitle}>{title}</Text>
                <Text style={globalStyles.coursePrice}>{ price.toFixed(2)} €</Text>
            </View >
            <View style={globalStyles.iconeContainer}>
                <TouchableOpacity
                    onPress={viewDetails}
                >
                    <MaterialIcons name="remove-red-eye" size={35} color={Colors.green} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={addToCart}
                >
                    <MaterialIcons name="shopping-basket" size={35} color={Colors.green} />
                </TouchableOpacity>
            </View>
          </View>
    </TouchableHighlight>
  );
}

export default Courses;
