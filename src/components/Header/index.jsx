import React, { useState } from 'react'

import {  Nav, Div, Navi, Hided, ToHide, MainContainer , ImageContainerLogo, Logo, Menu} from './styles'
import { Link } from '../../components/styles'


export const Header = () => {
    const [DisplayMenu , UseDisplayMenu] = useState(false)

    console.log(DisplayMenu)
    function handleClick() {
        UseDisplayMenu(!DisplayMenu)
    }
  return (
    <MainContainer>
        <Div>
            <Nav>
                <ToHide>
                <div onClick={() => handleClick()}>
                    <img  src={require("../../assets/images/icon-menu.png")}  width={20} height={20} alt="Logo" />
                    
                   {/*  <Img2 width={20} height={20} src={'/static/assets/img/menu.png'}/> */}
                </div>
                {
                   !DisplayMenu ? null :  
                   <Menu>
                        
                        <Link to='#'><p>Home</p></Link>
                        <Link to='#Social'><p>Social</p></Link>
                    </Menu>
                }
                
                </ToHide>
                <ImageContainerLogo>
                    {/* <img src={require("../../assets/images/logo.png")}  width={100} height={23} alt="Logo" /> */}
                    <Logo>Rickilink</Logo>

                   {/*  <Img width={100} height={23} src={'/static/assets/img/LOGO.png'}/> */}
                </ImageContainerLogo>
                <Navi>
                    <Hided>
                        <Link to='#'><p>Home</p></Link>
                        <Link to='#Social'><p>Social</p></Link>
                    </Hided>

                    {/* <Div3 > <Link to='#'>Get Started  &gt;</Link></Div3> */}
                </Navi>

            </Nav>
        </Div>

    </MainContainer>
  )
}
