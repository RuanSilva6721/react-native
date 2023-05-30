import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#8000ff',
      width: '100%',
      height: '100%',

    },
});
  

export default HeaderComponent