import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterMenu from "../components/FooterMenu";
import GlobalStyle2 from "../GlobalStyle2"
import TodayCard from "../components/CardToday";
import { useEffect, useState, useContext } from "react";

import { AuthContext } from "../contextElements/auth";
import axios from "axios";
import dayjs from "dayjs";

export default function TodayPage() {
    const { userData, settodayProgress, todayProgress } = useContext(AuthContext)
    const [habitsFromToday, sethabitsFromToday] = useState([])
    const [todayTotal, setTodayTotal] = useState(0)
    const [todayDone, setTodayDone] = useState([])
    const [marked, setmarked] = useState(false)
    const [unmarked, setUnmarked] = useState(false)
    const config = { headers: { "Authorization": `Bearer ${userData.token}` } }

    require('dayjs/locale/pt-br')

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(res => {
                sethabitsFromToday(res.data)
                setTodayTotal(res.data.length)
                setTodayDone(res.data.filter((h) => (h.done)))
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }, [marked, unmarked])

    settodayProgress(Math.floor((todayDone.length / todayTotal) * 100))

    function getColorProgress(todayProgress) {
        if (todayProgress <= 0||todayTotal ===0) {
            return "#bababa"
        } else if (todayProgress > 0) {
            return "#8fc549"
        }
    }

    /*     Nenhum hábito concluído ainda
     */
    return (
        <>
            <GlobalStyle2 />
            <TopBar />
            <DateTitles color={getColorProgress(todayProgress)}>
                <h2 data-identifier="today-infos" >{dayjs().locale("pt-br").format("dddd, DD/MM")}</h2>
                <>{todayTotal ===0 || todayProgress <= 0 ? (
                    <h3>Nenhum hábito concluído ainda</h3>
                ) : (
                    <h3>{todayProgress}% dos hábitos concluídos</h3>
                )}</>
            </DateTitles>
            <TodayLayout>
                {habitsFromToday.map((habitToday, index) => <TodayCard key={index} habitToday={habitToday} setmarked={setmarked} marked={marked} setUnmarked={setUnmarked} unmarked={unmarked} setTodayDone={setTodayDone} todayDone={todayDone} />)}
            </TodayLayout>
            <FooterMenu />
        </>
    )
}

const TodayLayout = styled.div`
    margin-bottom:105px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const DateTitles = styled.div`
    margin-top:95px;
    padding-left:19px;
    padding-right:19px;

    height:85px;
    width:375px;
    box-sizing:border-box;

    font-family: 'Lexend Deca', sans-serif;

    h2{
        color:#126ba5;
        font-size:23px;
        margin-bottom:7px;
    }
    
    h3{
        font-size: 18px;
        color:${props => props.color};
    }
`


