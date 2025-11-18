import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './H1B3.style';
import Constants from 'expo-constants';
import HullHouse1 from '/reactnative/Italy/assets/H2A.png';
import Nino3 from '/reactnative/Italy/assets/H1BPersonThree.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function H1B3(){
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
    <TouchableOpacity onPress={() => nav.navigate("H1B3Fail")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You Choose the H-1B Specialty Occupations and Fasion Model Visa! When achieving a H-1B Visa, it usually last around 3 years and can extend up to 6 years. To come over as a fashion model, you must be one of distingished ability and merit. To come over on a specialty occupation visa you must have a bacholor degree or higher in a special area of interest and have specialized of therotical application of a specialized knowledge. It is very hard to obtain a H-1B visa and then continue with it.
            </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}