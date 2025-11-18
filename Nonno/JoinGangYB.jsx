import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './JoinGang.style';
import Constants from 'expo-constants';
import Order from '/reactnative/Italy/assets/Order.png';
import { useState } from 'react';
import tobe from '/reactnative/Italy/assets/Tobe.jpg';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function JoinGangYB() {
  const nav = useNavigation(); 
  return (
    <View style={s.container}>
      <View style={s.box}>
        <Text style={s.text}>
          After settling into married life you are presented with to option to join the Order Sons and Daughters of Italy in America. This is an organization for men and women of Italian heritage living in America. The organization helps provide mutual aid, advocates for the study of Italian language and culture in schools, and helps perserve the Italian American traditions and cultures. By joining you can have additional help making a life for yourself and your new family in America. Will you join? 
        </Text>
      </View>
        <View style={s.row}>
          <View stlye={s.container1}>
          <Image source={Order} style={s.img}/>
          </View>
          <View style={s.container1}>
          <TouchableOpacity onPress={() => nav.navigate("YJoinGangY")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Join the organization
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("NJoinGangY")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Don't join the organization 
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
      
    </View>
  );
}