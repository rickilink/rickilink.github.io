import  styled from 'styled-components';
import { Link as Linky } from 'react-router-dom';



export const Link = styled(Linky)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    
    color: #ffc107;
    font-size: 1.2rem;
  }

`