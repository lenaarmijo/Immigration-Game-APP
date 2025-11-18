import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image } from 'react-native';
import { s } from './NonnoStart.style';
import Constants from 'expo-constants';
import Nonno2 from '/reactnative/Italy/assets/nonno2.png';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function NonnoStart() {
  const nav = useNavigation(); 
  return (

    <View style={s.container}>
        <View style={s.row}>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <Feather name="arrow-left-circle" style={s.arrow} />
        </TouchableOpacity>
        <Text style={s.title}> 
            Nonno's era - 1960's
        </Text>
        </View>
        <View style={s.row}>
        <Image style={s.nonno} source={Nonno2} />
        <View style={s.box}>
            <Text style={s.text}> 
                My Nonno traveled here in 1965. Play as him in this time period to see what it was like to come to America. Your goal will be to try and get naturalized. Do you have what it takes?
            </Text>
            <TouchableOpacity onPress={() => nav.navigate("Plane1")}>
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