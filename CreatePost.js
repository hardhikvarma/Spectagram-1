import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CreatePost extends React.Component(){
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    Create Post
                </Text>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'yellow'
    }
})