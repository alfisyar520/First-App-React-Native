import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

const Story = (props) => {
    return (
        <View style={{alignItems:'center', marginRight:20}}>
            <Image 
                source={{uri:props.gambar}} 
                style={{width:70, height:70, borderRadius:70/2}}
            />
            <Text style={{maxWidth:50, textAlign:'center'}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi component dinamis</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row'}}>
                    <Story 
                        judul="Youtube Channel"
                        gambar = "https://placeimg.com/500/500/people"
                    />
                    <Story 
                        judul="Kelas Online"
                        gambar = "https://placeimg.com/500/500/tech"
                    />
                    <Story 
                        judul="Senang senang"
                        gambar = "https://placeimg.com/500/500/nature"
                    />
                    <Story 
                        judul="Sekolah"
                        gambar = "https://placeimg.com/500/500/sepia"
                    />
                    <Story 
                        judul="Berkelompok"
                        gambar = "https://placeimg.com/500/500/animals"
                    />
                    <Story 
                        judul="Teknologi"
                        gambar = "https://placeimg.com/500/500/architecture"
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis 

const styles = StyleSheet.create({})

