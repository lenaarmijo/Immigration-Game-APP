import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Intro1.style';
import Constants from 'expo-constants';
import boat from '/reactnative/Italy/assets/boat.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Intro1(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={boat} style={s.img}>
    <View style={s.container}>
      <TouchableOpacity onPress={() => nav.navigate("Intro2")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
      </View>
      <View style={s.box}>
      <Text style={s.text}> 
        When my great grandfather came to America, he arrived by boat to Ellis island. As an immigrant your first stop would always be Ellis Island.
      </Text>
      </View>
    </ImageBackground>
  );
}