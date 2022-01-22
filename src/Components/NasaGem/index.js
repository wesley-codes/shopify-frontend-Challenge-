import Styled, {keyframes} from "styled-components";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { bounceOut} from 'react-animations'

//Animations

const bounceAnimation = keyframes`${bounceOut}`;


export const Container = Styled.div`
flex: 1 1 auto;
box-shadow: 4px 8px 12px -3px rgba(0,0,0,0.82);
-webkit-box-shadow: 4px 8px 12px -3px rgba(0,0,0,0.82);
-moz-box-shadow: 4px 8px 12px -3px rgba(0,0,0,0.82);
margin: 1%;
border-radius:5px;
color:#8a307f;






`;

export const InnerContainer = Styled.div`
padding: 0 6px;
  background-color:#aed6dc;
  padding: 15px;
  


`;

export const ImageContainer = Styled.div`
`

export const Image = Styled.img`
border-radius: 15px;
width: 100%;
height: 200px;
object-fit: cover;

`;

export const Titlecontainer = Styled.div`
padding: 15px;

`

export const Name = Styled.h4`
margin-bottom:3px;

`;

export const Date = Styled.h5``


export const FavouriteContainer = Styled.div`
display:flex;
justify-content: end;
overflow:hidden;
`


export const FavouriteIcon =Styled(FavoriteBorderOutlinedIcon)`
overflow:hidden;
color: ${({liked})=> liked === true ? "red"  : " black"};
animation: 1s ${({liked}) => liked && bounceAnimation }
`


export const SocialContainer = Styled.div`
display:flex;

& div{
    margin: 4px
}
`