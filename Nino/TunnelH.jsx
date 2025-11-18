import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './TunnelH.style';
import Constants from 'expo-constants';
import tunnel from '/reactnative/Italy/assets/Tunnel.png';
import { useState } from 'react';
import WorkT from '/reactnative/Italy/assets/WorkT.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function TunnelH(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={WorkT} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("JobH")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("Letter4")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You decided to work for someone else and help build the tunnel connecting Canada to Detroit. As you already have somewhere to stay, you get to keep your wage in full. Now you have a steady wage and won't go into debt. You now have friends and are starting to make connections. On the downside you start to get bullied by your boss. During those times people could either choose to join a union or multi-ethnic coalitions. 
            </Text>
        </View>
    <Image source={tunnel} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}