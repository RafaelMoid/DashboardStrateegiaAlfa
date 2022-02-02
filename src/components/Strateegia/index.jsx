import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/auth";
import {
  fetchUserData,fetchUserEncouters,fetchMapById, fetchEncounterByMaps, fetchUserGetProjectById,
  fetchUserProjects, fetchMapStatistics, fetchMapStatisticsHome, fetchMapStatisticsHome2, getSummaryProjectsByUser
} from "../../services/requestFunctions";
import Navbar from "../Navbar";
import Kits from "../Kits";
import Button from "../pontosDeEncontro";
import Wellcome from "../Wellcome";
import Navbar2 from "../Navbarv2";
import {Link, useHistory} from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Encontros from "../Kits";
import BarChart from '../Charts/Chart.js';
import { IoIosArrowForward } from "react-icons/io";


import "./styles.scss";

const Strateegia = () => {

  //Variaveis para dropdown

  const history = useHistory();
//   var largura = window.screen.width;
//   var caixa3 = if (largura ) {
//     instrução1
//  } else {
//     instrução2
//  }
  
  const handleRoute = () =>{ 
    history.push("/Projetos");
  }

  const handleSelect = () => {
    fetchMapStatisticsHome(auth.apiToken , id1).then((response) => {
      //console.log(user)
      // console.log(response);
      setProjectStatistics1(response);
    }
)


fetchMapStatisticsHome(auth.apiToken, id2).then((response2) => {
  //console.log(user)
  // console.log(response2);
  setProjectStatistics2(response2);
}
)

  }
  

  const [user, setUser] = useState({});
  //Aqui está a chamada do valor de id para a função seguinte
  const [projectsData, setProjectsData] = useState([]);
  const [projectsData2, setProjectsData2] = useState([]);
  const [projectsDataSummary1, setProjectsDataSummary1] = useState({});
  const [projectsDataSummary2, setProjectsDataSummary2] = useState({});
  const [projectsDataSummary3, setProjectsDataSummary3] = useState({});
  const [projectId, setProjectId] = useState("");
  const [projects, setProjects] = useState([]);
  const [projectStatistics1, setProjectStatistics1] = useState("");
  const [projectStatistics2, setProjectStatistics2] = useState("");
  const [id0, setId0] = useState("");
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");

  //console.log( id1 , id2);
  // const [result, setResult] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    fetchUserData(auth.apiToken).then((response) => {
      //console.log(user)
      // console.log('response', response);
      setUser(response);

      fetchUserProjects(auth.apiToken ).then((data) => {
        // console.log("fetchUserProjects data1" , data)
        const journeys = data.map(dt => (
          dt.projects
        ))
        
        setProjectsData(...[journeys.flat()])
        console.log('Retorno de fetchUserProjects' , data)    
       }) 
        // fetchUserProjects(auth.apiToken ).then((data2) => {
        //   console.log("fetchUserProjects data2" , data2)
        //   let newArray = [];
        //   data2.forEach((journey, i) => {
        //     newArray.push(journey.projects)
        //     console.log( 'iteração numero: ' + i , newArray)
        //   })

        //   if (data2 && response) {
        //     const [myJourneys] = data2.filter((journey) => {
        //       return journey.lab.owner_name !== response.name 
              
        //       }
        //     )
        //     setProjectsData2(...[myJourneys.projects])
        //     console.log('Retorno de fetchUserProjects2' , myJourneys.projects)
        //   }}) 
    });
  }, [auth.apiToken]);

  // useEffect(() => {
  //   getSummaryProjectsByUser().then((response) => {
  //     console.log(response);
  //     if (response) {
  //       const [adminProject] = response.content.filter((obj) => {
  //         return obj.my_member_info.project_roles[0] === 'ADMIN'
          
  //         }
  //       )
  //       setProjectsDataSummary({...adminProject.my_member_info.project_roles})
  //       console.log('adminProject' , adminProject.my_member_info.project_roles)
  //     }
  //   })
  // }, []);

  useEffect(() => {
    getSummaryProjectsByUser().then((response) => {
      //console.log(response);
      if (response) {
        const adminProject = response.content  
        // console.log(response)
        // console.log(adminProject)
         
        let box1 = adminProject.filter((obj) => {
          return obj.my_member_info.project_roles[0] === 'ADMIN'
          
        })
           
        let box2 = adminProject.filter((obj) => {
          return obj.my_member_info.project_roles[0] === 'MENTOR'
          
        })

        let box3 = adminProject.filter((obj) => {
          return obj.my_member_info.project_roles[0] === 'INNOVATOR'
        })

      setProjectsDataSummary1(box1)
      setProjectsDataSummary2(box2)
      setProjectsDataSummary3(box3)
      }     
        
      }
    )
  }, []);



  const listaProjetosNome=projectsData.map(
    (c)=>
      <li key={c.id} className="ulItem">
        <p className="ulItem" onClick={handleRoute} onMouseEnter={() => 
          localStorage.setItem('id', c.id)}>{c.title} <IoIosArrowForward/></p>
      </li>    
      )
  

    //ESTAMOS SEMPRE PASSANDO O ULTIMO VALOR DO OBJETO DE LISTA PARA A REQUISÇÃO DE aAPI

  const listaProjetosDropdown=projectsData.map(
    (c)=>
        <option key={c.id} value={c.id} >{c.title}</option>
      )
      //
  const listaProjetosDropdown2=projectsData.map(
    (c)=>
      <option key={c.id} value={c.id} >{c.title}</option>
      )    

  const listaProjetosDropdown3=projectsData2.map(
    (c)=>
        <option key={c.id} value={c.id} >{c.title}</option>
      )
      //
  const listaProjetosDropdown4=projectsData2.map(
    (c)=>
      <option key={c.id} value={c.id} >{c.title}</option>
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
              <div className="title1"><h1>{projectsDataSummary1.length}</h1></div>
              <div className="subtitle1"><p>Jornadas que administro</p></div>
            </div>
          </article>
          <article className="box1">
            <div className="textBox2">
              <div className="title2"><h1>{projectsDataSummary2.length}</h1></div>
              <div className="subtitle2"><p>Jornadas que sou mentor</p></div>
            </div>
          </article>
          <article className="box1">
            <div className="textBox3">
              <div className="title3"><h1>{projectsDataSummary3.length}</h1></div>
              <div className="subtitle3"><p>{('Jornadas em que participo')}</p></div>
            </div>
          </article>
      </div>

    
       
         <div className="container2">


         <div className="contentSection">
                 <div className="contentTitle"><h3>Páginas das jornadas</h3></div>
              
                <ul className="listaProjetos"  onClick={e => setId0(e.target.value)}> 
                 {listaProjetosNome}
                </ul>
              
            </div>

           <div className="comparacao">
           
           
             <div className="containerLeft">
              <div className="comp0">
                <h3>Comparação rápida  de índices</h3>
                <p className="pTextTela2">Selecione duas jornadas para comparar seus índices  </p>
                <h3 className="journey">Jornada 1</h3>
                <select className="dropdown" onChange={e => setId1(e.target.value)}>
                  <option>Selecione</option>
                  {listaProjetosDropdown}
                  {listaProjetosDropdown3}
                </select>
                <h3 className="journey">Jornada 2</h3>
                <select className="dropdown" onChange={e => setId2(e.target.value)}>
                  <option>Selecione</option>
                  {listaProjetosDropdown2}
                  {listaProjetosDropdown4}
                </select>
                <div><button className="btnComp" onClick={handleSelect}>Comparar</button></div>
              </div>
            
              <div className="comp1">
                <div className="horizontalDisplay">
                <h2 className="compTitle">{projectStatistics1.title || "Selecione um projeto"}</h2>
                  <div className="element">
                  <img src="group.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics1.people_active_count || "0"}</h3>
                  </div>
                  <div className="elementPA"><p>Pessoas ativas na jornada</p></div>
                  
                  <div className="element">
                    
                  <img src="circledQuestion.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{ projectStatistics1.parent_comments_count?
                  parseFloat(
                    projectStatistics1.parent_comments_count
                    /
                    (projectStatistics1.question_count*projectStatistics1.people_active_count)*100)
                    .toFixed(2) :"0"}%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas questões</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{ projectStatistics1.parent_comments_count?
                  parseFloat( 
                      (projectStatistics1.parent_comments_count
                      /
                      (projectStatistics1.question_count*projectStatistics1.people_active_count))
                    +
                    (((projectStatistics1.agreements_comments_count+projectStatistics1.reply_comments_count)
                    /
                    ((projectStatistics1.parent_comments_count*projectStatistics1.people_active_count)/2))/2)*100).toFixed(2) :"0"}%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas divergências</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics1.parent_comments_count?
                  parseFloat(
                    (projectStatistics1.agreements_comments_count+projectStatistics1.reply_comments_count)
                    /
                    ((projectStatistics1.parent_comments_count*projectStatistics1.people_active_count)/2)*100).toFixed(2):"0"
                  }%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nos debates</p></div>
                </div>
              </div>
              
              <div className="comp1">
                <div className="horizontalDisplay">
                <h2 className="compTitle">{projectStatistics2.title || "Selecione um projeto"}</h2>
                  <div className="element">
                  <img src="group.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics2.people_active_count || "0"}</h3>
                  </div>
                  <div className="elementPA"><p>Pessoas ativas na jornada</p></div>
                  
                  <div className="element">
                  <img src="circledQuestion.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics2.parent_comments_count?
                  parseFloat(
                    projectStatistics2.parent_comments_count
                    /
                    (projectStatistics2.question_count*projectStatistics2.people_active_count)*100)
                    .toFixed(2) :"0"}%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas questões</p></div>
                  <div className="element">
                  <img src="squareChat.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics2.parent_comments_count?
                  parseFloat(
                      (projectStatistics2.parent_comments_count
                      /
                      (projectStatistics2.question_count*projectStatistics2.people_active_count))
                    +
                    (((projectStatistics2.agreements_comments_count+projectStatistics2.reply_comments_count)
                    /
                    ((projectStatistics2.parent_comments_count*projectStatistics2.people_active_count)/2))/2)*100).toFixed(2):"0"}%</h3>
                  </div>
                  <div className="elementP"><p>Engajamento nas divergências</p></div>
                  <div className="element">
                  <img src="chatBubbles.svg" className="iconComp" alt="icon"/><h3 className="h3Comp">{projectStatistics2.parent_comments_count?
                  parseFloat(
                    (projectStatistics2.agreements_comments_count+projectStatistics2.reply_comments_count)
                    /
                    ((projectStatistics2.parent_comments_count*projectStatistics2.people_active_count)/2)*100).toFixed(2):"0"
                  }%</h3>
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
