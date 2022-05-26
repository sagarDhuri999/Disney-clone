import styled from "styled-components"
import React from 'react'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://www.thedigitalfix.com/wp-content/uploads/2021/12/Avatar-2-plot.jpg" alt="img" />
            </Background>
            <ImageTitle>
                <img src="https://images.fanart.tv/fanart/avatar-2-52080cbf43d5a.png" alt="img_title" />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="play button" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="play button" />
                        <span>Trailer</span>
                    </Trailer>
                </Controls>
            </ContentMeta>
        </Container>
    )
}
const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0px calc(3.5vw + 5px);
 `;
const Background = styled.div`
 left:0px;
 position:fixed;
 opacity:0.6;
 right:0px;
 top:0px;
 z-index:-1;
 
 img{
     width:100vw;
     height:100vh;

     @media(max-width:768px){
         width:initial;
     }
 }
 `
const ImageTitle = styled.div`
display:flex;
align-items:flex-start;
justify-content:flex-start;
margin:0px auto;

img{
    max-width:600px;
    min-width:200px;
    width:35vh;
}`

const ContentMeta = styled.div`
`

const Controls = styled.div`
display:flex;
align-items:center;
flex-flow: row nowrap;
margin:24 0px;
min-height:56px;`

const Player = styled.button`
font-size:16px;
margin:0px 22px 0px 0px;
height:56px;
border-radius:5px;
cursor: pointer;
display:flex;
align-items:center;
justify-items:center;
border:none;
letter-spacing:1.5px;
text-align:center;
text-transform:uppercase;
background:rgb(249,249,249);

img{
    width:32px;
}
&:hover{
    background:rgb(198,198,198);
}
@media (max-width:768px) {
    height:45px;
    padding:0px 12px;
    font-size :10px;
    margin:0px 10px 0px 0px;

    img{
    width:25px;
}
}
`
const Trailer = styled(Player)`
 background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`

export default Detail
