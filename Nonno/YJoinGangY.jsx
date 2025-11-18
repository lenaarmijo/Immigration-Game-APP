import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './YjoinGang.style';
import Constants from 'expo-constants';
import family from '/reactnative/Italy/assets/family.jpg';
import friends from '/reactnative/Italy/assets/friends.jpg';
import newcar from '/reactnative/Italy/assets/newcar.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function YJoinGangY(){
  const nav = useNavigation(); 
  return (

    
    <View style={s.container}>
    <View style={s.row}>
        <View style={s.container1}>
        <View style={s.box}>
            <Text style={s.text}>
           You decided to join the organization. Now you have the influence of your in laws as well as the connections you are making from the organization. You are beginning to build a very promising life for yourself. Is this enough to become naturalized?
            </Text>
        </View>
        </View>
        <View style={s.container1}>
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
    <Image source={newcar} style={s.img3}/>
    
    <View style={s.row}>
    <Image source={friends} style={s.img2}/>
    <Image source={family} style={s.img1}/>
    </View>
      </View>
      </View>
      </View>
  );
}