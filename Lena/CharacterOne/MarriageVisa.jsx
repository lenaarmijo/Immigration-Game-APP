import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Marriage.style';
import Constants from 'expo-constants';
import HullHouse1 from '/reactnative/Italy/assets/H2A.png';
import Nino3 from '/reactnative/Italy/assets/marriage.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function MarriageVisa(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={HullHouse1} style={s.img}>
    <View style={s.container}>
      <View style={s.row}>
      <TouchableOpacity onPress={() => nav.navigate("Start")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("MarriageFail")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                    You choose to try and obtain a marriage or spouse visa. This visa allows you to come to the U.S. by allowing a U.S. citizen or legal permanent resident to sponser you. In order for this to happen the you must be lawfully married to the citizen and provide proof of a marriage certificate. If you do not have any connections in the U.S. or a lover in the U.S. this is an almost immpossible path. 
              </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}