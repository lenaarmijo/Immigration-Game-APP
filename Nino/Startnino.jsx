import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image } from 'react-native';
import { s } from './Startnino.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import nino from '/reactnative/Italy/assets/Nino.png';

export function Startnino() {
  const nav = useNavigation(); 
  return (

    <View style={s.container}>
        <View style={s.row}>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <Feather name="arrow-left-circle" style={s.arrow} />
        </TouchableOpacity> 
        <Text style={s.title}> 
            Nino's era - 1900's
        </Text>
        </View>
        <View style={s.row}>
        <Image style={s.nonno} source={nino} />
        <View style={s.box}>
            <Text style={s.text}> 
            My Great Nonno Nino traveled here in 1908. Play as him in this time period to see what it was like to come to America. Your goal will be to try and get naturalized. Do you have what it takes?
            </Text>
            <TouchableOpacity onPress={() => nav.navigate("Intro1")}>
            <View style={s.button}>
                <Text style={s.btext}>
                    Go!
                </Text>
            </View>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  
  );
}