import React from "react";

export default function Menu() {
    return (

        <div classname="row ">
        <div classname="medium-12 columns">
          <header id="masthead" className="site-header">
            <nav id="primary-navigation" className="site-navigation">
              <div className="container">
                <div className="navbar-header">
                  
                  <a className="site-title">
                   
                    <span>Agência</span>Perfect
                  </a>
                </div>   
                
   
  <div className="collapse navbar-collapse" id="agency-navbar-collapse">
  <ul className="nav navbar-nav navbar-right">
    <li className="active">
      <a href="/" data-toggle="dropdown">
        Home
      </a>
    </li>

    <li>
      <a href="/Promo">Promoções</a>
    </li>
    <li>
      <a href="/Destinos">Destinos</a>
    </li>
    <li>
      <a href="/Contato">Contato</a>
    </li>
    <li>
      <a href="/Cadastro">Cadastro</a>
    </li>
  </ul>
</div>

              </div>
            </nav>
          </header>
        </div>
      </div>
    );
}