import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './NJoinGang.style';
import Constants from 'expo-constants';
import Construction from '/reactnative/Italy/assets/construction.png';
import family2 from '/reactnative/Italy/assets/family2.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function NJoinGangY(){
  const nav = useNavigation(); 
  return (

    
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("JoinGangYA")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Yay")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You decided not to join the organization. Though it would have been a good chance to build connections of your own, you did not suffer from this decision. Your in laws are still supporting you and you have a promising future ahead. Is this enough to become naturalized?
            </Text>
        </View>
    <Image source={family2} style={s.img}/>
      </View>
      </View>
  );
}