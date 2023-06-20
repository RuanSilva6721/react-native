import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [imcCategory, setIMCCategory] = useState('');

  const calculateIMC = () => {
    if (weight && height) {
      const weightKg = parseFloat(weight);
      const heightM = parseFloat(height) / 100;
      const imcValue = weightKg / (heightM * heightM);
      setIMC(imcValue.toFixed(2));
      setIMCCategory(getIMCCategory(imcValue));
    }
  };
  const getIMCCategory = (imcValue) => {
    if (imcValue < 18.5) {
      return 'Abaixo do peso';
    } else if (imcValue < 24.9) {
      return 'Peso normal';
    } else if (imcValue < 29.9) {
      return 'Sobrepeso';
    } else if (imcValue < 34.9) {
      return 'Obesidade grau 1';
    } else if (imcValue < 39.9) {
      return 'Obesidade grau 2';
    } else {
      return 'Obesidade grau 3';
    }
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setIMC(null);
    setIMCCategory('');
  };

  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Calcule seu Imc</Text>

      <TextInput
      style={estilo.input}
      placeholder="Peso (kg)"
      value={weight}
      onChangeText={setWeight}
      keyboardType="numeric"
      />
      <TextInput
        style={estilo.input}
        placeholder="Altura (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TouchableOpacity style={estilo.button} onPress={calculateIMC}>
        <Text style={estilo.buttonText}>Calcular</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={estilo.clearButton} onPress={clearFields}>
        <Icon name="trash" size={40} color="white" style={estilo.clearButtonIcon} />
      </TouchableOpacity>
      {imc && (
        <View style={estilo.rusultContainer}>
          <Text style={estilo.result}>Seu IMC é:</Text>
          <Text style={estilo.result}>{imc}</Text>
          <Text style={estilo.category}>{imcCategory}</Text>
        </View>
      )}

     
    </View>
  );
}

const estilo = StyleSheet.create({

  container:{
    flex:1
  },
  title:{
    textAlign: 'center',
    marginTop: 35,
    fontSize:30
  },
  input:{
    backgroundColor:'#DDD',
    borderRadius:10,
    margin: 15,
    padding:10,
    color:'#000',
    fontSize:23
  },
  button: {
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '66%',
    justifyContent: "center",
    alignItems: "center",
    marginLeft:57,
    borderRadius:20

  },
  buttonText: {
    fontSize: 18,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rusultContainer:{
    marginLeft:120,
    marginTop:50
  },
   category:{
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
   },
   clearButton: {
    marginTop: 20,
    backgroundColor: 'red',
    padding: 10,
    width: '16%',
    justifyContent: "center",
    alignItems: "center",
    marginLeft:157,
    borderRadius:20
  },
  clearButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
