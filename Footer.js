import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

//create a component
class Footer extends Component{
  render() {
    return (
      <View style={styles.caja3}>
        <Button 
          title="Aumentar" 
          onPress={this.props.sumar}
        />
        <Button 
          title="Disminuir" 
          onPress={this.props.restar}
        />    
      </View>
    );
  };
}
//define your styles
const styles = StyleSheet.create({
  caja3: {
    flex: 1,
    backgroundColor: '#006400',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
  welcome: {
    color: '#00ff00'
  },
});

//make this componnet available to the app
export default Footer;