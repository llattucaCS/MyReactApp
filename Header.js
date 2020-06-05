import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//create a component
class Header extends Component{
  render() {
    return (
        <View style={styles.caja1}>
            <Text>{this.props.name}</Text>
        </View>
    );
  };
}
//define your styles
const styles = StyleSheet.create({
    caja1: {
        flex: 1,
        backgroundColor: '#00ff00',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

//make this componnet available to the app
export default Header;