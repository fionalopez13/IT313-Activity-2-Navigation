import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

export default function RegisterScreen() {
    const navigation = useNavigation();
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#6DB9EF'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <TouchableOpacity
                        onPress={()=> navigation.goBack()}
                        style={{
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            backgroundColor: '#F4F27E',
                            borderColor: 'brown',
                            borderWidth: 1,
                            borderBottomLeftRadius: 10,
                            borderTopRightRadius: 10,
                            marginTop: 20,
                            marginLeft: 10,
                        }}>
                    
                    <ArrowLeftIcon size="20" color="brown"/>
                    </TouchableOpacity>
                </View>
                
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={require("../assets/registerCat.png")}
                        style={{
                            width: 200, 
                            height: 200, 
                            marginLeft: 30,
                            }}/>
                </View>
            </SafeAreaView>

            <View style={{
                flex: 1, 
                backgroundColor: 'white', 
                paddingBottom: 260,
                borderColor: 'brown',
                borderWidth: 2,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                }}>

            <View>
                <Text style={{
                    color: 'brown',
                    fontSize: 20,
                    paddingTop: 40,
                    paddingLeft: 30,
                }}>Full Name</Text>

                <TextInput style={{
                    backgroundColor: '#FFF5C2',
                    marginTop: 15,
                    marginLeft: 30,
                    height: 40,
                    width: 350,
                    borderWidth: 1,
                    borderColor: 'brown',
                    borderRadius: 10,
               }} placeholder='  Enter Full Name'></TextInput>

            <View>
                <Text style={{
                    color: 'brown',
                    fontSize: 20,
                    paddingTop: 25,
                    paddingLeft: 30,
                }}>Email Address</Text>

                <TextInput style={{
                    backgroundColor: '#FFF5C2',
                    marginTop: 15,
                    marginLeft: 30,
                    height: 40,
                    width: 350,
                    borderWidth: 1,
                    borderColor: 'brown',
                    borderRadius: 10,
               }} keyboardType='email-address' placeholder='  Enter Email'></TextInput>

               <Text style={{
                    color: 'brown',
                    fontSize: 20,
                    paddingTop: 20,
                    paddingLeft: 30,
                }}>Password</Text>

                <TextInput style={{
                    backgroundColor: '#FFF5C2',
                    marginTop: 15,
                    marginLeft: 30,
                    height: 40,
                    width: 350,
                    borderWidth: 1,
                    borderColor: 'brown',
                    borderRadius: 10,
               }}  
               placeholder='  Enter Password'
               secureTextEntry={true}></TextInput>

            <TouchableOpacity 
                onPress={()=> navigation.navigate('Home')}
                style={{
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    width: 350,
                    backgroundColor: '#6DB9EF',
                    borderColor: '#6DB9EF',
                    borderRadius: 10, 
                    borderWidth: 1,
                    marginTop: 40,
                    marginLeft: 33}}>
        
            <Text style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                marginLeft: 125,
            }}>Register</Text> 
            </TouchableOpacity>
            </View>


        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
            <Text style={{
                color: 'black',
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
        </View>
        </View>
    );
}