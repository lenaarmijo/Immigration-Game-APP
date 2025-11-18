import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './StartPage.style';
import Constants from 'expo-constants';
import wooden from '/reactnative/Italy/assets/wooden.png';
import Table2 from '/reactnative/Italy/assets/Table2.png'; 
import Nonno from '/reactnative/Italy/assets/startnonno.png';
import Nino from '/reactnative/Italy/assets/startnino.png';
import Me from '/reactnative/Italy/assets/Me.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function StartPage() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={wooden} style={s.img}>
    <View style={s.container}>
      
        <View style={s.row}>
        <TouchableOpacity onPress={() => nav.navigate("Home")}>
      <Feather name="arrow-left-circle" style={s.arrow} />
      </TouchableOpacity>
      <Text style={s.title}>
        Benvenuto 
      </Text>
      </View>
      <View style={s.box}>
      <Text style={s.text}>
        Click on a character to be transported to a different time period and get started!
      </Text>
      </View>

      <View style={s.row}>
      <TouchableOpacity onPress={() => nav.navigate("NonnoStart")}>
      <Image style={s.nonno} source={Nonno} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate("Startnino")}>
      <Image style={s.nonno} source={Nino} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate("ModernStart")}>
      <Image style={s.me} source={Me}/>
      </TouchableOpacity>
      </View>

      <Image style={s.Table2} source={Table2}/>
      </View>
    </ImageBackground>
  );
}