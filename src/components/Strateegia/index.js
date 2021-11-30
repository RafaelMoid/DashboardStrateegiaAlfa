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
import {Link} from "react-router-dom";
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
  const [projectsData, setProjectsData] = useState([]);
  //Vai ser necessario quebrar em aprtes menores
  const [projectsProjectsData, setProjectsProjectsData] = useState("");
  // Dados de usuarios em projetos \/\/\/\/
  const [membersData, setMembersData] = useState("");
  // const [projects, setProjects] = useState([]);
  const auth = useContext(AuthContext);

  
  const listaProjetosNome=projectsData.map(
    (c,i)=>
      <Link key={i} className="ulItem" to={"/Projetos"} projectId={projectsData.id} projectTitle={projectsData.title}>{c.title}</Link>
      )

  
//
     
  const relatorios=[['Relatorio 1', 'conclusão','escola figital'],['Relatorio parcial', 'parcial','banco figital'],['MVS', 'parcial','habilitação figital'],['Relatorio final', 'conclusão','empresa figital']];
  

  useEffect(() => {
    fetchUserData(auth.apiToken).then((response) => {
      //console.log(response);
      setUser(response);

      fetchUserProjects(auth.apiToken ).then((data) => {
        //console.log(data)
        if (data && response) {
          const [myJourneys] = data.filter((journey) => {
            return journey.lab.owner_name === response.name
            
            }
          )
          setProjectsData(...[myJourneys.projects])
        }}) 
    });
  }, [auth.apiToken]);


  //Aqui estão os dados do mapa em si, é daqui que se resgata os kits (linha 51)
  useEffect(() => {
    fetchUserProjects(auth.apiToken ).then((data) => {
      setProjectsData(data);
    });
    // fetchUserProjects(auth.apiToken).then((data) => {
    //   setProjects(data);
    // });
  }, [auth.apiToken]);

  //Aqui estão os dados dos membros dos projetos
  useEffect(() => {
    fetchProjectsMembers(auth.apiToken ).then((data) => {
      setMembersData(data);
    });
  }, [auth.apiToken]);


  //Retorno da linha 62 (aqui estão os pontos de encontro)
  useEffect(() => {
    fetchEncounterByMaps(auth.apiToken).then((data) => {
      //console.log(data);
      setMapsData(data);
    });
  }, [auth.apiToken]);



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
