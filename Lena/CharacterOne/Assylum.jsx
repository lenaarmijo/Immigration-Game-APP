import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Assylum.style';
import Constants from 'expo-constants';
import HullHouse1 from '/reactnative/Italy/assets/Immigration.png';
import Nino3 from '/reactnative/Italy/assets/AsylumPerson.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Assylum(){
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
    <TouchableOpacity onPress={() => nav.navigate("Assylum2")}>
    <Feather name="arrow-right-circle" style={s.arrow} />
    </TouchableOpacity>
    </View>
    <View style={s.row}>
        <View style={s.box}>
            <Text style={s.text}>
                You choose to file for an asylum claim! You can file for an asylum claim if your life is in danger and you had to leave your country. It is meant to grant people a permanent residence in the Untied States and start their path to citizenship. In order to file for an asylum claim you need to first make it to American soil. Then you can file for a court date and to see a lawyer. It could take 4-5 years before you meet a lawyer. While you are waiting to see a judge, you cannot legally work in the U.S. and you are not protected. The asylum claim is a hard road to go down and not many cases go through to the final step. Continue to see if your case went through!               </Text>
        </View>
    <Image source={Nino3} style={s.nino}/>
      </View>
      </View>
    </ImageBackground>
  );
}