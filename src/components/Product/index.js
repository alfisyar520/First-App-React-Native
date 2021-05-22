import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import hp from '../../assets/image/tech.jpg'

const Product = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={hp} style={styles.imageProduct}/>
            <Text style={styles.productName}>Nokia Experia 12</Text>
            <Text style={styles.productPrice}>Rp. 5.000.000</Text>
            <Text style={styles.location}>Nganjuk</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Beli</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper : {padding:12, backgroundColor:'#f2f2f2', width:212, borderRadius:8},
    imageProduct : {width:188, height:107, borderRadius:8},
    productName : {fontSize:14, fontWeight:'bold', marginTop:16},
    productPrice : {fontSize:12, fontWeight:'bold', color:'#F2994A', marginTop:12},
    location : {fontSize:12, fontWeight:'300', marginTop:12, color:'black'},
    buttonWrapper : {backgroundColor:'#6FCF97', paddingVertical:6, borderRadius:25, marginTop:20},
    buttonText : {fontSize:14, fontWeight:'600', color:'white', textAlign:'center'}
})
