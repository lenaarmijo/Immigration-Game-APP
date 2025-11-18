import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './YNJoinGang.style';
import Constants from 'expo-constants';
import family from '/reactnative/Italy/assets/family.jpg';
import friends from '/reactnative/Italy/assets/friends.jpg';
import newcar from '/reactnative/Italy/assets/newcar.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function YJoinGangN(){
  const nav = useNavigation(); 
  return (

    
    <View style={s.container}>
         <View style={s.row2}>
         <TouchableOpacity onPress={() => nav.navigate("JoinGangNA")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Fail")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>

    <View style={s.row}>
        
        <View style={s.box}>
            <Text style={s.text}>
           You decided to join the organization. Now you have some connections to help you get back on your feet after the marriage. Is this enough to become Naturalized? 
            </Text>
        </View>
    
    <View style={s.row}>
    <Image source={friends} style={s.img2}/>
    <Image source={newcar} style={s.img1}/>
    </View>
      </View>
      </View>

  );
}