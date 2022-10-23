import styled from "styled-components";

export default function TodayCard(){
    return(
        <TodayCardLayout>
            <TodayTittles>
                <h2>Nome do habito salvo</h2>
                <h3>sequencia atual</h3>
                <h3>recorde do usuario</h3>
            </TodayTittles>
            <ion-icon name="checkbox"></ion-icon>
        </TodayCardLayout>
    )
}

const TodayCardLayout = styled.div`
    width: 338px;
    height: 94px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 14px;
    box-sizing:border-box;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ion-icon{
        color:#ebebeb;
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
`