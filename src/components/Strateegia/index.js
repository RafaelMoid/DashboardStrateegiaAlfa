import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById,
  fetchUserProjects, fetchProjectsMembers
} from "../../services/requestFunctions";
import Navbar from "../Navbar";
import Kits from "../Kits";
import Button from "../pontosDeEncontro";
import Wellcome from "../Wellcome";
import Navbar2 from "../Navbarv2";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Encontros from "../Kits";
import BarChart from '../Charts/Chart.js';
import {BsThreeDots} from 'react-icons/bs';


import "./styles.scss";

const Strateegia = () => {
  const [user, setUser] = useState({});
  //Aqui está a chamada do valor de id para a função seguinte
  const [idKitData, setIdKitData] = useState("");
  //Aqui estão os dados do mapa em si, é daqui que se resgata os kits (linha 51) \/
  const [kitData, setKitData] = useState("");
  //Retorno da linha 62 (aqui estão os pontos de encontro) \/
  const [MapsData, setMapsData] = useState("");
  // Todos os projetos estão sendo chamados como array complexo de 3 niveis
  const [projectsData, setProjectsData] = useState("");
  //Vai ser necessario quebrar em aprtes menores
  const [projectsProjectsData, setProjectsProjectsData] = useState("");
  // Dados de usuarios em projetos \/\/\/\/
  const [membersData, setMembersData] = useState("");
  // const [projects, setProjects] = useState([]);
  const auth = useContext(AuthContext);

  //AQUI EMBAIXO TEMOS DADOS MOCADOS PARA PROJETOS E DADOS
  //apos feito a lista, ela foi operada usando a função .map
  //usando o indece posso chamar o array com todos os seus subarrays e dados inclusos
  //é necessario criar state e atribuir logica de true e false para on click em botões da linha 155 do contentTitle
  const projetos=[
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
  const listaProjetosNome=projetos.map(
    (c,i)=>
      <li key={i} className="ulItem">{c.title}</li>
      )

  

     
  const relatorios=[['Relatorio 1', 'conclusão','escola figital'],['Relatorio parcial', 'parcial','banco figital'],['MVS', 'parcial','habilitação figital'],['Relatorio final', 'conclusão','empresa figital']];
  

  useEffect(() => {
    fetchUserData(auth.apiToken).then((data) => {
      console.log(data);
      setUser(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);


  
  //Aqui estão os dados dos projetos em si, de forma bruta como um Array complexo de 3 niveis
  useEffect(() => {
    fetchUserProjects(auth.apiToken ).then((data) => {
      console.log(data);
      //Aqui embaixo consigo chamar apenas o titulo do objeto no array de terceiro nivel
      console.log(data[1].projects[0].title)
      setProjectsData(data);

      //iterando todos os titulos de todos os projetos
      projectsData.forEach((data) => {
        console.log(data.projects.title);
        setProjectsProjectsData(data)
    });
    });
  }, [auth.apiToken]);
  
  //Mostra isso a Gab
  /*useEffect(() => {
    setProjectsProjectsData = projectsData.projects
  })*/

  //Aqui estão os dados do mapa em si, é daqui que se resgata os kits (linha 51)
  useEffect(() => {
    fetchUserProjects(auth.apiToken ).then((data) => {
      console.log(data);
      setProjectsData(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);

  //Aqui estão os dados dos membros dos projetos
  useEffect(() => {
    fetchProjectsMembers(auth.apiToken ).then((data) => {
      console.log(data);
      setMembersData(data);
    });
  }, [auth.apiToken]);


  //Retorno da linha 62 (aqui estão os pontos de encontro)
  useEffect(() => {
    fetchEncounterByMaps(auth.apiToken).then((data) => {
      //console.log(data);
      setMapsData(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);


  

  /*<img className="bgImage" src="Calendar_SVG 1.svg"/>  Imagem para adicionar na tela de logado*/

/* <component projetos={projectsData.} */

  return (
    
    <div className="Wrapper">
      
      <div className="WrapperNav">
        
          <Navbar2 />
          <Wellcome username={user.name}/>
      </div>
      <div className="wrapperBoxes">
          <article className="box1">
            <div className="textBox1">
              <div className="title1"><h1>32</h1></div>
              <div className="subtitle1"><p>projetos ativos</p></div>
            </div>
          </article>
          <article className="box2">
            <div className="textBox2">
              <div className="title2"><h1>45</h1></div>
              <div className="subtitle2"><p>projetos concluídos</p></div>
            </div>
          </article>
          <article className="box3">
            <div className="textBox3">
              <div className="title3"><h1>432</h1></div>
              <div className="subtitle3"><p>participantes</p></div>
            </div>
          </article>
          <article className="box4">
            <div className="textBox4">
              <div className="title4"><h1>56</h1></div>
              <div className="subtitle4"><p>relatórios gerados</p></div>
            </div>
          </article>
      </div>

    
       
         <div className="container2">


         <div className="contentSection">
                 <div className="contentTitle"><h3>Páginas das jornadas</h3></div>
              
                <ul className="listaProjetos">
                 {listaProjetosNome}
                </ul>
              
            </div>

           <div className="comparacao">
           
           
             <div className="containerLeft">
              <div className="comp0">
                <h3>Comparação rápida  de índices</h3>
                <p>Selecione duas jornadas para um compartivo rápido entre seus índices  </p>
                <h3>Jornada 1</h3>
                <select className="dropdown">
                  <option value="Project 1">Project 1</option>
                  <option value="Project 2">Project 2</option>
                  <option value="Project 3">Project 3</option>
                </select>
                <h3>Jornada 2</h3>
                <select className="dropdown">
                  <option value="Project 1">Project 1</option>
                  <option value="Project 2">Project 2</option>
                  <option value="Project 3">Project 3</option>
                </select>
                <div><button className="btnComp">Comparar</button></div>
                <div className="txtComp"><a >Comparações avançadas</a></div>
              </div>

              <div className="comp1">
                <div className="horizontalDisplay">
                <h2 className="compTitle">Titulo projeto 1</h2>
                  <div className="element">
                  <img src="group.svg" className="iconComp"/><h3>35%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  
                  <div className="element">
                  <img src="circledQuestion.svg" className="iconComp"/><h3>15%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp"/><h3>85%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp"/><h3>147</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                </div>
              </div>
              
              <div className="comp1">
                <div className="horizontalDisplay">
                <h2 className="compTitle">Titulo projeto 2</h2>
                  <div className="element">
                  <img src="group.svg" className="iconComp"/><h3>35%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  
                  <div className="element">
                  <img src="circledQuestion.svg" className="iconComp"/><h3>15%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp"/><h3>85%</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp"/><h3>147</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                </div>
              </div>
              
             </div>
            
           </div>
            
         </div>
      
       
      </div>
    
    
  );
};

export default Strateegia;
