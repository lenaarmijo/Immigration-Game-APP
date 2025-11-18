import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Assylum2.style';
import Constants from 'expo-constants';
import Sadness from '/reactnative/Italy/assets/leaveA.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Assylum2(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sadness} style={s.img}>
    <View style={s.container}>
  
        <View style={s.box}>
            <Text style={s.text}>
          Your claim made it through the first stages! You were able to get a court date and were ready to wait. Sadly life got in the way and you couldn't afford to stay in the U.S without working. In addition they did not have a translator avaible and therefore your case fell through before you could see a judge. Only 0.001% of people get let in on an Asylum claim. You are forced to return back to Italy. 
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