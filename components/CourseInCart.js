import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../ui';

const CoursesInCart = (props) => {
    return (
        <View style={globalStyles.coursesContainer}>
            <Text numberOfLines={1} style={globalStyles.courseTitle}>{props.title}</Text>
            <Text style={globalStyles.coursePrice}>{props.price.toFixed(2)} €</Text>
            <TouchableOpacity
                onPress={props.onDelete}
            >
                <MaterialIcons name="delete" size={24} color={globalStyles.green} />
            </TouchableOpacity>
        </View>
    )
}

export default CoursesInCart
