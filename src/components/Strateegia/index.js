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
          <h1>Comparação rápida  de índices</h1>
          <p>Selecione duas jornadas para um compartivo rápido entre seus índices </p>
          <h3>ADICIONAR DOIS DROPDOWNS AQUI</h3>
          <h3>PARA SELECIONAR OS PROJETOS</h3>
         </div>

        <div className="containerRight">
          \/ Será necessario fazer varios desses com dados diferentes \/
          <BarChart />
        </div>
       </div>

       
      </div>
    
    
  );
};

export default Strateegia;
