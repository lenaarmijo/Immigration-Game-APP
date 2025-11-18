import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './H2B3.style';
import Constants from 'expo-constants';
import HullHouse1 from '/reactnative/Italy/assets/H2A.png';
import Nino3 from '/reactnative/Italy/assets/H2APersonThree.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function H2B3(){
  const nav = useNavigation(); 
  return (

    <ImageBackground source={HullHouse1} style={s.img}>
    <View style={s.container}>
      <View style={s.row}>
      <TouchableOpacity onPress={() => nav.navigate("WorkVisa3")}>
      <Feather name="arrow-left-circle" style={s.arrow}/>
        </TouchableOpacity> 
      <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
      <Feather name="home" style={s.arrow} />
        </TouchableOpacity>
    <TouchableOpacity onPress={() => nav.navigate("H2B3Fail")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You Choose the H-2B Non-Agriculture Worker Visa! In order for companies to offer you a job, three requirments must be checked. 1. There is a lack of willing U.S. workers to preform the temporary work, 2. employing H-2B workers do not effect the wages or working conditions of U.S. workers, and 3. work would be considered temporary if it's a one-time occurance, seasonal, or intermittent need. Due to this and the lengthy procress is takes to file for H-2B workers, many organizations do not offer employment. In addition, the H-2B program does not adequately protect foriegn workers often leading to labor abuses and other hardships. It is very hard to obtain a H-2B visa and then continue with it. 
            </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}