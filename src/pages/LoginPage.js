
import styled from "styled-components";
import logo from "../images/logo.png"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function LoginPage() {
    const[formLogin, setFormLogin] = useState({ email: "", password: ""})

    function handleLoginForm(e){
        const {name,value} = e.target
        setFormregister({...formregister, [name]:value})
    }


    function sendLoginData(){}

    return (
        <>
            <LogoMain><img src={logo} /></LogoMain>
            <FormLogin /* onSubmit={sendLoginData} */>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="senha"
                />
                <button type="submit">Entrar</button>
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

