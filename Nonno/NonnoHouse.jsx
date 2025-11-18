import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './NonnoHouse.Style';
import Constants from 'expo-constants';
import Plane from '/reactnative/Italy/assets/Plane.png';
import family from '/reactnative/Italy/assets/NonnoFamily.png';
import House from '/reactnative/Italy/assets/House.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function NonnoHouse(){
  const nav = useNavigation(); 
  return ( 
    <View style={s.container}>
      <View style={s.row2}>
     <TouchableOpacity onPress={() => nav.navigate("Plane1")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("Work")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.container1}>
      <View style={s.row}>
    <Image source={family} style={s.Img} />
    <Image source={House} style={s.Img} />
    </View>
      <View style={s.box}>
      <Text style={s.text}> 
        The reason my Nonno came to America was to have an arranged marraige. When arriving in Detroit, my Nonno stayed with his soon to be wife's family. Now you will get the chance to play as my Nonno and make decisions that were imperative to his journey in America.
      </Text>
      </View>
      </View>
      </View>
  );
}