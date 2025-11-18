import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image } from 'react-native';
import { s } from './ImmigrationHome3.style';
import Constants from 'expo-constants';
import React from 'react';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import person from '/reactnative/Italy/assets/PersonThree.png';

export function ImmigrationHome3() {
  const nav = useNavigation(); 
  const navigateToRandomScreen = () => {
        const randomValue = Math.random();
        const randomScreenName = randomValue < 0.01 ? 'ImmigrationGood3' : 'ImmigrationBad3';
        nav.navigate(randomScreenName);
      };
  return (

    <View style={s.container}>
        <View style={s.row}>
        <TouchableOpacity onPress={() => nav.navigate("Start")}>
            <Feather name="arrow-left-circle" style={s.arrow} />
        </TouchableOpacity> 
        <Text style={s.title}> 
            Immigration Lottery 
        </Text>
        </View>
        <View style={s.row}>
        <Image style={s.nonno} source={person} />
        <View style={s.box}>
            <Text style={s.text2}>
            The Immigration Lottery 
            </Text>
            <Text style={s.text}> 
                The immigration lottery, otherwise known as the Diversity Visa, gives out 50,000 immigration visas or green cards to immigrants who apply. In order to apply you must be from a country with a low immigration rate to America, as well as have graduated highschool. The chance of winning the immigration lottery is only around 1%. Good luck if you choose to apply!
            </Text>
            <TouchableOpacity onPress={navigateToRandomScreen}>
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