import * as S from './styles'

export function Imagem(){
    return(
        <S.imagem>
        <S.gif>
            <lottie-player
                style={{"width": "100%", "height": "100%",}}
                speed={1}
                autoplay="true"
                loop="true"
                direction={1}
                mode="normal"
                src="https://assets7.lottiefiles.com/packages/lf20_eoquvge6.json"
            ></lottie-player>
        </S.gif>
        <S.a href="https://iconscout.com/" target="_blank">Como essa animação foi feita?</S.a>        
        </S.imagem>
    )
}