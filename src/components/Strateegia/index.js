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
          
      </div>
      
      <div className="DEIXANDO_INVISIVEL">
      <div className="introTxt">
           <div className="firstLine">
            <Wellcome username={user.name}/>
             <h3 className="textoo">Aqui estão todos os seus projetos na plataforma Strateegia. Selecione o projeto para agendar seus 
pontos de conversação em sua Google Agenda.</h3>
           </div>
           <img className="image1" src="datep.svg" />
           
              </div>
              <Encontros />
      </div>
            
      </div>
        

    
  );
};

export default Strateegia;
