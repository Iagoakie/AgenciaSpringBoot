import React from "react";

export default function Home() {
    return (
        
        <>
  <div id="hero" className="hero overlay">
    <div className="hero-content">
      <div className="hero-text">
        <h1>A sua história começa a partir daqui.</h1>
        <p>Tenha as melhores opçoes de viagens na palma da sua mão.</p>
      </div>
    </div>
  </div>
  <main id="main" className="site-main">
    <section className="site-section section-portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="heading-separator">As Melhores opções</h2>
          <p className="subheading-text">Os melhores pacotes abaixo :)</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img src="img/foto_1485.jpg" className="img-res" alt="" />
              <h4 className="portfolio-item-title">Nova Zelândia </h4>
              <a href="/NovaZelandia">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/adrien-eBKbKMiE03c-unsplash (1).jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">Paris</h4>
              <a href="/Paris">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/mountain-of-bora-bora.jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">
              BORA BORA
              POLINÉSIA FRANCESA</h4>
              <a href="/BoraBora">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/hotel-viva-porto-de-galinhas.jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">Porto de Galinhas </h4>
              <a href="/Porto">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/img-20180601-124027124.jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">Gramado Rio grande do Sul</h4>
              <a href="/Gramado">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img src="img/jericoacoara.jpg" className="img-res" alt="" />
              <h4 className="portfolio-item-title">Jericoacoara</h4>
              <a href="/Jericoacoara">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/Grande-Barreira.jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">A Grande Barreira de Corais, Austrália</h4>
              <a href="/Australia">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="portfolio-item">
              <img
                src="img/another-view-form-room.jpg"
                className="img-res"
                alt=""
              />
              <h4 className="portfolio-item-title">Zona Arqueológica de Tulum</h4>
              <a href="/Tulum">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="site-section section-services gray-bg text-center">
      <div className="container">
        <h2 className="heading-separator">Nossos Serviços</h2>
        <p className="subheading-text">
          Saiba mais sobre os nossos serviços :){" "}
        </p>
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-binóculos (1).svg" alt="" />
              <h3 className="service-title">Visão</h3>
              <p className="service-info">
                {" "}
                Tenha os melhores lugares avaliados por especialistas na area!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-serviços.svg" alt="" />
              <h3 className="service-title">Soluçoes</h3>
              <p className="service-info">
                Somos uma agência focada nas soluçoes e entrega de resultado positivos para os nossos clientes.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-sincronizar.svg" alt="" />
              <h3 className="service-title">Sincronia </h3>
              <p className="service-info">
                Obtenha as melhores informaçoes referente as viagens disponiveis no mercado em tempo real.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-fotografia.svg" alt="" />
              <h3 className="service-title">Fotografia</h3>
              <p className="service-info">
                Tire as melhores fotos em suas viagens com um dos nossos pacotes que inclue sessoes de fotos .
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-usuário-masculino.svg" alt="" />
              <h3 className="service-title">Suporte</h3>
              <p className="service-info">
              O Suporte da AgenciaLegacy está aqui para ajudar estamos online 24 horas!{" "}
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-sol.svg" alt="" />
              <h3 className="service-title">Estações</h3>
              <p className="service-info">
                Selecione a sua viagem de acordo com a sua estação preferida e aproveite ao maximo!
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-notícias.svg" alt="" />
              <h3 className="service-title">Noticias</h3>
              <p className="service-info">
              Obtenha as melhores informaçoes referente as viagens disponiveis no mercado em tempo real.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className="service">
              <img src="img/icons8-ok.svg" alt="" />
              <h3 className="service-title">Responsabilidade</h3>
              <p className="service-info">Somos uma das melhores empresas da area, com um grande numero de aprovaçoes pelos nossos clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="site-section section-features">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h2>AgenciaLegacy</h2>
            <p>
            Preços incríveis, Volte a sonhar com a sua próxima viagem e compre com tranquilidade. Compre Com Tranquilidade com Pacotes de Viagem para Brasil e para fora também!
            </p>
          </div>
          <div className="col-sm-7 hidden-xs">
            <img src="img/undraw_World_re_768g.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className="site-section section-newsletter text-center">
      <div className="container">
        <h2>Assine nossos boletins</h2>
        <form className="form-group newsletter-group">
          <input
            type="email"
            className="form-control"
            placeholder="Your e-mail"
            required=""
          />
          <button className="btn btn-green" type="button">
            Assinar
          </button>
        </form>
      </div>
    </section>
  </main>
</>

    );
}

