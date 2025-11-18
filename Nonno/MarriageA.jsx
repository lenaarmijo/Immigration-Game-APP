import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './Marraige.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import tobe from '/reactnative/Italy/assets/Tobe.jpg';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function MarriageA() {
  const nav = useNavigation(); 
  return (
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          It's time for you to be married! You are feeling nervous. You have known your wife for two weeks, and do not feel any love for her yet. Will you go through with your marraige or will you back out?
        </Text>
      </View>
        <View style={s.row}>
          <View stlye={s.container1}>
          <Image source={tobe} style={s.img}/>
          </View>
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("SayYesA")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Go through with the marriage 
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("SayNoA")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Runaway at the alter 
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
  );
}