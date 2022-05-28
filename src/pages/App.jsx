import * as S from "./styles.jsx";
import FadeIn from 'react-fade-in';
import { Header } from "../components/Header";
import { Contact } from "../components/Contact";
import { Conhecimento } from "../components/Conhecimento"
import { Imagem } from "../components/Imagem";
import { Footer } from "../components/Footer";


function App() {
  return (
    <>
    <S.App>
      <S.div>
      <Header />
      <FadeIn delay={4500}>
      <Contact />
      </FadeIn>
      <FadeIn delay={5000}>
      <Conhecimento />
      </FadeIn>
      </S.div>
    <FadeIn delay={5500}>
    <Imagem />
    </FadeIn>
    </S.App>
    <FadeIn delay={6500}>
    <Footer />
    </FadeIn>
    </>
  );
}

export default App;
