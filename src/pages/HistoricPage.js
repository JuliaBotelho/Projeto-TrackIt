import styled from "styled-components";
import TopBar from "../components/TopBar";
import FooterMenu from "../components/FooterMenu";
import GlobalStyle2 from "../GlobalStyle2";

export default function HistoricPage() {
    return (
        <>
            <GlobalStyle2 />
            <TopBar />
            <HistoricPageLayout>
                <h2>Histórico</h2>
                <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
            </HistoricPageLayout>
            <FooterMenu />
        </>
    )
}

const HistoricPageLayout = styled.div`
    padding: 18px;
    margin-top:77px;
    box-sizing:border-box;
    font-family: 'Lexend Deca', sans-serif;
    h2{
        color:#126ba5;
        font-size:23px;
        margin-bottom:17px;
    }
    h3{
        font-size: 18px;
        color: #bababa;
    }
`