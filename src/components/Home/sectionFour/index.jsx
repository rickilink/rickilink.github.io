import React from 'react'

import { Container, ImgContainer, DivFlexer, Div2, Div3, Div4, Div5, Div6, H2, P, Img } from './styles'

export const SectionFour= () => {
  return (
    <Container>
        <DivFlexer >
            <ImgContainer >
                <Img  src={require("../../../assets/images/media.png") } />
            </ImgContainer>
            <div>
                <Div2 >
                    <Div3 >
                        <Div4 > <p>1</p></Div4>
                    <H2 >Lorem, Ipsum Dolor.</H2>
                    </Div3>

                    <P >Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Div2>
                <Div5 >
                    <Div3 >
                        <Div4 > <p >2</p></Div4>
                    <H2 >Lorem, Ipsum Dolor.</H2>
                    </Div3>

                    <P >Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Div5>
                <Div5 >
                    <Div3 >
                        <Div4 > <p >3</p></Div4>
                    <H2 >Lorem, Ipsum Dolor.</H2>
                    </Div3>

                    <P >Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Div5>
                <Div6 >
                    <Div3 >
                        <Div4 > <p >4</p></Div4>
                    <H2 >Lorem, Ipsum Dolor.</H2>
                    </Div3>

                    <P >Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                </Div6>
            </div>

        </DivFlexer>
    </Container>

  )
}
