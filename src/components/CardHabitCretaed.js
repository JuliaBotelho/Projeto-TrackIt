import styled from "styled-components";

export default function CardHabitCreated() {
    return (
        <CreatedCardLayout>
            <CardTop>
                <h2>Titulo do Hábito</h2>
                <ion-icon name="trash-outline"></ion-icon>
            </CardTop>
            <WeekDayButtons>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </WeekDayButtons>
        </CreatedCardLayout>
    )
}

const CreatedCardLayout = styled.div`
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