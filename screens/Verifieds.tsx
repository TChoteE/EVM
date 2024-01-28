import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'


const SignIn = () => {
  return (
    <View>
        <View style = {{marginTop: 25,
                        marginLeft: 25,
                        paddingTop: 50 }}>
            <Text style={{ color: '#333333', fontSize: 24, fontWeight: '900' }}>Verified!</Text>
            <Text style = {{color : '#333333', fontSize : 14, fontWeight : '700', marginTop : 10}}>You have suscessfully connect account</Text>                 
        </View>
        <View style = {{marginLeft: 25, marginRight: 25, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {}}
                style={{backgroundColor: '#B4DDFC',
                        padding: 15,
                        borderRadius: 23,
                        marginBottom: 25,
                        marginTop: 150,
                        width: 130}} >
               
                <Text style = {{textAlign: 'center', color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>  
        </View>
    </View>
  )
}

// const style = StyleSheet.create({
//     contentHead: {
//       marginTop: 25,
//       marginLeft: 25,
//       paddingTop: 50
//     },
//     textHead1: {
//       color: '#333333', 
//       fontSize: 24, 
//       fontWeight: '900'
//     },
//     textHead2: {
//       color : '#333333', 
//       fontSize : 14, 
//       fontWeight : '700', 
//       marginTop : 10
//     },
//     contentButton: {
//       marginLeft: 25, 
//       marginRight: 25, 
//       justifyContent: 'center', 
//       alignItems: 'center'
//     },
//     Button: {
//       backgroundColor: '#B4DDFC',
//       padding: 15,
//       borderRadius: 23,
//       marginBottom: 25,
//       marginTop: 150,
//       width: 130
//     },
//     textButton: {
//       textAlign: 'center', 
//       color: '#FFFFFF', 
//       fontSize: 18, 
//       fontWeight: 'bold'
//     }
// })

export default SignIn 