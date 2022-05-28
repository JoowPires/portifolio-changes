import * as S from './styles';

export function LottieConhecimento() {
  return (
    <S.container>
      <S.gridFirst>
        <S.javascript>
          <lottie-player
            style= {{ height: 55 }}
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_izvadp8i.json"
            hover="true"
          ></lottie-player>
        </S.javascript>
        <S.html>
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_boop2tyw.json"
            hover="true"
          ></lottie-player>
        </S.html>
        <S.css>
          <lottie-player
            style= {{ height: 50 }}
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets3.lottiefiles.com/packages/lf20_qagselu5.json"
            hover="true"
          ></lottie-player>
        </S.css>
        <S.reactjs>
          <lottie-player 
            style= {{ height: 70 }}
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets10.lottiefiles.com/packages/lf20_6xclfw7l.json"
            hover="true"
            ></lottie-player>
        </ S.reactjs>
        <S.nodejs>
          <lottie-player
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_qkf4wqjg.json"
            hover="true"
          ></lottie-player>
        </S.nodejs>
        <S.git>
          <lottie-player
            style= {{ height: 50 }}
            speed={1}
            autoplay="true"
            direction={1}
            mode="normal"
            src="https://assets7.lottiefiles.com/packages/lf20_krgkxh2p.json"
            hover="true"
          ></lottie-player>
        </S.git>
        </ S.gridFirst>
    </ S.container>
  );
}