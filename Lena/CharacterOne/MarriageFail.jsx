import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './MarriageFail.style';
import Constants from 'expo-constants';
import Sadness from '/reactnative/Italy/assets/Marriageback.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function MarriageFail(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sadness} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
           You have no connections to the U.S. and therefore could not find someone to marry. Looks like you will not have you American wedding and have to stay in Italy.  
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