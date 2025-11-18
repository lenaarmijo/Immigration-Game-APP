import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './NonnoPlane.style';
import Constants from 'expo-constants';
import Plane from '/reactnative/Italy/assets/Plane.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Plane1(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Plane} style={s.img}>
    <View style={s.container}>
      <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("NonnoStart")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("NonnoHouse")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    </View>
      <View style={s.box}>
      <Text style={s.text}> 
        When my Nonno first came to America, he took a plane to Detroit. With airtravel becoming more prominent, immigrants could fly to other countries.
      </Text>
      </View>
        </ImageBackground>
  );
}