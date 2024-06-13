import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {
    const [nome, setNome] = useState('');
    const[idade,setIdade] =useState(0);
    const[saudacao, setSaudacao] = useState('');

    const hora = new Date().getHours();
    
    function modificar(nome, idade){
        setNome(nome);
        setIdade(idade);
    }

    useEffect(()=>{
        (hora < 12?setSaudacao('Bom dia'):hora < 18? setSaudacao('Boa tarde'):setSaudacao('Boa noite'));
    },[])
    
  return (
    <View>
        <Button title='Alterar Nome' onPress={()=>modificar('Maria',34)}/>
      <Text style={{fontSize:22}}>{nome}</Text>
      <Text>{idade}</Text>
      <Text>{saudacao}</Text>

    </View>
  )
}