import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './WorkAnswerStyle';
import Constants from 'expo-constants';
import background from '/reactnative/Italy/assets/Bachground.png';
import NonnoWork2 from '/reactnative/Italy/assets/NonnoWork2ng.png';
import NonnoWork3 from '/reactnative/Italy/assets/NonnoWork3.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function WorkAnswerA(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={background} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("Work")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("MarriageA")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
    <Image source={NonnoWork3} style={s.nino}/>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to work at the bakery and at the collision shop. At night you work at the bakery, and during the day you work at the collision shop. It's tiring but you make enough money to satisfy your father in law. 
            </Text>
        </View>
    <Image source={NonnoWork2} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}