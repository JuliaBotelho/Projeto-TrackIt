import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FooterMenu() {
    return (
        <>
            <FooterDiv>
                <Link to={"/habitos"}>
                    <h3>Hábitos</h3>
                </Link>
                <Link to={"/historico"}>
                    <h3>Histórico</h3>
                </Link>
            </FooterDiv>
            <Link to={"/hoje"}>
                <TodayButton>Hoje</TodayButton>
            </Link>
        </>
    )
}


const FooterDiv = styled.div`
    background-color:#ffffff;
    width: 100%;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding-left:36px;
    padding-right:36px;
    box-sizing:border-box;
    position:fixed;
    left:0px;
    bottom:0px;
    z-index:2;
    h3{
        font-family: 'Lexend Deca', sans-serif;
        color:#52b6ff;
        font-size: 16px;
        background-color: #ffffff;
        text-decoration-line: none;
        :hover{
            color: #74c4ff;
        }
    }
`

const TodayButton = styled.button`
        display:flex;
        margin-bottom: 2px;
        justify-content:center;
        align-items:center;
        box-sizing:border-box;
        width:81px;
        height:81px;
        position:fixed;
        bottom:10px;
        left:40%;
        z-index:3;
        border-radius: 50%;
        background-color:#52b6ff;
        color: #ffffff;
        border: 1px solid #52b6ff;
        font-size:18px;
        :hover{
            background-color: #74c4ff;
            }

`