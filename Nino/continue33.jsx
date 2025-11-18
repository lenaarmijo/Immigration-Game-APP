import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, Image, ImageBackground } from 'react-native';
import { s } from './continue.style';
import Constants from 'expo-constants';
import { useState } from 'react';
import Nino4 from '/reactnative/Italy/assets/Ninoconfused.png'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Continue33() {
  const nav = useNavigation(); 
  return (

    
    <View style={s.container}>
        <View style={s.row}>
            <View style={s.container1}>
        <Image source={Nino4} style={s.nonno} />
        </View>
        <View style={s.container1}>
      <View style={s.box}>
        <Text style={s.text}>
           Now that you have been in America for awhile, it is time to decide if you want to continue with your journey, or return back home. Rely on your past choices to help you*add past choices*.
        </Text>
      </View>
          <TouchableOpacity onPress={() => nav.navigate("Sacco")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Stay 
            </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => nav.navigate("Leave")}>
          <View style={s.button}>
            <Text style={s.btext}>
              Go back to Sicily 
            </Text>
          </View>
          </TouchableOpacity>
          </View>
          </View>
          </View>
  );
}