import React from 'react'
import { ContainerFirst, ContainerSecond, DivFirst, DivFirst1, P , FlexResponsive, H6, MainContainer, Ul, Div } from './styles'
import { Link } from '../../components/styles'


export const Footer = () => {
  return (
  <MainContainer>
    <ContainerFirst >
        <DivFirst >
                <div>
                    {/* <Img width={80} height={18} src='/static/assets/img/LOGO.png'/> */}
                    <DivFirst1>
                        <H6>+51 999 999 999</H6>
                        <H6>Rockefeller PlazaNew York, NY 10112</H6>
                    </DivFirst1>
                </div>
            <div>
            <div>
                    <Ul>
                        <div>
                            <li><h3>Learn More</h3></li>
                            <li><Link to='#'><H6>How It Works</H6></Link></li>
                            <li><Link to='#'><H6>Who We Are</H6></Link></li>
                            <li><Link to='#'><H6>Careers</H6></Link></li>
                            <li><Link to='#'><H6>Blog</H6></Link></li>
                            <li><Link to='#'><H6>FAQs</H6></Link></li>

                        </div>
                        <div >
                            <li ><h3>Social</h3></li>
                            <li ><Link to='#'><H6>Facebook</H6></Link></li>
                            <li ><Link to='#'><H6>Twitter</H6></Link></li>
                            <li ><Link to='#'><H6>Instagram</H6></Link></li>
                            <li ><Link to='#'><H6>Pinterest</H6></Link></li>
                            <li ><Link to='#'><H6>Linkedin</H6></Link></li>
                        </div>
                    </Ul>
                </div>
            </div>
            <div>
                <h3>Downloads</h3>
                    <FlexResponsive>
                        {/*  <Img width={160} height={75} src='/static/assets/img/google-play.png' />
                            <Img width={160} height={75} src='/static/assets/img/app-store.png'/> */}
                    </FlexResponsive>
            </div>

        </DivFirst>
    </ContainerFirst>
<ContainerSecond id='Social'>
      <P >Copyright © 2022 Company Name All rights reserved</P>
      <Div >
      <Link to='#'><P >Term of use</P></Link>
      <Link to='#'><P >Privacy Police</P></Link>
      <Link to='#'><P >Cardholder Agreement</P></Link>
      </Div>
    </ContainerSecond>
  </MainContainer>
    

  )
}
