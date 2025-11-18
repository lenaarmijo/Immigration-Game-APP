import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './HullHouse.style';
import Constants from 'expo-constants';
import HullHouse1 from '/reactnative/Italy/assets/halfwayhouse.png';
import Nino3 from '/reactnative/Italy/assets/Nino3.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function HullHouse(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={HullHouse1} style={s.img}>
    <View style={s.container}>
      <View style={s.row}>
      <TouchableOpacity onPress={() => nav.navigate("House")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("JobH")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You choose to stay at an Immigrant Halfway House! While this might be the easiet option, it will also change you the most. At an Immigrant Halfway House the objective was to americanize the new immigrants coming to America. This includes your language and behavior. Immigrants had to conform to the behaviors of their benefactors, for many that meant a more reserved and decorous behavior that hid their cultural identity. 
            </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}