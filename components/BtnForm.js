import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import {Colors} from '../ui'


const BtnForm = ({btnText, activate, onHandlePress}) => {
    return (
        <Pressable
            disabled={ activate}
            onPress={onHandlePress}
        >
            <View style={{
                ...styles.btnContainer,
                backgroundColor: activate ? Colors.orange : Colors.green
            }}>
                <Text style={{
                    ...styles.btnText,
                    color: activate ? Colors.darkGrey : Colors.white
                }}>{ btnText }</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal: 25,
        backgroundColor: Colors.orange,
        marginTop: 20
    },
    btnText: {
        fontSize: 19,
        textAlign: 'center'
    }
})

export default BtnForm