import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './WorkAnswerStyle';
import Constants from 'expo-constants';
import Construction from '/reactnative/Italy/assets/Brick.png';
import NonnoWork1 from '/reactnative/Italy/assets/NonnoWork1.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function WorkAnswerB(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Construction} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("Work")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("MarriageB")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to work for yourself and offer to lay bricks for people. At first, you will go into debt, but in the end, you will make more money.
            </Text>
        </View>
    <Image source={NonnoWork1} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}