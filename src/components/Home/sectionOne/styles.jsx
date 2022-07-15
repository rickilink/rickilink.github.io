import styled from "styled-components";


export const Div4 = styled.div`
    position:relative;
    width: 100%;
    height: 480px;
    background: linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 5%) 67%);
    mix-blend-mode: darken;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(min-width:1023px)
        {
            display:flex;
            align-content: center;
            justify-content: space-around;
            
            background:linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 5%) 67%);
            mix-blend-mode: darken;
        } 

`

export const Div1 = styled.div`
@media(min-width:1023px){
            display:flex;
            align-content: center;
            justify-content: space-around;
            align-items: center; 
            mix-blend-mode: darken;
   s
}
`
export const ImgContainer = styled.div`
    display: flex;
    width: 70%;
    height: 120px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    align-content: center;

 @media(min-width:1023px){
         
        } 
`
export const Img = styled.img`
width: 250px;
    /* object-fit: contain; */
    height: 216px;

@media(min-width:1023px){
    width:500px;
    height:450px;
}


 
`

export const Div5 = styled.div`
       display: flex;
    flex-direction: column;
    text-align:center;

    @media(min-width:1023px){
        flex-direction: column;
        text-align: left;
        max-width: 320px;
    }
    
`
export const H2 = styled.h2`
 font-size: 2rem;
    align-self: center;
    padding: 80px 19px;
    color: #252b42;

   
   `

