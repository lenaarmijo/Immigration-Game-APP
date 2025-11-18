import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Hotel.style';
import Constants from 'expo-constants';
import hotel1 from '/reactnative/Italy/assets/Hotel.png';
import Nino3 from '/reactnative/Italy/assets/Nino3.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Hotel(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={hotel1} style={s.img}>
    <View style={s.container}>
      <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("House")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("JobM")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You couldn't find someone to stay for free! This means you will have to use some of the little money you brought with you to stay at a hotel. Hopefully you find somewhere nice to stay soon or else you will run out of money...
            </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}