import styled from 'styled-components'


export const Container = styled.div`
width:70%;
margin: 75px auto;

`
export const Div = styled.div`
     width: 80%;
    margin:0 auto;
    text-align: center;
    margin-bottom: 50px;    
`
export const P = styled.p`
margin-top: 0;
    color: #F79901;
`

export const Div2 = styled.div`
  
    text-align: -webkit-center;

    @media(min-width:1023px) {
        width: 80%;
        margin: 0 auto;
    }
`

export const Br = styled.br`
   

    @media(min-width:1023px) {
        display:none;
    }
`
export const Div3 = styled.div`
   display: flex;
    flex-direction: column;
    gap: 25px;
    /* max-width: 500px; */
`

export const Div4 = styled.div`
    display: grid;
    grid-template-areas:
        "one one two"
        "three three three";
    grid-template-rows: minMax(53px,85px) minMax(70px ,120px);
    grid-template-columns: minMax(70px ,120px) minMax(70px ,120px) minMax(90px,151px);
    align-items: center;

    background-color: #ffffff;
    justify-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
  
   
    box-shadow: 5px 8px 30px 4px #d5d0d5cc;
    row-gap: 10px;
    border-radius: 10px;

    @media(min-width:1023px) {
        padding: 24px;
        border-radius: 14px;
        grid-template-rows: minMax(61px,108px) minMax(70px ,92px);
        grid-template-columns: minMax(70px ,400px) minMax(71px ,398px) minMax(69px,156px);
    }
`
export const P1 = styled.p`
    margin-top: 0;
    color: #252B42;
    font-size: 0.8rem;
    grid-area:one;
    text-align: left;
    padding: 25px;

    @media(min-width:1039px) {
        font-size: 1.1rem;
        justify-self: left;
    }
`
export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    /* align-content: center; */
    width: 94px;
`

export const Img = styled.img`

width:91px;

 @media(min-width:1023px) {
    width:137px;
height:118px; 

 }
`
export const P2 = styled.p`
   grid-area: three;
    text-align: left;
    font-size: 0.8rem;
    padding: 25px;
    @media(min-width:1023px){
        font-size: 1rem;
    }
`
