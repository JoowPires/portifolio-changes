import * as S from "./styles.jsx";
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
      <Contact />
      <Conhecimento />
      </S.div>
    <Imagem />
    </S.App>
    <Footer />
    </>
  );
}

export default App;
