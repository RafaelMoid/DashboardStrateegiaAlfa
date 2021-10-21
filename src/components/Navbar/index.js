import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import { useHistory } from "react-router";
import "./styles.scss";


const Navbar = ({ username }) => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    auth.setApiToken("");
    auth.setIsAuthenticated(!auth.isAuthenticated);
    history.push("/login");
  };

  return (
    <>
      <div className="navbar">
        <div className="logout">
          <h3>Olá, {username}</h3>
          <button onClick={handleLogout}>sair</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
