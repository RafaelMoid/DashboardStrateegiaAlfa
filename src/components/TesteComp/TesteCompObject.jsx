import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById,
  fetchUserProjects, fetchProjectsMembers
} from "../../services/requestFunctions";


function TesteCompObject() {
    
     const [user, setUser] = useState({});
    //Aqui está a chamada do valor de id para a função seguinte

    const [projectsData, setProjectsData] = useState("");
    
    const auth = useContext(AuthContext);

    useEffect(() => {
        fetchUserData(auth.apiToken).then((data) => {
          console.log(data);
          setUser(data);
        });
        // fetchUserProjects(auth.apiToken).then((data) => {
        //   setProjects(data);
        // });
      }, [auth.apiToken]);

    //Aqui estão os dados do mapa em si, é daqui que se resgata os kits (linha 51)
    useEffect(() => {
         fetchUserProjects(auth.apiToken ).then((data) => {
            console.log(data);
            setProjectsData(data);
        });
    }, [auth.apiToken]);

    

    const projetos2=[
        {nome:"Strateegia Studio", status:"ativo", pessoas:"25 participantes"},
        {nome:"Projeto Moura fácil", status:"concluido", pessoas:"125 participantes"},
        {nome:"TreeloStudio", status:"ativo", pessoas:"22 participantes"},
        {nome:"Projeto Rafa é desenrolado", status:"ativo", pessoas:"48 participantes"},
        {nome:"Projeto Nath é uma artista", status:"ativo", pessoas:"87 participantes"},
        {nome:"Projeto Matheus é um mago", status:"concluido", pessoas:"35 participantes"},
        {nome:"Projeto Akira", status:"concluido", pessoas:"39 participantes"},
        {nome:"Godzilla", status:"concluido", pessoas:"42 participantes"},
        {nome:"Sem criatividade 9", status:"concluido", pessoas:"12 participantes"},
        {nome:"Sem criatividade 10", status:"concluido", pessoas:"0 participantes"},
        {nome:"Sem criatividade 11", status:"concluido", pessoas:"135 participantes"},
        {nome:"Sem criatividade 12", status:"concluido", pessoas:"15 participantes"},
        {nome:"Sem criatividade 13", status:"concluido", pessoas:"78 participantes"},
        {nome:"Sem criatividade 14", status:"concluido", pessoas:"2 participantes"},
      ];
      const listaProjetosNome2=projetos2.map(
        (c,i)=>
          <li key={i} className="ulItem">{c.nome}</li>
          )

    return (
        
        <div className="contentSection">
                 <div className="contentTitle"><h3>Páginas das jornadas</h3></div>
              
                <ul className="listaProjetos">
                 {listaProjetosNome2}
                </ul>
              
            </div>
    )
}

export default TesteCompObject
