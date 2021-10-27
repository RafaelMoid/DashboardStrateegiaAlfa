import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById
  // fetchUserProjects,
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
  // const [projects, setProjects] = useState([]);
  const auth = useContext(AuthContext);

  //AQUI EMBAIXO TEMOS DADOS MOCADOS PARA PROJETOS E DADOS
  //apos feito a lista, ela foi operada usando a função .map
  //usando o indece posso chamar o array com todos os seus subarrays e dados inclusos
  //é necessario criar state e atribuir logica de true e false para on click em botões da linha 155 do contentTitle
  const projetos=[
    {nome:"Projeto 1", status:"ativo", pessoas:"25 participantes"},
    {nome:"Projeto 2", status:"concluido", pessoas:"125 participantes"},
    {nome:"Projeto 3", status:"ativo", pessoas:"22 participantes"},
    {nome:"Projeto 4", status:"ativo", pessoas:"48 participantes"},
    {nome:"Projeto 5", status:"ativo", pessoas:"87 participantes"},
    {nome:"Projeto 6", status:"concluido", pessoas:"35 participantes"},
    {nome:"Projeto 7", status:"concluido", pessoas:"39 participantes"},
    {nome:"Projeto 8", status:"concluido", pessoas:"42 participantes"},
    {nome:"Projeto 9", status:"concluido", pessoas:"12 participantes"},
    {nome:"Projeto 10", status:"concluido", pessoas:"0 participantes"},
    {nome:"Projeto 11", status:"concluido", pessoas:"135 participantes"},
    {nome:"Projeto 12", status:"concluido", pessoas:"15 participantes"},
    {nome:"Projeto 13", status:"concluido", pessoas:"78 participantes"},
    {nome:"Projeto 14", status:"concluido", pessoas:"2 participantes"},
  ];
  const listaProjetosNome=projetos.map(
    (c,i)=>
      <li key={i}>{c.nome}</li>
      )

      const listaProjetosStatus=projetos.map(
        (c,i)=>
          <li key={i}>{c.status}</li>
          )

          const listaProjetosPessoas=projetos.map(
            (c,i)=>
              <li key={i}>{c.pessoas} </li>
              )

              const listaProjetosDots=projetos.map(
                (c,i)=>
                  <li key={i}><BsThreeDots /></li>
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


  
  //Aqui estão os dados do mapa em si, é daqui que se resgata os kits (linha 51)
  useEffect(() => {
    fetchMapById(auth.apiToken ).then((data) => {
      console.log(data);
      setKitData(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);


  //Retorno da linha 62 (aqui estão os pontos de encontro)
  useEffect(() => {
    fetchEncounterByMaps(auth.apiToken).then((data) => {
      console.log(data);
      setMapsData(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);


  

  /*<img className="bgImage" src="Calendar_SVG 1.svg"/>  Imagem para adicionar na tela de logado*/

  return (
    
    <div className="Wrapper">
      
      <div className="WrapperNav">
        
          <Navbar2 />
          <Wellcome username={user.name}/>
      </div>
      <div nameClass="inicialBoxes">
        <div className="box1">
          <div className="title1"><h1>32</h1></div>
          <div className="subtitle1"><p>projetos ativos</p></div>
        </div>
        <div className="box2">
          <div className="title2"><h1>45</h1></div>
          <div className="subtitle2"><p>projetos concluídos</p></div>
        </div>
        <div className="box3">
          <div className="title3"><h1>432</h1></div>
          <div className="subtitle3"><p>participantes</p></div>
        </div>
        <div className="box4">
          <div className="title4"><h1>56</h1></div>
          <div className="subtitle4"><p>relatórios gerados</p></div>
        </div>
      </div>

    
       <div className="comparacao">
         
         <div className="containerLeft">
          <h2>Comparação rápida  de índices</h2>
          <p>Selecione duas jornadas para um  <br/>compartivo rápido entre seus índices  </p>
          <h3><br/> Jornada 1</h3>
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
         </div>

        <div className="containerRight">
          <div className="chart1">
          <BarChart />
          <p>Pessoas ativas</p>
          </div>
          
          <div className="chart2">
          <BarChart />
          <p>Engajamento nas questões</p>
          </div>

          <div className="chart3" >
          <BarChart />
          <p>Engajamento nos debates</p>
          </div>

          <div className="chart4">
          <BarChart />
          <p>Engajamento divergências</p>
          </div>

        </div>
       </div>
      <div className="contentSection">
      <div className="contentTitle"><button>Projetos</button><button>Relatórios</button></div>
      <div className="contentWrapper">
        <div className="exibitContent">
        <ul className="listaProjetos">
          {listaProjetosNome}
        </ul>
        <ul className="listaStatus">
        {listaProjetosStatus}
        </ul>
        <ul className="listaPessoas">
        {listaProjetosPessoas}
        </ul> 
        <ul className="dots">
        {listaProjetosDots}
        </ul>
        </div>
        
          
      </div>
      <button className="btnRelatorio">criar relatório</button>
      </div>
       
      </div>
    
    
  );
};

export default Strateegia;
