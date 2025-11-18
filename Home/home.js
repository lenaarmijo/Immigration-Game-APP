import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { s } from "./home.style";
import Constants from 'expo-constants';
import { useState } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const nav = useNavigation(); 
  return (

    <View style={s.container}>
      <ImageBackground style={s.img} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQq3nfEpJJSJSaOOXBw6HmefmeQZRk1F34qKwZ0QHPA&s" }}>
        <TouchableOpacity onPress={() => nav.navigate("StartPage") }>
        <View style={s.button}>
          <Text style={s.title}>
              Start 
          </Text>
        </View>
        </TouchableOpacity>
   </ImageBackground>
    </View>
  
  );
}