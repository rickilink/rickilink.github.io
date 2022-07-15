import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
    margin-bottom: 70px;

    @media(min-width:1023px){
      width:80%;
      margin:75px auto;
    }
`
export const Title = styled.div`
    width: 80%;
    margin:75px auto;
    text-align: center;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    gap: 20px;

    @media(min-width:1023px){
      width:80%;
      margin:0 auto;
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;

    }
`

export const Div2 = styled.div`
    display: flex;
    /* flex-direction: row; */
    align-items: center;
    justify-content: center;

    @media(min-width:1023px){

    }
  
`

export const Div3 = styled.div`
display: flex;
    
@media(min-width:1023px){
  justify-content:center;
}
  
`

export const H2 = styled.h2`
 font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */
margin-left: 16px;
letter-spacing: 0.2px;
text-transform: capitalize;
  @media(min-width:1023px){
    margin-left:4px;
  }
  
`

export const P = styled.p`
      font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin: 0 0 10px 10px;
color: #4D4D4D;
`
export const Div4 = styled.div`
  height: 30px;
    width: 30px;
    background-color: #828282;
    color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Div41 = styled.div`
  height: 30px;
    width: 30px;
    background-color: #F79901;
    color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
