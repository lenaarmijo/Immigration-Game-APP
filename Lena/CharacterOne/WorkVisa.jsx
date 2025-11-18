import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './WorkVisa.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import Computer from '/reactnative/Italy/assets/computer.png';
import NonnoWork from '/reactnative/Italy/assets/NonnoWork.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function WorkVisa() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={Computer} style={s.img}>
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          You choose to start your journey by obtaining a temporary workers visa. You decide to utilize your skills and apply to work in the United States. Now, you have a choice between three different kinds of specific visas. One is for Fashion or other specialty occupations, one is for agriculture jobs, and the other is for non-agriculture jobs. If you fit the criteria for any of these you can apply and take a specific job for a period of time. Choose a job that coensides with your skills! 
        </Text>
      </View>
        <View style={s.row}>

       
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("H1B")}>
          <View style={s.button}>
            <Text style={s.btext}>
              H-1B Specialty Occupations and Fashion Models
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("H2A")}>
          <View style={s.button}>
            <Text style={s.btext}>
              H-2A Agriculture Workers Visa
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("H2B")}>
          <View style={s.button}>
            <Text style={s.btext}>
              H-2B Non-Agriculture Workers Visa  
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
    </ImageBackground>
  );
}