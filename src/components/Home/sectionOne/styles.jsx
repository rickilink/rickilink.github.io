import styled from "styled-components";


export const Container = styled.div`
    position:relative;
    width: 100%;
    height: 480px;
    background: linear-gradient(337deg, #f79901 15%, rgb(0 0 0 / 5%) 67%);
    mix-blend-mode: darken;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(min-width:1023px)
        {
            position:relative;
            width: 100%;
            height: 600px;
            
            align-content: center;
            justify-content: space-around;
            
            
            background: radial-gradient(at 69% 27% ,rgb(32 37 114) 49%,rgba(0,0,0,1) 92%);
            mix-blend-mode: darken;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 6% 76%);
        } 

`

export const Div1 = styled.div`
@media(min-width:1023px){
            display:flex;
            align-content: center;
            justify-content: space-around;
            align-items: center; 
            ${'' /* mix-blend-mode: darken; */}
   s
}
`
export const ImgContainer = styled.div`
   

 @media(min-width:1023px){
         
        } 
`
export const Img = styled.img`
    width: 250px;
    object-fit: contain; 
    height: 216px;

@media(min-width:1023px){
    width:inherit;
    height:600px
    
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
 
   
    color: white;

   
   `
   export const P = styled.p`
    align-self: center;
    padding: 20px 19px;
    color: white;

   
   `

