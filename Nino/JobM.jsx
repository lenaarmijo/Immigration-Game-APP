import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './JobH.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import City from '/reactnative/Italy/assets/1900street.png';
import NinoWork from '/reactnative/Italy/assets/NinoWork.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function JobM() {
  const nav = useNavigation(); 
  return (

    <ImageBackground source={City} style={s.img}>
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          Now that you have found somewhere to stay, you need a way to make money. Be careful with what you choose to do. One decison might have more consequences than another. 
        </Text>
      </View>
        <View style={s.row}>
          <View stlye={s.container1}>
          <Image source={NinoWork} style={s.nonno}/>
          </View>
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("TunnelM")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Work To Help Build a Tunnel
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("MarketM")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Work For Yourself 
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
    </ImageBackground>
  );
}