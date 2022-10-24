import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contextElements/auth"

export default function CardHabit({ setHabitFormEnabled }) {
    const days = [{ day: "D", id: 7 },
    { day: "S", id: 1 },
    { day: "T", id: 2 },
    { day: "Q", id: 3 },
    { day: "Q", id: 4 },
    { day: "S", id: 5 },
    { day: "S", id: 6 }]
    const [selectedDays, setSelectedDays] = useState([])
    const [habitName, setHabitName] = useState("")
    const{userData} = useContext(AuthContext)
    const [buttonSaveClicked, setbuttonSaveClicked] = useState(false)
    const [dataHabitReceived, setdataHabitReceived] = useState(false)
    const navigate = useNavigate()

    function disableCard() {
        setHabitFormEnabled(false)
    }

    function handleHabitName(e) {
        setHabitName(e.target.value)
    }
    console.log(habitName)

    function handleDay(day) {


        if (selectedDays.includes(day.id)) {
            const filteredDays = selectedDays.filter((d) => !(d === day.id));
            setSelectedDays([...filteredDays]);
            return;
        }

        setSelectedDays([...selectedDays, day.id])
        return;
    }

     function sendHabit(e){
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {headers:{"Authorization": `Bearer ${userData.token}`}}
        const body={
            name: habitName,
            days: selectedDays
        }

        const promise = axios.post(URL,body,config)

        promise.then(()=>{
            alert("Habito adicionado")
            setdataHabitReceived(true) 
            navigate("/habitos")   
            setHabitFormEnabled(false)
        })
        promise.catch((err)=>{alert(err.response.data.message)})
    } 

    function saveButtonActions(e){
        sendHabit(e)
        setbuttonSaveClicked(true)
    }

    return (
        <CardHabitLayout>
            <BackgroundRight  onSubmit={saveButtonActions} >
                <input
                    data-identifier="input-habit-name"
                    name="name"
                    value={habitName}
                    onChange={handleHabitName}
                    type="text"
                    placeholder="nome do hábito"
                    required
                />
                <WeekDayButtons>
                    {days.map((day, index) => <WeekDay key={index} day={day} handleDay={handleDay} selectedDays={selectedDays} />)}
                </WeekDayButtons>
                <ActionButtons>
                    <h3 data-identifier="cancel-habit-create-btn" onClick={disableCard}>Cancelar</h3>
                    {buttonSaveClicked?(
                        <>{!dataHabitReceived && <button type="submit" disabled><ThreeDots color="#ffffff" height={35} width={60}/></button>}</>
                    ):(
                        <button type="submit" data-identifier="save-habit-create-btn">Salvar</button>
                    )}
                </ActionButtons>
            </BackgroundRight>
        </CardHabitLayout>
    )
}

function WeekDay({ day, handleDay, selectedDays }) {
    return (
        <>
            {!selectedDays.includes(day.id) ? (
                <ButtonDayNotSelected onClick={() => handleDay(day)}>{day.day}</ButtonDayNotSelected>
            ) : (
                <ButtonDaySelected onClick={() => handleDay(day)}>{day.day}</ButtonDaySelected>
            )}
        </>
    )
}

const CardHabitLayout = styled.div`
    width:340px;
    height:180px;
    
    margin-bottom:28px;
    padding:18px;

    display:flex;
    flex-direction:column;
    align-items:center;

    background-color: #ffffff;
    box-sizing:border-box;
    border-radius:5px;

    input{
        width: 301px;
        height: 45px;
        margin-bottom: 7px;
        padding-left:7px;

        border-radius: 5px;
        border: 1px solid #d5d5d5;

        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        font-size: 21px;
  
        background-color: #ffffff; 

        ::placeholder{
            color: #d5d5d5;
        } 
    }
`

const BackgroundRight = styled.form`
    background-color:#ffffff;
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
    margin-right: 5px;

    background-color: #d5d5d5;

    border-radius: 5px;
    border: 1px solid #d5d5d5;

    color: #ffffff;
    font-size: 20px;
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

const ActionButtons = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;

    background-color: #ffffff;
    width:310px;
    height:38px;
    margin-top:18px;

    button{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left: 20px;

        width: 84px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #52b6ff;

        background-color: #52b6ff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        color: #ffffff;
        :hover{
            background-color: #74c4ff;
        }
    }

    h3{
        font-family: 'Lexend Deca', sans-serif;
        color:#52b6ff;
        font-size: 16px;
        background-color: #ffffff;
        :hover{
            color: #74c4ff;
        }
    }
`
