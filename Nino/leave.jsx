import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Leave.style';
import Constants from 'expo-constants';
import NinoLeave from '/reactnative/Italy/assets/NinoLeave.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Leave(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={NinoLeave} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
          You decide to go back to Sicily. Life here was too hard and you miss your family. Unfortunatly, this means that you failed to get naturalized. Restart to play again or go to a different time period. 
            </Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <View style={s.button}>
              <Text style={s.btext}>
                  You failed. Press button to go back to start. 
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      
    </ImageBackground>
  );
}