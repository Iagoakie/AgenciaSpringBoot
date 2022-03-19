import React from "react";

export default function Contato() {
    return (
        <>
  <div id="hero" className="hero overlay subpage-hero Tel">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Contato</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Inicio</a>
          </li>
          <li className="breadcrumb-item active">Contato</li>
        </ol>
      </div>
      {/* /.hero-text */}
    </div>
    {/* /.hero-content */}
  </div>
  {/* /.hero */}
  <main id="main" className="site-main">
    <section className="site-section subpage-site-section section-contact-us">
      <div className="container">
        <div className="row">
          <div className="col-sm-7">
            <h2>Envie a sua mensagem </h2>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Motivo:</label>
                <input className="form-control" id="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensagem:</label>
                <textarea
                  className="form-control form-control-comment"
                  id="message"
                  defaultValue={""}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-green">Contate-Nos</button>
              </div>
            </form>
          </div>
          <div className="col-sm-5">
            <div className="contact-info">
              <h2>Informação de contato</h2>
              <div className="row">
                <div className="col-sm-12">
                  <h3>Endereço</h3>
                  <ul className="list-unstyled">
                    <li>Rio de Janeiro, Brasil</li>
                    <li>Campo grande</li>
                  </ul>
                  <h3>E-mail</h3>
                  <a href="mailto:pixelperfectmk@gmail.com" target="_blank">
                    pixelperfectmk@gmail.com
                  </a>
                  <h3>Telefone</h3>
                  <a href="tel:2083339296" target="_blank">
                    (208) 333 9296
                  </a>
                  <h3>Fax</h3>
                  <p>(208) 333 9296</p>
                </div>
              </div>
            </div>
            {/* /.contact-info */}
          </div>
        </div>
      </div>
    </section>
    {/* /.section-contact-us */}
  </main>
  {/* /#main */}
</>     
    );
}
