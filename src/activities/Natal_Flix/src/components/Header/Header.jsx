import S from './style/header.module.scss'

import Icon_profile from '@assets/images/profile.png'

import Icon_configuracoes from '@assets/icons/configuracoes.png'
import Icon_filme from '@assets/icons/filme.png'
import Icon_gorro from '@assets/icons/gorro.png'
import Icon_inicio from '@assets/icons/inicio.png'
import Icon_lista from '@assets/icons/lista.png'
import Icon_lupa from '@assets/icons/lupa.png'
import Icon_polygon from '@assets/icons/polygon.png'
import Icon_series from '@assets/icons/series.png'

import logo from '@assets/logo/logo.png'

export function Header() {
  return (
    <header>
      <div className={S.secao__profile}>
        <div className={S.profile__foto}>
          <img src={Icon_profile} alt="Avatar do usuário" />
          <img src={Icon_polygon} alt="Icone de polígono" />
        </div>

        <img
          className={S.gorro}
          src={Icon_gorro}
          alt="Icone de um gorro de natal"
        />
      </div>

      <div className={S.secao__pesquisa}>
        <button>
          <img src={Icon_lupa} alt="Ícone de Lupa" />
        </button>
      </div>

      <nav>
        <ul className={S.menu__list}>
          <li className={S.item_list}>
            <img src={Icon_inicio} alt="Icones" />
            Inicio
          </li>

          <li className={S.item__list}>
            <img src={Icon_filme} alt="Icones" />
            Filmes
          </li>

          <li className={S.item__list}>
            <img src={Icon_series} alt="Icones" />
            Séries
          </li>

          <li className={S.item__list}>
            <img src={Icon_lista} alt="Icones" />
            Minha Lista
          </li>

          <li className={S.item__list}>
            <img src={Icon_configuracoes} alt="Icones" />
            Configurações
          </li>
        </ul>
      </nav>

      <div className={S.secao__logo}>
        <img src={logo} alt="Logo" />
      </div>
    </header>
  )
}
