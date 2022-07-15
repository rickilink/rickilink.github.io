import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
background-color: #232120;
width: 100%;

`
export const Div = styled.div`
    @media(min-width:1023px){
        width: 90%;
        margin: 0 auto;
    }

`


export const ImageContainerLogo = styled.div`

  `
export const Nav = styled.nav`
    display: flex;
    background-color: #232120;
    width: 100%;
    height: 72px;
    align-items: center;
    justify-content:space-around;
   
    @media(min-width:1023px)
        {
            display: flex;
            background-color: #232120;
            width: 100%;
            height: 72px;
            align-items: center;
            
            justify-content: space-between;
            
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




