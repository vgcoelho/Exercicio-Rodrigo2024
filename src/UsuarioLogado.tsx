import React from "react";
import { Text } from "react-native";
import Padrao from "./Styles/Padrao";
import Validausuario from "./Validausuario";

export default(props: any) => {

    const values = props.usuario || {}

    return (
        <>
            <Validausuario valido={values && values.nome && values.email}>
            
    
                <Text style={Padrao.bigText}>
                    Usuário Logado
                </Text>
                <Text style={Padrao.bigText}>
                    {values.nome} - {values.email}
                </Text>
            </Validausuario>    


        </>
    )

    
    
}