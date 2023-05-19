import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../ui'


const CoursesOverview = (props) => {
    return (
        <View style={globalStyles.courseContainerOverview}>
            <Text numberOfLines={1} style={globalStyles.titleOverview}>{props.title}</Text>
            <Text style={globalStyles.priceOverview}>{props.price} €</Text>
        </View>
    )
}

export default CoursesOverview