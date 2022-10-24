import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { AuthContext } from "../contextElements/auth";

export default function FooterMenu() {

    const { todayProgress } = useContext(AuthContext)

    return (
        <>
            <FooterDiv>
                <Link to={"/habitos"} data-identifier="habit-page-action">
                    <HabitHistLink>Hábitos</HabitHistLink>
                </Link>
                <Link to={"/historico"} data-identifier="historic-page-action">
                    <HabitHistLink>Histórico</HabitHistLink>
                </Link>
            </FooterDiv>

            <TodayButton>
                <Link to={"/hoje"}>
                    <CircularProgressbar
                        value={todayProgress}
                        text={"Hoje"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52b6ff",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </TodayButton>

        </>
    )
}


const FooterDiv = styled.div`
    width: 100%;
    height: 70px;

    display:flex;
    align-items: center;
    justify-content:space-between;

    background-color:#ffffff;
    margin-top:50px;
    padding-left:36px;
    padding-right:36px;
    box-sizing:border-box;

    position:fixed;
    left:0px;
    bottom:0px;
    z-index:2;

    a{
        text-decoration:none;
    }
`

const HabitHistLink = styled.button`
    height:50px;
    width:80px;

    display:flex;
    align-items:center;
    justify-content:center;

    background-color:#ffffff;
    border: 1px solid #ffffff;

    font-family: 'Lexend Deca', sans-serif;
    color:#52b6ff;
    font-size: 16px;

    :link{
        text-decoration: none;
        }
`


const TodayButton = styled.div`
        font-family: 'Lexend Deca', sans-serif;
        text-anchor:middle;
        font-size:18px;

        display:flex;
        margin-bottom: 2px;
        justify-content:center;
        align-items:center;
        box-sizing:border-box;

        width:86px;
        height:86px;

        position:fixed;
        bottom:10px;
        left:calc(50% - 43px); 
        z-index:3;

        border-radius: 50%;
        overflow:hidden;
        color: #ffffff;
        border: 1px solid #52b6ff;
`