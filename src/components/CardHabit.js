import styled from "styled-components"

export default function CardHabit() {
    return (
        <CardHabitLayout>
            <input
                name="newhabit"
                placeholder="nome do hábito"
            />
            <WeekDayButtons>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </WeekDayButtons>
            <ActionButtons>
                <h3>Cancelar</h3>
                <button>Salvar</button>
            </ActionButtons>
        </CardHabitLayout>
    )
}

const CardHabitLayout = styled.div`
    width:340px;
    height:180px;
    padding:18px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: #ffffff;
    box-sizing:border-box;
    margin-bottom:28px;
    border-radius:5px;
    input{
        width: 301px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #d5d5d5;
        font-family: 'Lexend Deca', sans-serif;
        color: #d5d5d5;
        font-size: 21px;
        margin-bottom: 7px;
        padding-left:7px;  
        background-color: #ffffff; 
    }
`

const WeekDayButtons = styled.div`
    background-color: #ffffff;
    width:310px;
    height:36px;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    button{
        width: 30px;
        height:30px;
        background-color: #ffffff;
        border: 1px solid #d5d5d5;
        color: #d5d5d5;
        margin-right: 5px;
        font-size: 20px;
        border-radius: 5px;
    }
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
        width: 84px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid #52b6ff;
        background-color: #52b6ff;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        margin-left: 20px;
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
