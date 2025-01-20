import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import S from "./style/header.module.scss";

import Arvore from "@img/icons/arvore-de-natal.png";
import audio from "@img/music/picapau.mp3";


export function Header() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      // Volta ao início do áudio
      audioRef.current.currentTime = 0;
      audioRef.current.loop = true;

      // Inicia o áudio
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <header>
      <div className={S.containerHeader}>
        <div className={S.felizNatal}>
          <img src={Arvore} alt="Árvore de Natal" />
          <h1>Feliz Natal!!!!</h1>
        </div>

        <audio ref={audioRef}>
          <source src={audio} type="audio/mp3" />
        </audio>
        
        {isPlaying ? (
          <button onClick={handlePauseAudio}>
            Pausar
            <IoMdPause />
          </button>
        ) : (
          <button onClick={handlePlayAudio}>
            Tocar
            <FaPlay />
          </button>
        )}

        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#curiosidade-scrool">Curiosidade</a></li>
            <li><a href="#galeria">Galeria</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}