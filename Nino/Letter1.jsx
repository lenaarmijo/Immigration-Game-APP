import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './letter.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import Letter from '/reactnative/Italy/assets/letter.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Letter1() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Letter} style={s.img}>
    <View style={s.container}>
       
      <View style={s.box}>
        <Text style={s.text}>
           Now that you have been in America for a while, it is time to write back to your family. You have been sending home money to be able to provide for you wife and family. Your wife would be called a white widow since it is almost like you are dead. Will you write back that it has been going good, or will you write back that it is going bad? It is up to you to be truthful or not. 
        </Text>
      </View>
          <TouchableOpacity onPress={() => nav.navigate("Answer1")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Write that everything is going good
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("Answer11")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Write that everything is going bad  
            </Text>
          </View>
          </TouchableOpacity>
          </View>
        
    </ImageBackground>
  );
}