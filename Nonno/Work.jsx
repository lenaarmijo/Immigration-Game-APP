import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './Work.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import DetroitCity from '/reactnative/Italy/assets/street.png';
import NonnoWork from '/reactnative/Italy/assets/NonnoWork.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Work() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={DetroitCity} style={s.img}>
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          Your soon to be father-in-law excepts you to get a job and bring home money. If you are too marry his daughter, you need to provide her with a stable home enviorment, that includes having a steady flow of money. Choose what you believe will bring in the most money.
        </Text>
      </View>
        <View style={s.row}>
          <View stlye={s.container1}>
          <Image source={NonnoWork} style={s.nonno}/>
          </View>
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("WorkAnswerA")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Work two jobs at the bakery and collison shop. 
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("WorkAnswerB")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Work for yourself by offering to lay bricks for people
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
    </ImageBackground>
  );
}