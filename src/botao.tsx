import React from 'react'; 
import { Button, Text } from 'react-native';
import Padrao from './Styles/Padrao';

export default(props: any) => {
    function executar(){
        console.warn('Botão acionado')
    }


  return (
     <>
       <Button
          title='Executar'
          onPress={executar}
          
       />
       <Button
          title='Executar 2'
       onPress={function(){console.warn( 'Exec 2')}}
       />
    
    <Button
       title='Executar 3'
       onPress={()=> console.warn('Exec 3')}
       />

     </>
   )
}