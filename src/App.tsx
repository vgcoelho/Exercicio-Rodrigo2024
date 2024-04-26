import React, { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';
import Simples from "./components/Simples";
import Frag from "./components/Frag";
import Parimpar from "./components/ParImpar";
import Familia from "./components/relacao/Familia";
import Membro from "./components/relacao/Membro";

export default class App extends Component {
  render(){
    return (
      <View style={estilos.container}>{
        /*<Text style={estilos.fonte}>Olá mundo</Text>
      <Simples valor="Programando em react-native"/>*/}
      
        {/*<Frag titulo="Titulo" 
              subTitulo="sub Titulo"  />*/}
      {/*<Parimpar numero={11} />*/}
  <Familia>
    <Membro nome="Vanessa" sobreNome="Guimarães"/>
    <Membro nome="Miguel" sobreNome="Guimarães"/>
  </Familia>
  
      </View>
    );
  }
}


const estilos= StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  fonte: {
    fontSize: 40,
  }
})


