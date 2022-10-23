import styled from "styled-components"
import TopBar from "../components/TopBar"
import GlobalStyle2 from "../GlobalStyle2"
import CardHabit from "../components/CardHabit"
import FooterMenu from "../components/FooterMenu"
import CardHabitCreated from "../components/CardHabitCretaed"

export default function HabitsPage() {
    return (
        <>
            <HabitsPageLayout>
                <GlobalStyle2 />
                <TopBar />
                <MyHabitsLayout>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </MyHabitsLayout>
                <CardHabit />
                <CardHabitCreated />
                <NoHabitsLayout>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </NoHabitsLayout>
            </HabitsPageLayout>
            <FooterMenu />
        </>
    )
}

const MyHabitsLayout = styled.div`
    margin-top:71px;
    height:85px;
    width:375px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-left:19px;
    padding-right:19px;
    box-sizing:border-box;
    h2{
        font-family: 'Lexend Deca', sans-serif;
        color:#126ba5;
        font-size:23px;
    }
    button{
        background-color:#52b6ff;
        width:40px;
        height:36px;
        font-family: 'Lexend Deca', sans-serif;
        color:#ffffff;
        font-size:28px;
        border-radius:4.6px;
        border: 1px solid #52b6ff;
        display:flex;
        justify-content:center;
        align-items:center; 
        :hover{
            background-color: #74c4ff;
        }
    }
`

const HabitsPageLayout = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:105px;
`

const NoHabitsLayout = styled.div`
    height:87px;
    width:375px;
    padding-left:21px;
    padding-right:21px;
    box-sizing:border-box;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size:16px;
        color:#666666;
    }
`