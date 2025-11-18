import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Answer.style';
import Constants from 'expo-constants';
import Sicily from '/reactnative/Italy/assets/Sicily.png';
import Nina from '/reactnative/Italy/assets/Nina.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Answer1(){
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
    <TouchableOpacity onPress={() => nav.navigate("Continue1")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to write back that everything is going good! Your family is happy to hear that and encourages you to stay. We will see if that is the right option....
            </Text>
        </View>
    <Image source={Nina} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}