import styled from "styled-components";

export default function TopBar(){
    return(
        <TopLayout>
            <h1>TrackIt</h1>
            <img src={"https://i.pinimg.com/736x/40/7f/89/407f891dfaadad2a4904282a1e66eabb.jpg"}/>
        </TopLayout>
    )
}

const TopLayout = styled.div`
    width:100%;
    height: 70px;
    background-color: #126ba5;
    position:fixed;
    left:0px;
    top:0px;
    box-shadow: 0px 4px 4px rgb(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left:19px;
    padding-right:19px;
    box-sizing:border-box;
    z-index:2;
    img{
        width:52px;
        height:52px;
        border-radius: 50%;
    }
    h1{
        font-family: 'Playball', cursive;
        font-size: 39px;
        color:#ffffff;
        background-color: #126ba5;

    }
`