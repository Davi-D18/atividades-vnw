import { useParams } from 'react-router-dom'
import { filmes } from '../../data/movies.js'
import S from './style/moviedetails.module.scss'

export function MovieDetails() {
  const { id } = useParams()
  const filme = filmes.find((movie) => movie.id === Number(id))

  return (
    <div className={S.movieDetails}>
      {filme ? (
        <>
          {/* Cabeçalho do Filme */}
          <div className={S.movieDetails__header}>
            <img
              className={S.movieDetails__image}
              src={filme.image}
              alt={`Capa de ${filme.title}`}
            />
            <div className={S.movieDetails__info}>
              <h1>{filme.title}</h1>
              <p className={S.movieDetails__genre}>Gênero: Terror, Natalino</p>
              <p className={S.movieDetails__year}>Ano de Lançamento: 2023</p>
              <p className={S.movieDetails__description}>{filme.description}</p>
              <div className={S.movieDetails__actions}>
                <button className={S.button__watch}>🎥 Assistir Agora</button>
                <button className={S.button__favorite}>⭐ Favoritar</button>
              </div>
            </div>
          </div>

          {/* Seção Extra: Elenco e Trailer */}
          <div className={S.movieDetails__extra}>
            <div className={S.movieDetails__cast}>
              <h2>🎭 Elenco</h2>
              <ul>
                {['John Doe', 'Jane Smith', 'Santa Claus'].map(
                  (actor, index) => (
                    <li key={index}>{actor}</li>
                  )
                )}
              </ul>
            </div>

            <div className={S.movieDetails__trailer}>
              <h2>📽️ Trailer</h2>
              <iframe
                src="https://www.youtube.com/embed/suaIDdetrailer"
                title="Trailer do filme"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      ) : (
        <p className={S.movieDetails__notFound}>Filme não encontrado!</p>
      )}
    </div>
  )
}
