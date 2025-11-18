import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Sacco.style';
import Constants from 'expo-constants';
import Sacco1 from '/reactnative/Italy/assets/Sacco.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Sacco(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sacco1} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
          Alert! Alert! Two Italian immigrants, Sacco and Vanzetti were arrested and executed unjustly for a crime they did not commit. This is an attack on all Italian immigrants. You have to leave America now or get deported.  
            </Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <View style={s.button}>
              <Text style={s.btext}>
                  You failed. Press button to go back to start. *Add sons of Italy option, mutual aid society*
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      
    </ImageBackground>
  );
}