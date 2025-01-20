import PropTypes from 'prop-types'
import S from './style/cardfilme.module.scss'

export function CardFilme({ imagem, progresso }) {
  return (
    <section className={S.filme}>
      <img src={imagem} alt="Capa do filme" />
      <div className={S.filme__container_progress}>
        <div
          className={S.filme__progress}
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
    </section>
  )
}

CardFilme.propTypes = {
  imagem: PropTypes.node.isRequired,
  progresso: PropTypes.number.isRequired
}
