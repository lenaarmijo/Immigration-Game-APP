import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Answer.style';
import Constants from 'expo-constants';
import Sicily from '/reactnative/Italy/assets/Sicily.png';
import NinaSad from '/reactnative/Italy/assets/Ninasad.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Answer44(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Sicily} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("Letter1")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Continue44")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to write back that life here isn't all that it seems. You are drained and the people are not treating you right. Your family advises that you should come back home. Will you listen to their advise or stay?
            </Text>
        </View>
    <Image source={NinaSad} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}