import React ,{Component} from "react";
import { View, Text, StyleSheet} from "react-native";
import Simples from "./components/Simples";



export default class App extends Component{
  render(){
  return (
    <View style ={estilos.container}>
      <Text style={estilos.fonte}>Olá Mundo</Text>
      <Simples texto"Progamando em react-native"/>
      </View>
  );
  }
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justfyContent: 'center',
    aligItems: 'center',
  },
  
  fonte:{
    fontSize: 40,
  },
});