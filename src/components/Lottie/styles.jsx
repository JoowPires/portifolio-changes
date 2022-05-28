import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;


  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const gridFirst = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const gridSec = styled.div`
  margin-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const github = styled.a`
  width: 80px;
  height: 80px;
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  color: #fff;
  p{
    display: none;
    margin: 0;
  }
  :hover{
    p{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 60px;
  color: #0FCCCE;   
  animation-name: shutter-in-top;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-fill-mode: none;
  /* shorthand 
  animation: shutter-in-top 1.5s ease 0.2s infinite normal none;
  */ 
}
@keyframes shutter-in-top {
  0%{
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100%{
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}}
`;

export const linkedin = styled.a`
  width: 80px;
  height: 80px;
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  color: #fff;
  p{
    display: none;
    margin: 0;
  }
  :hover{
    p{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 60px;
  color: #0FCCCE;   
  animation-name: shutter-in-top;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-fill-mode: none;
  /* shorthand 
  animation: shutter-in-top 1.5s ease 0.2s infinite normal none;
  */ 
}
@keyframes shutter-in-top {
  0%{
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100%{
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}}
`;

export const instagram = styled.a`
  width: 80px;
  height: 80px;
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  color: #fff;
  p{
    display: none;
    margin: 0;
  }
  :hover{
    p{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 60px;
  color: #0FCCCE;   
  animation-name: shutter-in-top;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-fill-mode: none;
  /* shorthand 
  animation: shutter-in-top 1.5s ease 0.2s infinite normal none;
  */ 
}
@keyframes shutter-in-top {
  0%{
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100%{
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}}
`;

export const twitter = styled.a`
  width: 80px;
  height: 80px;
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  color: #fff;
  p{
    display: none;
    margin: 0;
  }
  :hover{
    p{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 60px;
  color: #0FCCCE;   
  animation-name: shutter-in-top;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-fill-mode: none;
  /* shorthand 
  animation: shutter-in-top 1.5s ease 0.2s infinite normal none;
  */ 
}
@keyframes shutter-in-top {
  0%{
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100%{
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}}
`;

export const resume = styled.a`
  width: 80px;
  height: 80px;
  display: block;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  color: #fff;
  margin-top: 10px;
  p{
    display: none;
    margin : 8px;

  }
  :hover{
    p{
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 60px;
  color: #0FCCCE;   
  animation-name: shutter-in-top;
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-direction: normal;
  animation-fill-mode: none;
  /* shorthand 
  animation: shutter-in-top 1.5s ease 0.2s infinite normal none;
  */ 
}
@keyframes shutter-in-top {
  0%{
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100%{
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}}
`;
