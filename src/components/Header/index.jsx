import React from 'react'

import {  Nav, Div, Navi, Div3, Hided, ToHide, MainContainer , ImageContainerLogo} from './styles'
import { Link } from '../../components/styles'


export const Header = () => {
  return (
    <MainContainer>
        <Div>
            <Nav>
                <ToHide>
                <div>
                    <img src={require("../../assets/images/menu.png")}  width={20} height={20} alt="Logo" />
                   {/*  <Img2 width={20} height={20} src={'/static/assets/img/menu.png'}/> */}
                </div>
                
                </ToHide>
                <ImageContainerLogo>
                    <img src={require("../../assets/images/logo.png")}  width={100} height={23} alt="Logo" />

                   {/*  <Img width={100} height={23} src={'/static/assets/img/LOGO.png'}/> */}
                </ImageContainerLogo>
                <Navi>
                    <Hided>
                        <Link to='#'><p>Home</p></Link>
                        <Link to='#Social'><p>Social</p></Link>
                    </Hided>

                    <Div3 > <Link to='#'>Get Started  &gt;</Link></Div3>
                </Navi>

            </Nav>
        </Div>

    </MainContainer>
  )
}
