import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './SayNo.style';
import Constants from 'expo-constants';
import Construction from '/reactnative/Italy/assets/construction.png';
import NonnoWork1 from '/reactnative/Italy/assets/NonnoWork1.png';
import runaway from '/reactnative/Italy/assets/Runaway.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function SayNoA(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={runaway} style={s.img}>
    <View style={s.container}>
    <View style={s.row2}>
    <TouchableOpacity onPress={() => nav.navigate("MarriageA")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("JoinGangNA")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
   
        <View style={s.box}>
            <Text style={s.text}>
            You choose to abandon your own wedding. This has caused major consequences for you. You lost your job at the bakery as your ex-fiances family had influence over it. You lost the connections you had and are having a hard time finding another job. You might be out of a loveless marraige, but you are now going on a harder road. 
            </Text>
        </View>

      
      </View>
    </ImageBackground>
  );
}