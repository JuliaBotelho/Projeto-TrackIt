import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterMenu from "../components/FooterMenu";
import GlobalStyle2 from "../GlobalStyle2"
import TodayCard from "../components/CardToday";

export default function TodayPage() {
    return (
        <>
            <GlobalStyle2 />
            <TopBar />
            <DateTitles>
                <h2>Insira data aqui</h2>
                <h3>Nenhum hábito consluído ainda</h3>
            </DateTitles>
            <TodayLayout>
                <TodayCard />
            </TodayLayout>
            <FooterMenu />
        </>
    )
}

const TodayLayout = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const DateTitles = styled.div`
    margin-top:95px;
    height:85px;
    padding-left:19px;
    padding-right:19px;
    width:375px;
    box-sizing:border-box;
    font-family: 'Lexend Deca', sans-serif;
    h2{
        color:#126ba5;
        font-size:23px;
    }
    h3{
        font-size: 18px;
        color: #bababa;
    }
`


