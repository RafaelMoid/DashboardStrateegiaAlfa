import {
  useContext,
  useState
} from "react";
import {
  Box,
  Image,
  FormErrorMessage,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  useForm
} from "react-hook-form";
import {
  useHistory
} from "react-router-dom";
import {
  AuthContext
} from "../providers/auth";
import {
  authenticate
} from "../../services/requestFunctions";



import "./styles.scss";

const Login = () => {
    const [loginErrors, setLoginErrors] = useState("");
    const auth = useContext(AuthContext);
    const history = useHistory();
    const {
      handleSubmit,
      register,
      formState: {
        errors,
        isSubmitting
      },
    } = useForm();

    const handleLogin = (values) => {
      authenticate(values)
        .then((response) => {
          if (response.data) {
            auth.setApiToken(response.data.access_token);
            localStorage.setItem("token", response.data.access_token);
            auth.setIsAuthenticated(!auth.isAuthenticated);
            history.push("/");
          }
        })
        .catch((err) => {
          if (err.message === "Request failed with status code 403") {
            setLoginErrors("Acesso negado: email ou senha inválidos!");
          } else {
            setLoginErrors(err.message);
          }
        });
    };

    const handleLogout = () => {
      auth.setApiToken("");
      auth.setIsAuthenticated(!auth.isAuthenticated);
    };

    return ( <>
      {
        auth.isAuthenticated && (<div><h3> Bem vindo! </h3> <button onClick = {handleLogout}> Logout </button> </div>)
      } {
        !auth.isAuthenticated && ( <div className = "login-container">
            <div className = "informative-wrapper">
            <img src = "logo.png" className = "imgLogo" />
            <img src = "iconesBG.png" className = "imgIcons"/>
            </div> 
            <div className = "login-wrapper">

            <h2 className="loginH3"> Os dados das suas jornadas <br/> em strateegia em um só lugar </h2> <p> Insira seus dados de login do Strateegia </p> 
            <form className = "login-form" onSubmit = {handleSubmit(handleLogin)}>
            <FormControl isInvalid = {errors.email} mt = "10">
            <Input id = "email"
            type = "email"
            placeholder = "email" {
              ...register("email", {
                required: "campo obrigatório *",
              })
            }/> 
            <FormErrorMessage color = "#dc0362" > {errors.email && errors.email.message} </FormErrorMessage> 
            </FormControl> 
            <FormControl isInvalid = {errors.password}>
            <Input id = "password" type = "password" placeholder = "password" {...register("password", 
            {required: "campo obrigatório *",})}/> 
            <FormErrorMessage color = "#dc0362" > {errors.password && errors.password.message} </FormErrorMessage>
            </FormControl> {loginErrors && < Box color = "#dc0362" > {loginErrors} 
            </Box>} 
            <Button mt = {4} isLoading = {isSubmitting} type = "submit" >
              entrar 
            </Button>
            <div className="cadastre-se-G">
                <span>ainda não tem uma conta em strateegia?</span>
                <a className="cdLink" href="https://app.strateegia.digital/signup?lang=PT_BR&_gl=1*1cqmkag*_ga*ODU4NjQ1NzE2LjE2MzAwOTM4NDE.*_ga_RQG3SQYGTV*MTY0MzIxNTAyNS4yOC4wLjE2NDMyMTUwMjUuMA..">
                    cadastre-se
                </a>
            </div>
            
            </form> 
            </div> 
            <div className="cadastre-se">
                <span>ainda não tem uma conta em strateegia?</span>
                <a className="cdLink" href="https://app.strateegia.digital/signup?lang=PT_BR&_gl=1*1cqmkag*_ga*ODU4NjQ1NzE2LjE2MzAwOTM4NDE.*_ga_RQG3SQYGTV*MTY0MzIxNTAyNS4yOC4wLjE2NDMyMTUwMjUuMA..">
                    cadastre-se
                </a>
            </div>
            <img src="iconesBG.png" className="imgIconsMobile"/>
            </div >
            )
          } 
          </>
      );
    };

    export default Login;