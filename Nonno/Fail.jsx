import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Fail.style';
import Constants from 'expo-constants';
import Sadness from '/reactnative/Italy/assets/Sadness.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Fail(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sadness} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
          You have failed to become naturalized. You could not keep a job, find a place to stay, or build connections. In addition your ex-fiance and her family have been plotting to send you back. You now have no other choice but to go back to Sicily. Restart to play again or go to a different time period. 
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