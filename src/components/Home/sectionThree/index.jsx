import React from 'react'
import { Container, Div, Br, P, Div2, Div3, Div4, P1, Img, P2, ImgContainer } from './styles'

export const SectionThree = () => {
  return (
    <Container>
       <Div >
            <h2>Questions <Br/> About Us<span>.</span></h2>
            <P >Short Introduction</P>
        </Div>
        <Div2 >
            <Div3 >
                <Div4 >
                    <P1 >Lorem ipsum dolor sit consectetur.</P1><ImgContainer><Img src={require("../../../assets/images/icon.png") }/></ImgContainer>
                    <P2 > Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam mollitia porro vitae voluptate nam a alias dolorem aperiam repellat inventore?</P2>
                </Div4>
                <Div4 >
                    <P1 >Lorem ipsum dolor sit consectetur.</P1><ImgContainer><Img src={require("../../../assets/images/icon.png") }/></ImgContainer>
                    <P2> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam mollitia porro vitae voluptate nam a alias dolorem aperiam repellat inventore?</P2>
                </Div4>
                <Div4 >
                    <P1 >Lorem ipsum dolor sit consectetur.</P1><ImgContainer><Img src={require("../../../assets/images/icon.png") }/></ImgContainer>
                    <P2 > Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quisquam mollitia porro vitae voluptate nam a alias dolorem aperiam repellat inventore?</P2>
                </Div4>

            </Div3>

        </Div2>
    </Container>

  )
}