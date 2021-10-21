import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import { useHistory } from "react-router";
import "./styles.css";


const Wellcome = ({ username }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    auth.setApiToken("");
    auth.setIsAuthenticated(!auth.isAuthenticated);
    history.push("/login");
  };

  return (
    <>
      <div className="wellcome">
          <h3 className="ola">Olá,</h3><h3 className="nome">{username}</h3><h3 className="ola">!</h3>
          <hr className="linha"/>
        </div>
        
    </>
  );
};

export default Wellcome;