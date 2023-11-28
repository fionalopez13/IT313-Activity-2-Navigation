import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
    <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image source={require("../assets/amazing.png")}
            style={{width: 250, height: 250, marginTop: 90, marginBottom: 20}}/>
    </View>

    <View style={{justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
    <Text style={{
            color: 'white',
            fontSize: 70, 
            fontWeight:'bold',
            marginLeft: 120,
            }}>Meow!</Text>

    <Text style={{
            color: 'white',
            fontSize: 20, 
            fontWeight:'bold',
            marginLeft: 80,
            marginTop: 10
            }}>Welcome, user! Nice to meet you!</Text>

    <TouchableOpacity 
        onPress={()=> navigation.navigate('Welcome')}
            style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: 200,
            backgroundColor: '#F4F27E',
            borderColor: 'brown',
            borderRadius: 10, 
            borderWidth: 1,
            marginTop: 40,
            marginLeft: 110}}>
        
        <Text style={{
            color: 'brown',
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 55,
            }}>Log Out</Text> 
    </TouchableOpacity>
    </View>
    </SafeAreaView>
    </View>
  )
}