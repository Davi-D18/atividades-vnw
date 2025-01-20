import { Footer } from "@c/Footer/Footer";
import { Header } from "@c/Header/Header";

import S from "./style/home.module.scss";

import arvoreBola from "@img/icons/bola-com-arvore.png";
import Image2 from "@img/images/atracoes-do-natal-luz-em-gramado.png";
import Image3 from "@img/images/cidades-para-viajar-no-natal(2).png";
import Image1 from "@img/images/cidades-para-viajar-no-natal.png";
import Snowfall from "react-snowfall";

export function App() {

  return (
    <>
      <Header />

      <main>
        <section className={S.banner} id="inicio">
          <div>
            <Snowfall color="#fff" snowflakeCount={110} />
          </div>
          ,
        </section>

        <section className={S.curiosidade}>
          <div className={S.containerCuriosidade}>
            <img
              src={arvoreBola}
              alt="Imagem de uma arvore dentro de uma bola"
            />

            <p id="curiosidade-scrool">
              A origem do globo de neve é incerta, mas acredita-se que tenha
              surgido na Europa no século XIX, tornando-se um símbolo de magia,
              afeto e encantamento, especialmente no Natal, trazendo um toque de
              nostalgia e maravilha para as celebrações e encantando gerações ao
              redor do mundo.
            </p>
          </div>
        </section>

        <section className={S.gallery} id="galeria">
          <div className={S.galleryContainer}>
            <img src={Image1} alt="Cidade para viajar no natal" />
            <img src={Image2} alt="Cidade para viajar no natal" />
            <img src={Image3} alt="Cidade para viajar no natal" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

