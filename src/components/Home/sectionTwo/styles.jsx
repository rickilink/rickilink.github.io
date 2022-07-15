import styled from 'styled-components'


export const Container = styled.div`
@media(min-width:1023px){
    width:70%;
    margin:75px auto;
}

`
export const Div = styled.div`
 text-align: center;
    font-size: 1.2rem;
    color: #252B42;
    margin:24px;
`
export const Br = styled.br`
   

    @media(min-width:1023px) {
        display:none;
    }
`

export const Ul = styled.ul`
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    width: 60%;
    margin: 0 auto;
    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    list-style: none;


`
export const Ul2 = styled.div`
      padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    width: 60%;
    margin: 0 auto;
    justify-items: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    list-style: none;


    @media(max-width:1023px) {
        display:none
    }

`

export const Flexed = styled.div`
  

    @media(min-width:1023px) {
        display:flex;
        padding: 70px 0 0;
    }

`
export const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Img = styled.img`
width:37px;
height:38px;
`
