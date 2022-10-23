import styled from "styled-components";
import logo from "../images/logo.png"
import { LogoMain } from "./LoginPage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
    const [formregister, setFormregister] = useState({email: "", name: "", image: "", password: ""})
    const [dataRegreceived, setDataRegreceived] = useState(undefined)
    const navigate = useNavigate()

    function handleRegisterForm(e){
        const {name,value} = e.target
        setFormregister({...formregister, [name]:value})
    }


    function sendRegisterData(e){
        e.preventDefault()

        const body = formregister
        
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",body)
            .then(res => {
                navigate("/")
                setDataRegreceived(res.data)
            })
            .catch(err => alert("Algo deu errado! Por favor tente novamente"))
        
    }

    return (
        <>
            <LogoMain><img src={logo} /></LogoMain>
            <form onSubmit={sendRegisterData} >
                <FormRegister>
                    <input
                        name="email"
                        value={formregister.email}
                        onChange={handleRegisterForm}
                        type="email"
                        placeholder="email"
                    />
                    <input
                        name="password"
                        value={formregister.password}
                        onChange={handleRegisterForm}
                        type="password"
                        placeholder="senha"
                    />
                    <input
                        name="name"
                        value={formregister.name}
                        onChange={handleRegisterForm}
                        type="text"
                        placeholder="nome"
                    />
                    <input
                        name="image"
                        value={formregister.image}
                        onChange={handleRegisterForm}
                        type="url"
                        placeholder="foto"
                    />
                    <button type="submit">Cadastrar</button>
                </FormRegister>
            </form>
            <Link to={"/"}>
                <LoginLink>Já tem uma conta? Faça login!</LoginLink>
            </Link>
        </>

    )
}

const FormRegister = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 301px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca', sans-serif;
        color:#666666;
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

const LoginLink = styled.h3`
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