import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";

import { AuthContext } from "../contextElements/auth";


export default function CardHabitCreated({ habit }) {
    const days = [{ day: "D", id: 1 },
    { day: "S", id: 2 },
    { day: "T", id: 3 },
    { day: "Q", id: 4 },
    { day: "Q", id: 5 },
    { day: "S", id: 6 },
    { day: "S", id: 7 }]

    const { userData } = useContext(AuthContext)
    const config = { headers: { "Authorization": `Bearer ${userData.token}` } }



    function deleteHabit() {
        if (window.confirm("Deseja mesmo deletar esse hábito?") === true) {
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config)
                .then(res => {
                    alert("habito deletado")
                })
                .catch(err => {
                    alert("Algo deu errado! Por favor tente novamente")
                })
        }
    }

    return (
        <CreatedCardLayout>
            <CardTop>
                <h2>{habit.name}</h2>
                <ion-icon name="trash-outline" onClick={deleteHabit}></ion-icon>
            </CardTop>
            <WeekDayButtons>
                {days.map((day, index) => <WeekDay key={index} day={day} days={habit.days} />)}
            </WeekDayButtons>
        </CreatedCardLayout>
    )
}

function WeekDay({ day, days }) {
    return (
        <>
            {!days.includes(day.id) ? (
                <ButtonDayNotSelected >{day.day}</ButtonDayNotSelected>
            ) : (
                <ButtonDaySelected >{day.day}</ButtonDaySelected>
            )}
        </>
    )
}
const CreatedCardLayout = styled.div`
    margin-bottom:10px;
    width:340px;
    height:91px;
    padding:16px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    font-family: 'Lexend Deca', sans-serif;
    background-color:#ffffff;
    box-sizing:border-box;
    justify-content:center;
    border-radius:5px;
`

const WeekDayButtons = styled.div`
    background-color: #ffffff;
    width:310px;
    height:36px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
`
const ButtonDaySelected = styled.button`
    width: 30px;
    height:30px;
    background-color: #d5d5d5;
    border: 1px solid #d5d5d5;
    color: #ffffff;
    margin-right: 5px;
    font-size: 20px;
    border-radius: 5px;
`

const ButtonDayNotSelected = styled.button`
    width: 30px;
    height:30px;
    background-color: #ffffff;
    border: 1px solid #d5d5d5;
    color: #d5d5d5;
    margin-right: 5px;
    font-size: 20px;
    border-radius: 5px;
`

const CardTop = styled.div`
    background-color:#ffffff;
    width: 301px;
    height: 38px;
    display:flex;
    justify-content: space-between;
    align-items:center;
    h2{
        color:#666666;
        font-size:20px;
        margin-bottom: 9px;
        background-color:#ffffff;
    }
    ion-icon{
        font-size:19px;
        background-color:#ffffff;
        color:#666666;
    }
`

/* const IonIconLayout = styled.div`
    position:fixed;
    top: 10px;
    right:10px;
    font-size:17px;
` */