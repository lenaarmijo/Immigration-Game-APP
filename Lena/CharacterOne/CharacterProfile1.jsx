import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image } from 'react-native';
import { s } from './CharacterProfile1.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import person from '/reactnative/Italy/assets/PersonOne.png';

export function CharacterProfile1() {
  const nav = useNavigation(); 
  return (

    <View style={s.container}>
        <View style={s.row}>
        <TouchableOpacity onPress={() => nav.navigate("ModernStart")}>
            <Feather name="arrow-left-circle" style={s.arrow} />
        </TouchableOpacity> 
        <Text style={s.title}> 
            Person One
        </Text>
        </View>
        <View style={s.row}>
        <Image style={s.nonno} source={person} />
        <View style={s.box}>
            <Text style={s.text2}>
            Character Profile: 
            </Text>
            <Text style={s.text}> 
                    Motivation: Better Life
            </Text>
            <Text style={s.text}> 
                    Asset: Formal English 
            </Text>
            <Text style={s.text}> 
                    Liabilty: Small Network, Could get trapped easily
            </Text>
            <TouchableOpacity onPress={() => nav.navigate("Start")}>
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