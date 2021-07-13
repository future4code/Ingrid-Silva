import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faVideo,
  faTh,
  faBell,
  faUserCircle,
  faPlay,
  faHome,
  faCompass,
  faPlayCircle,
  faPhotoVideo,
  faClock,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div className="tela-inteira">
      <header className="container">
        <div className="logo">
          <FontAwesomeIcon className="icone icone-player" icon={faPlay} />
          <h1>LabeTube</h1>
        </div>
        <div className="input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Pesquisar"
            id="campoDeBusca"
          />
          <button className="btn-input">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="icones">
          <FontAwesomeIcon className="icone" icon={faVideo} />
          <FontAwesomeIcon className="icone" icon={faTh} />
          <FontAwesomeIcon className="icone" icon={faBell} />
          <FontAwesomeIcon className="icone" icon={faUserCircle} />
        </div>
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faHome} />
                Início
              </a>
            </li>
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faCompass} />
                Explorar
              </a>
            </li>
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faPlayCircle} />
                Inscrições
              </a>
            </li>
            <hr />
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faPhotoVideo} />
                Biblioteca
              </a>
            </li>
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faClock} />
                Histórico
              </a>
            </li>
            <li className="botoes-menu-vertical">
              <a>
                <FontAwesomeIcon className="icone" icon={faTv} />
                Seus vídeos
              </a>
            </li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=2 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=3 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=4 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=5 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=6 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media7" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=7 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=8 " alt="" />
            <div>
              <h4>{titulo}</h4>
              <p>25 mi de visualizações há 1 ano </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <h4 className="text-footer">Developed by Ingrid Flack ©2021</h4>
      </footer>
    </div>
  );
}

export default App;
