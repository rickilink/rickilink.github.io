import styled from 'styled-components'


export const MainContainer = styled.div`
background-color: #232120;
    width: 100%;
    color: white;
    
`

export const ContainerFirst = styled.div`
    background-color: #232120;
    

    @media(min-width:1023px){
      flex-direction: row;
      justify-content: space-between;
     
}
`

export const DivFirst = styled.div`
    display:flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    padding-top: 70px;
    padding-bottom: 41px;
    gap: 25px;
    

    @media(min-width:1023px){
    width: 70%;
    justify-content: space-between;
    align-content: center;
    flex-direction: row;

   
}

`
export const DivFirst1 = styled.div`

@media(min-width:1023px){
  display:flex;
  flex-direction: column;
}


`
export const P = styled.p`
  font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 24px;
padding-right:10px;
  @media(min-width:1023px){
    padding: 0 20px;
    margin: 10px 0;
  }

`



////section 2


export const ContainerSecond = styled.div`
  display:flex;
  background-color: #232120;
  width: 100%;
  color: white;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: flex-end;


  @media(min-width:1023px){
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
  }
   
`
/* export const Img = styled(Image)`
  object-fit:contain;
` */
export const Div = styled.div`
  display:flex;
  padding-top:16px;
  padding-bottom:5px;
   

    

    @media(min-width:1023px){
      padding: 0 20px;
  }

`
export const FlexResponsive = styled.div`
 
  @media(min-width:1023px){
    display:flex;
    flex-direction: column;
  }
`

export const DivFlex = styled.div`
 
  @media(min-width:1023px){
    display:flex;
    flex-direction: column;
  }
`
export const Ul = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    @media(min-width:1023px){
      gap:100px;
      color:white;
    }

`
export const H6 = styled.h6`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 24px;
margin:10px;
/* or 171% */


`
export const Div2 = styled.div`
margin-bottom: 50px;

`
