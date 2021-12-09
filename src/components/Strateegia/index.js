import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById,
  fetchUserProjects, fetchMapStatistics, fetchMapStatisticsHome, fetchMapStatisticsHome2
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

  const handleSelect = () => {
    fetchMapStatisticsHome(auth.apiToken).then((response) => {
      //console.log(user)
      console.log(response);
      setProjectStatistics1(response);
    }
)


fetchMapStatisticsHome2(auth.apiToken).then((response2) => {
  //console.log(user)
  console.log(response2);
  setProjectStatistics2(response2);
}
)
  }
  
  
  
  // function generateOptions(dados, select){
  //   const dadosOptions = projectsData.map( dado => `
  //       <option value="${dado}">${dado}</option>
  //   `).join("")
  //   console.log(dadosOptions)
  // }

  const [user, setUser] = useState({});
  //Aqui está a chamada do valor de id para a função seguinte
  const [projectsData, setProjectsData] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [project, setProject] = useState([]);
  const [projectStatistics1, setProjectStatistics1] = useState("");
  const [projectStatistics2, setProjectStatistics2] = useState("");
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
    //   fetchMapStatisticsHome(auth.apiToken).then((response) => {
    //       //console.log(user)
    //       console.log(response);
    //       setProjectStatistics1(response);
    //     }
    // )});

    // useEffect(() => {
    //   fetchMapStatisticsHome2(auth.apiToken).then((response) => {
    //       //console.log(user)
    //       console.log(response);
    //       setProjectStatistics2(response);
    //     }
    // )});


  const listaProjetosNome=projectsData.map(
    (c,i)=>
      <li className="ulItem">
        <p key={i} className="ulItem" onClick={handleRoute} onMouseEnter={() => localStorage.setItem('id', c.id)}>{c.title}</p>
      </li>    
      )

    //ESTAMOS SEMPRE PASSANDO O ULTIMO VALOR DO OBJETO DE LISTA PARA A REQUISÇÃO DE aAPI

  const listaProjetosDropdown=projectsData.map(
    (c,i)=>
      <>
        <option key={i} onClick={localStorage.setItem( `idStat1` ,c.id)} onMouseEnter={() => localStorage.setItem('idStat1', c.id)}>{c.title}</option>
        <>{console.log(localStorage.getItem( `idStat1`))}</>
      </>
      )
      //
  const listaProjetosDropdown2=projectsData.map(
    (c,i)=>
    <>
      <option key={i} onClick={localStorage.setItem( `idStat2` ,c.id)} onMouseEnter={() => localStorage.setItem('idStat2', c.id)}>{c.title}</option>
      <>{console.log(localStorage.getItem( `idStat2`))}</>
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
                  <option value=''>Selecione</option>
                  {listaProjetosDropdown}
                </select>
                <h3>Jornada 2</h3>
                <select className="dropdown">
                  <option value=''>Selecione</option>
                  {listaProjetosDropdown2}
                </select>
                <div><button className="btnComp" onClick={handleSelect}>Comparar</button></div>
                <div className="txtComp"><a >Comparações avançadas</a></div>
              </div>

              <div className="comp1">
                <div className="horizontalDisplay">
                <h2 className="compTitle">Titulo projeto 1</h2>
                  <div className="element">
                  <img src="group.svg" className="iconComp"/><h3>{projectStatistics1.people_active_count}</h3>
                  </div>
                  <div className="elementP"><p>Pessoas ativas na jornada</p></div>
                  
                  <div className="element">
                  <img src="circledQuestion.svg" className="iconComp"/><h3>15%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas questões</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp"/><h3>85%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas divergências</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp"/><h3>147</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nos debates</p></div>
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
                  <div className="elementP"><p>Engajamento nas questões</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp"/><h3>85%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas divergências</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp"/><h3>147</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nos debates</p></div>
                </div>
              </div>
              
             </div>
            
           </div>
            
         </div>
      
      </div>
    
    
  );
};

export default Strateegia;
