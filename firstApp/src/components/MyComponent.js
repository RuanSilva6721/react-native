import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default function App() {

    let nome = 'Campus XX - Castanhal';
    let image = 'https://www.google.com/google.jpg'

    return (
      <View>
        <Text> Hello Word!! </Text>
        <Text> My Component!! </Text>
        <Text style={{color:'#ff0000', fontSize: 25, margin: 15}}> Uepa - BES </Text>
      </View>
    )
  
};

