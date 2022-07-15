import React from "react"
import { Div4 , Div5, Div1, H2,  ImgContainer, Img } from "./styles"

export const SectionOne = () => {
    return(
        <Div4>
            <Div1 >
                <Div5 ><H2 >Your Strategy Is Only As Good As
                    You Execute It.</H2>
                </Div5>
                <ImgContainer>
                    <Img src={require("../../../assets/images/cover.png") } alt='BackgroundImage' />
                </ImgContainer>
            </Div1>

      </Div4>

    )
}
