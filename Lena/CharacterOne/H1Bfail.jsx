import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './H2AFail.style';
import Constants from 'expo-constants';
import Sadness from '/reactnative/Italy/assets/H2A2.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function H1BFail(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sadness} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
           You failed to meet the requirments of a fashion model or a specialty occupation. There were not many opportunities available and you did not have high enough acredabilty. You failed to obtain a visa and have to stay in Italy. 
            </Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <View style={s.button}>
              <Text style={s.btext}>
                  You failed. Press button try again. 
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      
    </ImageBackground>
  );
}