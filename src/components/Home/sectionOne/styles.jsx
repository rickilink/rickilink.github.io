import styled from "styled-components";


export const Container = styled.div`
    position:relative;
    width: 100%;
    height: 480px;
    background: radial-gradient(at 69% 27% ,rgb(32 37 114) 49%,rgba(0,0,0,1) 92%);
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

    display: flex; 
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-direction: column;

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
    width:100%;
    position:absolute;
    bottom:0;
    right:0;
    filter: blur(5px);
    max-height:456px;
    max-width:440px;
    

@media(min-width:1023px){
    position:absolute;
    filter:none;
    width:inherit;
    height:600px;
    right:50px;;
    
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

export const Div = styled.div`
    position: absolute;
    left: 15px;
    top: 86px;
    z-index: 1;

@media(min-width:1023px){
    position: absolute;
    left: 353px;
    top: 191px;
    z-index: 1;

}
`