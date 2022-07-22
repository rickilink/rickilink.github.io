import React from "react"
import { Container , Div5, Div1, H2,  ImgContainer, Img , P} from "./styles"


export const SectionOne = () => {
    return(
        <Container>
            <Div1 >
                <div>
                <H2 >Cristobal  Matute.</H2>
                <P> Portfolio is under Construction</P>
                </div>
               
                 <Img src={require("../../../assets/images/cover.png") } alt='BackgroundImage' />
            </Div1>

      </Container>

    )
}
