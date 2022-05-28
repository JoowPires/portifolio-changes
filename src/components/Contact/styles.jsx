import styled from "styled-components";
import { SiLinkedin } from "react-icons/si";
import { GrGithub } from "react-icons/gr";
import { ImCodepen } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const h2 = styled.h2`
  color: #dddbcb;
  font-size: 1.1rem;
`;

export const a = styled.a`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const grid = styled.div`
  display: grid;
  grid-template:
    "a b c"
    "d . .";
`;

export const linkedin = styled(SiLinkedin)`
  grid-area: a;
  width: auto;
  color: #050505;
`;
