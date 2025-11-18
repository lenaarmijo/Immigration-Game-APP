import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ViewBase, ImageBackground, Image } from 'react-native';
import { s } from './Yay.style';
import Constants from 'expo-constants';
import naturalization from '/reactnative/Italy/assets/naturalization.jpg';
import fish from '/reactnative/Italy/assets/fish.jpg';
import couch from '/reactnative/Italy/assets/couch.jpg';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Yay(){
  const nav = useNavigation(); 
  return (

   
    <View style={s.container}>
        <View style={s.row}>
        <View style={s.container1}>
        <TouchableOpacity onPress={() => nav.navigate("StartPage")}>
            <View style={s.box}>
            <Text style={s.text}>
                You have succesfully become naturalized! You established connections and a strong groundwork to continue your life in America. Now you can create a family and a sucessful life for yourself. My nonno's story started in 1965, and he did not get naturalized until 1979. He went through with his marraige and worked hard to build a life for himself. He started as working as a brick layer, in a bakery, and in a collision shop, and now has his own construction company. Despite being sucessful now there were a lot of obstacles to obtaining this. Click on this box to go back to the beginning. 
            </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={s.container1}>
            <Image source={naturalization} style={s.img3}/>
    
            <View style={s.row}>
            <Image source={couch} style={s.img2}/>
            <Image source={fish} style={s.img1}/>
            </View>
        </View>
        </View>
        </View>
  );
}