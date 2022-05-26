import { Link } from "react-router-dom";
import styled from "styled-components"


function Recommends() {
    return (
        <Container>
            <h3># TRENDING NOW</h3>
            <Content>
                <Wrap>
                    <Link to='/'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE3_mxhpu-2Kr8G9ACC2sr0zZgRsMeNyzNvw&usqp=CAU" alt="img" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://www.thedigitalfix.com/wp-content/uploads/2021/12/Avatar-2-plot.jpg" alt="img" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="http://thred.com/wp-content/uploads/2020/02/image1-770x430.png" alt="img" />
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/'>
                        <img src="https://images.macrumors.com/t/MP8XNdmNR0b5NrtLjhFwtfl8w9w=/800x0/article-new/2021/03/disney-plus.jpg?lossy" alt="img" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
};
const Container = styled.div`
padding:0 0 26px;`;

const Content = styled.div`
display:grid;
grid-gap:25px;
 gap:25px;
 

grid-template-columns:repeat(4,minmax(0,1fr));

 @media(max-width:768px){
    grid-template-columns:repeat(2,minmax(0,1fr))
 }`;
const Wrap = styled.div`
 padding-top: 56.25%;
 border-radius:10px;
 box-shadow:rgb(0 0 0/80%) 0px 40px 58px -16px,rgb(0 0 0/72%) 0px 30px 22px -10px ;

cursor:pointer;
overflow:hidden;
position: relative;
transition: all 250ms cubic-bezier(0.075,0.46,0.46,0.94);
border: 3px solid rgb(249,249,249,0.1);

img{
    inset: 0px;
    display: block;
    height: 100%;
   box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,rgb(0 0 0/73%) 0px 26px 30px -10px;
    object-fit:cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
width: 100%;
z-index: 1;
top:0;
}
&:hover{
    box-shadow: rgb(000/80%) 0px 40px 58px -16px,
    rgb(000/73%) 0px 30px 22px -10px;
transform: scale(1.09);
border-color: white;

}
`;

export default Recommends
