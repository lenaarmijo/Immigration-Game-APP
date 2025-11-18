import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './TunnelM.style';
import Constants from 'expo-constants';
import tunnel from '/reactnative/Italy/assets/Tunnel.png';
import { useState } from 'react';
import WorkT from '/reactnative/Italy/assets/WorkT.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function TunnelM(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={WorkT} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("JobM")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Letter3")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You decided to work for someone else and help build the tunnel connecting Canada to Detroit. You told the boss you needed somewhere to stay so he offered you room and board for part of your wage. Now you have a steady wage, food to eat, will not go into debt, and a place to stay. The only problem is you will not have as much money to save or spend.
            </Text>
        </View>
    <Image source={tunnel} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}