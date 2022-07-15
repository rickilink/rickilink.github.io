import styled from 'styled-components'


export const Container = styled.div`

    background: linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 15%) 67%);
    border-radius: 14px;
    width: 100%;
    margin-bottom: 70px;

    @media(min-width:1023px){
    width:80%;
    margin:75px auto;

}
`

export const ImgContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width:100%;
    overflow:hidden;
    height:150px;
    margin-bottom:75px;
    border-radius: 10px 10px 0 0;
  


@media(min-width:1023px){
   margin:0;
   height:100%;
   width:auto;
   border-radius: 10px;



}
   
`

export const Img = styled.img`
    object-fit:contain;
    justify-self:center;
    overflow: hidden;
    width:100%;
    

    

    @media(min-width:1023px){
   
    object-fit:cover;
    border-radius: 0px 10px 10px 0;

}
   

`
export const DivFlexer = styled.div`
padding-bottom: 70px ;

@media(min-width:1023px){
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding:0;
}
   
`
export const Div2 = styled.div`
 border-radius: 10px 10px 1px 1px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    background: rgba(255, 255, 255, 0.5);
`
export const Div3 = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 20px 20px 5px 20px;
`
export const Div4 = styled.div`
height: 30px;
    width: 30px;
    background-color: black;
    color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const H2 = styled.h2`
font-size: 1rem;
    padding: 0 30px 0 8px;
   
    color: var(--title-blue);
`
export const P = styled.p`
padding: 0 20px;
    text-align: left;
    margin: 0 0 20px 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252B42;
`
export const Div5 = styled.div`
border-radius: 1px 1px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 2px;
    background: rgba(255, 255, 255, 0.5);
`
export const Div6 = styled.div`
 border-radius: 1px 1px 10px 10px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
`
