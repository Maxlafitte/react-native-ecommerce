import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {Colors} from '../ui';

const Input = (props) => {
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                {...props}
                value={props.value}
                onChangeText={ props.onKeyStroke }
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formControl: {
        width: "100%"
    },
    label: {
        marginVertical: 15,
        color: Colors.green,
        fontWeight: 'bold'
    },
    input: {
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: Colors.green,
        borderWidth: 0.5,
        borderRadius: 6
    },
})
export default Input