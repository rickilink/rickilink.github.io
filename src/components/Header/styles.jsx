import styled from 'styled-components'
// import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
${'' /* background-color: rgb(0 0 0 / 1%); */}
width: 100%;

`
export const Div = styled.div`
    @media(min-width:1023px){
        width: 90%;
        margin: 0 auto;
    }

`


export const ImageContainerLogo = styled.div`


@media(min-width:1023px){

}

  `
export const Nav = styled.nav`
    display: flex;
    background: radial-gradient(at 93% 81% ,rgb(32 37 114) 52%,rgb(16 18 56) 72%);
    width: 100%;
    height: 72px;
    align-items: center;
  
   
    @media(min-width:1023px)
        {
            position:absolute;
            display: flex;
            width: 100%;
            height: 72px;
            align-items: center;
            background-color: rgb(32 37 114 / 8%);
            left: 0;
            z-index:1;  
            justify-content:space-around;
        } 
`

export const Navi = styled.div`
   

    @media(min-width:1023px)
        {
            display: flex;
            align-content: center;
            align-items: center;
            gap: 25px;
        } 
`

export const ToHide = styled.div`


@media(min-width:1023px) {
    display:none;
}

`
export const Hided = styled.div`
    display:flex;
    gap: 25px;
    color:white;

@media(max-width:1023px) {
    display:none;
}

`
export const Menu = styled.div`
    position: absolute;
    left: 0;
    top: 83px;
    z-index: 1;
    width: 70px;
    height: 68px;
    background-color: rgb(7 21 39 / 80%);
    border-radius: 15px;
    padding: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 2px;
`

export const Div3 = styled.button`
    background-color: #f79901;
    border: none;
    height: 43px;
    border-radius: 5px;
    width: auto;
    color: white;
    letter-spacing: 1px;
    padding: 5px;

`




export const Logo = styled.p`
    font-size: 1.5rem;
    color: white;
    font-weight: 100;
    margin-left:10px;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  

    @media(min-width:1023px){
    font-size: 3rem;
    text-align: center;

    }

    `