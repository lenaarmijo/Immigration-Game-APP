import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './MarketH.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import Market from '/reactnative/Italy/assets/Market.png';
import Worker from '/reactnative/Italy/assets/NinoWork2.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function MarketH(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Market} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("JobH")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Letter1")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to work for yourself! This entails having to sell supplies or food in the market place. The upside to this is that you get to keep all the money you make, you do not have to pay rent anywhere, and you do not have a boss who could bully you. On the downside you stand to lose money since you have to buy your supplies.
            </Text>
        </View>
    <Image source={Worker} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}