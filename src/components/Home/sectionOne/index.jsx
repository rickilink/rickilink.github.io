import React from "react"
import { Container , Div1, H2, Img , P, Div} from "./styles"


export const SectionOne = () => {
    return(
        <Container>
            <Div1 >
                <Div>
                    <H2 >Cristobal  Matute.</H2>
                    <P> Portfolio is under Construction</P>
                </Div>
               
                 <Img src={require("../../../assets/images/cover.png") } alt='BackgroundImage' />
            </Div1>

      </Container>

    )
}
