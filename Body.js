import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//create a component
class Header extends Component{
  render() {
    return (
      <View style={styles.caja2}>
      <Text style={styles.welcome}>{this.props.numero}</Text>
    </View>
    );
  };
}
//define your styles
const styles = StyleSheet.create({
  caja2: {
    flex: 2,
    backgroundColor: '#90ee90',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  welcome: {
    color: '#1111'
  },
});

//make this componnet available to the app
export default Header;