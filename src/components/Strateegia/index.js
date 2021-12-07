import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById,
  fetchUserProjects, fetchMapStatistics
} from "../../services/requestFunctions";
import Navbar from "../Navbar";
import Kits from "../Kits";
import Button from "../pontosDeEncontro";
import Wellcome from "../Wellcome";
import Navbar2 from "../Navbarv2";
import {Link, useHistory} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Encontros from "../Kits";
import BarChart from '../Charts/Chart.js';
import {BsThreeDots} from 'react-icons/bs';


import "./styles.scss";

const Strateegia = () => {

  const history = useHistory();
  
  const handleRoute = () =>{ 
    history.push("/Projetos");

  }

  

  const [user, setUser] = useState({});
  //Aqui está a chamada do valor de id para a função seguinte
  const [projectsData, setProjectsData] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState([]);
  const [projectStatistics, setProjectStatistics] = useState([]);
  const auth = useContext(AuthContext);


  useEffect(() => {
    fetchUserData(auth.apiToken).then((response) => {
      //console.log(user)
      //console.log(response);
      setUser(response);

      fetchUserProjects(auth.apiToken ).then((data) => {
        //console.log(data)
        if (data && response) {
          const [myJourneys] = data.filter((journey) => {
            return journey.lab.id === response.id
            
            }
          )
          setProjectsData(...[myJourneys.projects])
        }}) 
    });
  }, [auth.apiToken]);

  // useEffect(() => {
  //       fetchMapById(auth.apiToken).then((response) => {
  //         //console.log(user)
  //         console.log(response);
  //         setProject(response);
  //       }
  //   )});

  //   useEffect(() => {
  //       fetchMapStatistics(auth.apiToken).then((response) => {
  //         //console.log(user)
  //         console.log(response);
  //         setProjectStatistics(response);
  //       }
  //   )});


  const listaProjetosNome=projectsData.map(
    (c,i)=>
      <li className="ulItem">
        <p key={i} className="ulItem" onClick={handleRoute} onMouseEnter={() => localStorage.setItem('id', c.id)}>{c.title}</p>
      </li>    
      )

  const listaProjetosDropdown=projectsData.map(
    (c,i)=>
      <>
        <>
          {localStorage.setItem('selection1', c.id)}
          {localStorage.setItem('selection1Title', c.title)}
        </>
        <option key={i} value="Project 1" >{c.title}</option>
      </>
      )
  const listaProjetosDropdown2=projectsData.map(
    (c,i)=>
    <>
      <>
       {localStorage.setItem('selection2', c.id)}
       {localStorage.setItem('selection2Title', c.title)}
      </>
      <option key={i} value="Project 1" >{c.title}</option>
    </>
      )    

  
  

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
                  {listaProjetosDropdown}
                </select>
                <h3>Jornada 2</h3>
                <select className="dropdown">
                  {listaProjetosDropdown2}
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
