import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './intro2.style';
import Constants from 'expo-constants';
import car from '/reactnative/Italy/assets/car.png'
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Intro2(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={car} style={s.img}>
    <View style={s.container}>
      <TouchableOpacity onPress={() => nav.navigate("House")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
      </View>
      <View style={s.box}>
      <Text style={s.text}> 
        My great grandfather decided to venture to Detroit, Michigan, in search of a job. 
      </Text>
      </View>
    </ImageBackground>
  );
}