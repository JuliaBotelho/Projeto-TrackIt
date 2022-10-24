import styled from "styled-components";
import { useState, useContext } from "react";

import { AuthContext } from "../contextElements/auth";

export default function TopBar(){
    const{userData} = useContext(AuthContext)

    function teste(){
        console.log(userData)
    }

    return(
        <TopLayout>
            <h1 onClick={teste}>TrackIt</h1>
            <img data-identifier="avatar" src={userData.image}/>
        </TopLayout>
    )
}

const TopLayout = styled.div`
    width:100%;
    height: 70px;
    background-color: #126ba5;
    position:fixed;
    left:0px;
    top:0px;
    box-shadow: 0px 4px 4px rgb(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:19px;
    padding-right:19px;
    box-sizing:border-box;
    z-index:2;
    img{
        width:52px;
        height:52px;
        border-radius: 50%;
    }
    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        color:#ffffff;
        background-color: #126ba5;

    }
`