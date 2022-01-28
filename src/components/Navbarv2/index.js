import React,{ useContext, useState } from "react";
import { AuthContext } from "../providers/auth";
import { useHistory } from "react-router";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import {Link} from "react-router-dom";
import "./style.css";
import {IconContext} from 'react-icons';
import * as FiIcons from "react-icons/fi";
import {
  FiHexagon
} from "react-icons/fi";


const Navbar2 = ({ username }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const [sidebar,setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    auth.setApiToken("");
    auth.setIsAuthenticated(!auth.isAuthenticated);
    history.push("/login");
  };

  return (
    <>

    <div className="wellcomeNav">
      
    </div>

    <IconContext.Provider value={{color:'white'}}>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars size = {25} onClick={showSidebar}/>
        </Link>
        </div>
       
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          
          <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toogle">
                  <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
              </li>
              
            
              {SidebarData.map((item, index) =>{
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                           {item.icon}
                           <span>{item.title}</span> 
                          </Link>
                      </li>
                  )
              })}
              <li key={3} className='nav-text' onClick={handleLogout}>
                  <Link to={'/'}>
                    <FiIcons.FiLogOut/>
                    <span>Fazer logout</span>
                  </Link>
              </li>
              <li key= {4} className='hexa'>
                <Link to=''>
                  <h3>Inicio</h3>
                  <FiHexagon size = {35}/>
                </Link>
              </li>
              
          </ul>
      </nav>
      </IconContext.Provider>
      
    </>
  );
};

export default Navbar2;