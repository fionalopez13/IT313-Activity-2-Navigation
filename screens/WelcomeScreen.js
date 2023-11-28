import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
        <Text style={{
            color: 'white',
            fontStyle: 'italic', 
            fontSize: 50, 
            fontWeight:'bold',
            marginLeft: 45,
            }}>Let's Get Started!</Text>
        <Image source={require("../assets/cat.png")}
            style={{width: 350, height: 350, marginLeft: 30}}/>

    <TouchableOpacity
            onPress={()=> navigation.navigate('Register')}
            style={{
                paddingHorizontal: 15,
                paddingVertical: 20,
                width: 290,
                backgroundColor: '#F4F27E',
                borderColor: 'brown',
                borderRadius: 10, 
                borderWidth: 1,
                marginTop: 60,
                marginLeft: 65}}>

    <Text style={{
            color: 'brown',
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 75,
            }}>Register Now!</Text> 
    </TouchableOpacity>

    <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{
            color: 'white',
            fontSize: 15,
            marginTop: 20,
            }}>Already have an account?</Text>

    <TouchableOpacity
        onPress={()=> navigation.navigate('Login')}>
        <Text style={{
            color: 'brown',
            fontWeight: 'bold',
            marginTop: 20,
            marginLeft: 5,
        }}
        
        >Log In</Text>
    </TouchableOpacity>
    </View>
    </View>
      );
};



