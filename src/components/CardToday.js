import dayjs from "dayjs";
import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";

import { AuthContext } from "../contextElements/auth";

export default function TodayCard({ habitToday, setmarked, setUnmarked, marked, unmarked, setTodayDone, todayDone }) {

    const { userData } = useContext(AuthContext)
    const config = { headers: { "Authorization": `Bearer ${userData.token}` } }

    function getColor(habitToday) {
        switch (habitToday.done) {
            case true: return "#8fc549"
            case false: return "#bcbcbc"
            default: return "#ebebeb"
        }
    }

     function getColorRecord(habitToday){
        if(habitToday.currentSequence=== habitToday.highestSequence){
            return "#8fc549"
        }else {
            return "#bcbcbc"
        }
     } 

    function CheckOrUncheck(habitToday) {
        if (!habitToday.done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitToday.id}/check`, {}, config)
                .then(res => {
                    setmarked(!marked)
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        } else if (habitToday.done) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitToday.id}/uncheck`, {}, config)
                .then(res => {
                    setUnmarked(!unmarked)
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
        }
    }

    return (
        <TodayCardLayout color={getColor(habitToday)}>
            <TodayTittles color={getColor(habitToday)}>
                <h2>{habitToday.name}</h2>
                <h3>Sequência atual: <span>{habitToday.currentSequence}</span></h3>
                <h3>Seu recorde:<Record color={getColorRecord(habitToday)}>{habitToday.highestSequence}</Record></h3>
            </TodayTittles>
            <ion-icon data-identifier="done-habit-btn" name="checkbox" onClick={() => CheckOrUncheck(habitToday)}></ion-icon>
        </TodayCardLayout>
    )
}

const TodayCardLayout = styled.div`
    width: 338px;
    height: 94px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-bottom:10px;
    padding: 14px;
    box-sizing:border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ion-icon{
        color:${props => props.color};
        background-color:#ffffff;
        font-size: 68px;
    }
`

const TodayTittles = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    background-color:#ffffff;
    h2{
        color:#666666;
        font-size:20px;
        margin-bottom: 8px;
        background-color:#ffffff;
    }
    h3{
        color:#666666;
        font-size:13px;
        margin-bottom: 3px;
        background-color:#ffffff;
    }
    span{
        color:${props => props.color};
        font-size:13px;
        margin-bottom: 3px;
        background-color:#ffffff;
    }
`
const Record = styled.span`
    color:${props => props.color};
    font-size:13px;
    margin-bottom: 3px;
    background-color:#ffffff;
`