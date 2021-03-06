import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/providers/auth";
import Login from "../components/Login";
import Strateegia from "../components/Strateegia";
import Desenvolvedores from "../components/Desenvolvedores";
import Projetos from "../components/Projetos";
import Comparacao from "../components/Comparacao";
import TesteComp from "../components/TesteComp/TesteComp.jsx";




const Routes = () => {
  const auth = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {!auth.isAuthenticated ? <Redirect to="/login" /> : <Strateegia />}
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/Comparacao"  exact>
          <Comparacao />
        </Route>
        <Route path="/Projetos"  exact>
          <Projetos />
        </Route>
        <Route path="/TesteComp"  exact>
          <TesteComp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
