import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './House.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import City from '/reactnative/Italy/assets/1900street.png';
import ninohouse from '/reactnative/Italy/assets/Ninohouse.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function House() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={City} style={s.img}>
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          Welcome to your first stop! Before you can do anything or go anywhere you have to choose where you want to live. Be careful both choices will lead to different futures!
        </Text>
      </View>
        <View style={s.row}>
          <View stlye={s.container1}>
          <Image source={ninohouse} style={s.nonno}/>
          </View>
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("HullHouse")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Stay at an immigration halfway house
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("Hotel")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Find shelter yourself 
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
    </ImageBackground>
  );
}