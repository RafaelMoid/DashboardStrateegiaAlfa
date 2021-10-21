import React from 'react';
import Navbar2 from "../Navbarv2";
import { FaBehance,FaLinkedinIn, FaGithub } from "react-icons/fa";
import {devData} from "./devData.js"
import "./styles.css";

function Desenvolvedores() {
    return (
        
        <div className="desenvolvedores">
        <Navbar2 />
        <div className="title">
        <h1>Conheça a equipe que idealizou <br/>e 
        produziu esta plataforma! </h1>
        
        <img className="devImg" src="devsImg.svg" />
        </div>
        <div className="devs">  
        {devData.map((item, index, click) =>{
                  return(
                      <div className="objWrapper">
                      <div className="imgWrapper"><img src={item.foto} /></div>
                      <div key={index} className={item.cName}>
                          <h3>{item.name}</h3>
                          <h3>{item.secondName}</h3>
                          <p>{item.job}</p>
                          <div className="links">
                              <a className="linkWrapper1" href={item.path1} target="_blank">{item.icon1}</a>
                              <a className="linkWrapper2" href={item.path2} target="_blank">{item.icon2}</a>
                          </div>
                        
                      </div>
                      </div>
                  )
              })}
        
            </div>
        
          </div>
            
       
    );
}

export default Desenvolvedores;