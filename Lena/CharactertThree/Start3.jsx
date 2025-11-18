import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './Start3.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import tobe from '/reactnative/Italy/assets/Tobe.jpg';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Start3() {
  const nav = useNavigation(); 
  return (
    <View style={s.container}>
        <View style={s.row}>
            <View style={s.container2}>
      <View style={s.box}>
        <Text style={s.text}>
             When entering another country, there is typically 5 common paths to take. When entering the United States, the most common ways are through the immigration lottery, filing for an assylum claim, entering through a work or marriage visa, or entering the country illegally. Despite these being the most common ways, they are not easy. More often then not, people are unsuccesful funding a home in America. Now it is your turn to choose one of the paths below and see if you can succesfully immigrate to America.
          </Text> 
      </View>
      </View>
      <View style={s.container2}>
          <TouchableOpacity onPress={() => nav.navigate("Assylum3")}>
          <View style={s.button}>
            <Text style={s.btext}>
              File for an Assylum Claim 
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("ImmigrationHome3")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Immigration Lottery  
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("WorkVisa3")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Enter through a Work Visa 
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("Marriage3")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Enter through a Marriage Visa 
            </Text>
          </View>
          </TouchableOpacity>
         
          </View>
          </View>
    </View>
  );
}