import React from "react";
import * as S from "./styles";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export function LottieAnimation() {
  return (
    <S.container>
      <S.gridFirst>
        <S.github href="https://github.com/JoowPires" target="_blank">
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_qxldoqwv.json"
          ></lottie-player>
          <p>Github</p>
        </S.github>
        <S.linkedin href="https://www.linkedin.com/in/jonathan-pires-680796100/" target="_blank">
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_bcmmlcur.json"
          ></lottie-player>
          <p>Linkedin</p>
        </S.linkedin>
        <S.instagram href="https://www.instagram.com/joow_pires/" target="_blank">
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_3nofzej0.json"
          ></lottie-player>
          <p>Instagram</p>
        </S.instagram>
      </S.gridFirst>
      <S.gridSec>
        <S.twitter href="https://twitter.com/Jow_Pires77" target="_blank">
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets5.lottiefiles.com/packages/lf20_7j5ivs93.json"
          ></lottie-player>
          <p>Twitter</p>
        </S.twitter>
        <S.resume href="https://www.facebook.com/jonathan.pires.946" target="_blank">
          <lottie-player
            style={{ height: 60 }}
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets8.lottiefiles.com/packages/lf20_j8r0um3o.json"
          ></lottie-player>
          <p>Perfil</p>
        </S.resume>
      </S.gridSec>
    </S.container>
  );
}
