import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
//export default function App() {
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numero: 0
    }
  }

  aumentar = () =>{
    this.setState({
      numero: this.state.numero+1
    })
  }
  disminuir = () =>{
    this.setState({
      numero: this.state.numero-1
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Header name = "Contador"/>
        <Body numero = { this.state.numero }/>
        <Footer sumar = {this.aumentar} restar={this.disminuir}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1, //toma el valor de toda la pantalla siendo 1
    //backgroundColor: '#fff', //color de fondo
    //alignItems: 'center', //alinea de forma horizontal
    justifyContent: 'center', // alinea de manera vertical
  },
  welcome: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  } 
});

export default App;