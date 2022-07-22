import React from 'react'
import { Container, Div, Ul, Ul2, Li, Br, Img, Flexed } from './styles'

export const SectionTwo = () => {
  return (
    <Container>
        <Div>
            <h2>Dream Big <Br/> Do Right<span></span></h2>

        </Div>

        <Flexed>

            <Ul2>
                <Li><Img  src={require("../../../assets/images/audit.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/house.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/clarity_users-line.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/tax.png") }/><p>Audit Report</p></Li>

            </Ul2>

          <Ul>
                <Li><Img  src={require("../../../assets/images/audit.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/house.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/clarity_users-line.png") }/><p>Audit Report</p></Li>
                <Li><Img  src={require("../../../assets/images/tax.png") }/><p>Audit Report</p></Li>

          </Ul> 
        </Flexed>

    </Container>

  )
}
