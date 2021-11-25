//Importando useEffect para alternar o state do useState (usar props e tals)
import React,{useEffect,useState} from 'react';
import TesteCompObject from './TesteCompObject';
import axios from 'axios';

function TesteComp() {

    //Fazendo a requisição dos dados via axios
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    return (
        <div>
            <h1>Bellow this is the component redered </h1>
            <TesteCompObject/>
        </div>
    )
}

export default TesteComp;
