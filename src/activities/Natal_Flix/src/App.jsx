import { Header } from './components/Header/Header'
import S from './styles/index.module.scss'

import capaFilme from '@assets/images/banner-filme.png'
import nomeFilme from '@assets/images/titulo-filme.png'

import Icon_play from '@assets/icons/play.png'
import Icon_estrela from '@assets/icons/star_amarela.png'
import { CardFilme } from './components/cardFilme/CardFilme'
import { filmes } from './data/movies.js'

export function App() {
  return (
    <>
      <Header />

      <main>
        <section className={S.main__content}>
          <div className={S.main__container}>
            <section className={S.content__movie_info}>
              <div className={S.movie_info__details}>
                <img src={nomeFilme} alt="nome do filme" />
                <p>1h 37min | Aventura, Animação, Família</p>
              </div>

              <div className={S.movie_info__description}>
                <p>
                  Jack Frost, um garoto que controla o inverno, se junta ao
                  seleto time dos Guardiões Imortais para impedir Breu, o
                  bicho-papão, de transformar todos os sonhos das crianças em
                  pesadelo e usar seus poderes maquiavélicos para governar o
                  mundo.
                </p>
              </div>

              <div className={S.movie_info__buttons}>
                <button>
                  <img src={Icon_play} alt="Ícone" />
                  Assistir
                </button>

                <button>
                  <img src={Icon_estrela} alt="Ícone" />
                  Adicionar aos Favoritos
                </button>
              </div>
            </section>

            <section className={S.content__movie_image}>
              <img src={capaFilme} alt="Capa do filme" />
            </section>
          </div>
        </section>

        <section className={S.section__others_movies}>
          <p>Continuar Assistindo</p>

          <section className={S.other_movies__container}>
            {filmes.map((filme) => (
              <CardFilme
                key={filme.id}
                imagem={filme.image}
                progresso={filme.progress}
              />
            ))}
          </section>

          <p>Filmes de Terror do Natal</p>
        </section>
      </main>
    </>
  )
}
