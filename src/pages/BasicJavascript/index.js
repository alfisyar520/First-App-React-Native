import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const namaOrang = ['alfiysar', 'jefry', 'pranata', 'bahar'];

const BasicJavaScript = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Basic Javascirpt</Text>
            {namaOrang.map((orang) => <Text>{orang}</Text>)}
        </View>
    )
}

export default BasicJavaScript

const styles = StyleSheet.create({
    container : {
        padding:20
    },
    textTitle : {
        textAlign:'center'
    }
})
