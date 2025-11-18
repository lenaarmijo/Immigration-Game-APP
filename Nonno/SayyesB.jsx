import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './SayYes.style';
import Constants from 'expo-constants';
import marriage1 from '/reactnative/Italy/assets/marriage1.jpg';
import marriage2 from '/reactnative/Italy/assets/marriage2.jpg';
import marriage4 from '/reactnative/Italy/assets/marraige4.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function SayYesB(){
  const nav = useNavigation(); 
  return (

    
    <View style={s.container}>
    <View style={s.row}>
        <View style={s.container1}>
        <View style={s.box}>
            <Text style={s.text}>
            You choose to go through with the marraige! Even though you do not feel love at first, you learn to love eachother. You have gained the protection, money, and influence of your wife's family. With their influence you got promoted at the bakery and collision shop and a higher salary. 
            </Text>
        </View>
        </View>
        <View style={s.container1}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("MarriageB")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("JoinGangYB")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <Image source={marriage1} style={s.img3}/>
    
    <View style={s.row}>
    <Image source={marriage2} style={s.img2}/>
    <Image source={marriage4} style={s.img1}/>
    </View>
      </View>
      </View>
      </View>
  );
}