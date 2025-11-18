import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './ImmigrationGood.style';
import Constants from 'expo-constants';
import React from 'react';
import Sadness from '/reactnative/Italy/assets/H2A2.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function ImmigrationBad(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sadness} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
           You failed to obtain the Diversity Visa. You are part of the other 99% that will never obtain a visa. Try again next year!
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