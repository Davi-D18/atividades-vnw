import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import S from './style/cardfilme.module.scss'

export function CardFilme({ imagem, progresso, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <section className={S.filme}>
        <img src={imagem} alt="Capa do filme" />
        <div className={S.filme__container_progress}>
          <div
            className={S.filme__progress}
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
      </section>
    </Link>
  )
}

CardFilme.propTypes = {
  imagem: PropTypes.node.isRequired,
  progresso: PropTypes.number.isRequired,
  id: PropTypes.number
}
