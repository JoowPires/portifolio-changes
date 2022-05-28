import * as S from "./styles.jsx";
import { LottieAnimation } from "../Lottie";

const data = {
  name: "LinkedIn",
  url: "https://www.linkedin.com/",
};

export function Contact() {
  return (
    <S.Contact>
      <S.h2>Get in touch</S.h2>
      <LottieAnimation />
    </S.Contact>
  );
}
