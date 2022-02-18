import styled from 'styled-components'
import {MdArrowForward} from 'react-icons/md'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index:1;
  /* Add before Styles */
`
export const HeroBg = styled.div`
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom: 0;
  left:0;
  width:100%;
  height:100%;
  overflow: hidden;
  background-image: url('https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

`
export const HeroContent = styled.div`
  z-index:3;
  max-width:1200px;
  position:absolute;
  padding: 8px 24px;
  display:flex;
  flex-direction: column;
  align-items:center;
`
export const HeroH1 = styled.h1`
  color:#fff;
  font-size: 48px;
  text-align: center;
  &:hover{
    transition:all 0.2s ease-in-out;
    color:#04D6FD;
    text-decoration:none;
  }
  

@media screen and (max-width: 768px){
  font-size: 40px;
}
  @media screen and (max-width: 480px){
    font-size: 32px;

}
`
export const HeroP = styled.p`
margin-top:24px;
color:#fff;
font-size:24px;
text-align: center;
max-width: 600px;
font-weight: bold;

@media screen and (max-width: 768px){
  font-size: 40px;
}
  @media screen and (max-width: 480px){
    font-size: 32px;

}
`
export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`
export const ArrowRight = styled(ArrowRightIcon)`
    margin-left: 8px;
  font-size: 20px;
`