import React,{ useContext, useState } from "react";
import { AuthContext } from "../providers/auth";
import { useHistory } from "react-router";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import {Link} from "react-router-dom";
import "./style.css";
import {IconContext} from 'react-icons';


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
    <IconContext.Provider value={{color:'white'}}>
      <div className="navbar">
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        </div>
       
      
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
              <li className="navbar-toogle">
                  <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                  </Link>
              </li>
              
              {SidebarData.map((item, index, click) =>{
                  return(
                      <li key={index} className={item.cName}>
                          <Link to={item.path}>
                           {item.icon}
                           <span onClick={click} >{item.title}</span> 
                          </Link>
                      </li>
                  )
              })}
            
              
          </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar2;