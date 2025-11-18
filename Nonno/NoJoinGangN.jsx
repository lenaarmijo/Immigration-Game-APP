import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './NJoinGang.style';
import Constants from 'expo-constants';
import Construction from '/reactnative/Italy/assets/construction.png';
import sad from '/reactnative/Italy/assets/sad.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function NJoinGangN(){
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
                You decided not to join the organization. With the loss of their influence, you are worse off then ever. You have lost friends, influence, and money. You need a miracle to find a way to stay. Is this enough to become naturalized? 
            </Text>
        </View>
    <Image source={sad} style={s.nino}/>
      </View>
      </View>
  );
}