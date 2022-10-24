
import styled from "styled-components";
import logo from "../images/logo.png"
import { useState, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

import { AuthContext } from "../contextElements/auth";

export default function LoginPage() {
    const[formLogin, setFormLogin] = useState({ email: "", password: ""})
    const[buttonLoginClicked, setButtonLoginClicked] = useState(false)
    const[dataLogreceived, setDataLogreceived] = useState(false)
    const navigate = useNavigate()
    const {setUserData} = useContext(AuthContext)

    function handleLoginForm(e){
        const {name,value} = e.target
        setFormLogin({...formLogin, [name]:value})
    }


    function buttonWasClicked (){
        setButtonLoginClicked(true)
    }
 
    function sendLoginData(e){

        const body = formLogin
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body)
            .then(res => {
                navigate("/hoje") 
                setDataLogreceived(true)
                setUserData(res.data)
            })
            .catch(err => {
                alert("Algo deu errado! Por favor tente novamente")
                setButtonLoginClicked(false)
            })
    }

    function onSubmitLoginActions(e){
        e.preventDefault()
        sendLoginData(e)
        buttonWasClicked()
    }

    return (
        <>
            <LogoMain><img src={logo} /></LogoMain>
            <FormLogin  onSubmit={onSubmitLoginActions} >
                <input
                    name="email"
                    type="email"
                    value={formLogin.email}
                    onChange={handleLoginForm}
                    placeholder="email"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={formLogin.password}
                    onChange={handleLoginForm}
                    placeholder="senha"
                    required
                />
                {buttonLoginClicked? (
                        <>{!dataLogreceived && <button type="submit" disabled><ThreeDots color="#ffffff" height={45} width={70}/></button>}</>
                    ):(
                        <button type="submit">Entrar</button>
                    )}
            </FormLogin>
            <Link to= {"/cadastro"}>
                <RegisterLink>Não tem uma conta? Cadastre-se</RegisterLink>
            </Link>
        </>
    )
}


export const LogoMain = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 69px;
    margin-bottom: 34px;
    img{
        width:156px;
    }
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 301px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        font-size: 21px;
        margin-bottom: 7px;
        padding-left:7px;
        ::placeholder{
            color: #d5d5d5;
        } 
        
    }
    button{
        display:flex;
        justify-content:center;
        align-items: center;
        width: 312px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #52b6ff;
        background-color: #52b6ff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        color: #ffffff;
        :hover{
            background-color: #74c4ff;
        }
    }
`

const RegisterLink = styled.h3`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    font-family: 'Lexend Deca', sans-serif;
    color:#52b6ff;
    text-decoration-line: underline;
    font-size: 17px;
    :hover{
            color: #74c4ff;
        }
`

