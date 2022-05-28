import { Intro } from "../Intro/index";
import * as S from "./styles.jsx";

export function Header() {
  return (
    <S.header>
      <Intro />
      <S.h1>ESTUDANTE DE DESENVOLVIMENTO WEB/SOFTWARE</S.h1>
      <S.p>Olá, meu nome é Jonathan e sou estudante de analise e desenvolvimento de sistemas.
        Buscando sempre aprender e melhorar minhas habilidades, criei esse site para mostrar
        e acompanhar minha evolução durante meus estudos. Além de mostrar meus conhecimentos e 
        habilidades que usei para desenvolver essa página.
      </S.p>
    </S.header>
  );
}
