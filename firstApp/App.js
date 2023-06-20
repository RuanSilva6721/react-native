
import { View, StyleSheet } from 'react-native';

import React from 'react';


const App = () => {
  return (
    <View style={styles.container}>
    <View style={styles.quadradoExterno}>
      <quadradoExterno style={styles.quadradoInterno} />
      <quadradoExterno style={styles.quadradoInterno} />
      <quadradoExterno style={styles.quadradoInterno} />
      <quadradoExterno style={styles.quadradoInterno} />
    </View>
  </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quadradoExterno: {
    width: 500,
    height: 500,
    backgroundColor: 'gray',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quadradoInterno: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderWidth: 1,
    borderColor: 'black',
  },
});