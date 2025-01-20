import S from "./style/footer.module.scss";

import Icon3 from "@img/icons/github.png";
import Icon2 from "@img/icons/instagram.png";
import Icon1 from "@img/icons/linkeding.png";
import Presentes from "@img/icons/presentes.png";



export function Footer() {
  return (
    <footer className={S.footer}>
      <div className={S.containerFooter}>
        <div className={S.redesSociais}>
          <img src={Icon1} alt="Icone Linkeding" />
          <img src={Icon2} alt="Icone Instagram" />
          <img src={Icon3} alt="Icone Github" />
        </div>

        <ul className={S.info}>
          <li>Aluno: Luiz Davi</li>
          <li>Instrutora: Fernanda Corrêa</li>
          <li>Facilitador: João Pedro</li>
          <li>Layout criado para fins natalistícos na escola vai na web</li>
        </ul>

        <img className={S.presentes} src={Presentes} alt="Imagem de Presentes" />
      </div>
    </footer>
  )
}