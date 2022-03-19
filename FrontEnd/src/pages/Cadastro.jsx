import React from "react";

export default function Contato() {
    return (

        <>
         <div id="hero" className="hero overlay subpage-hero Esc">
    <div className="hero-content">
      <div className="hero-text">
        <h1>Se cadastre</h1>
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
  <div className="row mt-50">
    <div className="col-md-8 col-md-offset-2">
      <h2 className="text-center heading-separator">Cadastro</h2>
      <form>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-sm-12 mt-20">
            <div className="form-group">
              <label htmlFor="name">Password:</label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="col-sm-12 mt-20">
            <div className="form-group">
              <label htmlFor="name">CPF</label>
              <input type="text" class="form-control cpf-mask" placeholder="Ex.: 000.000.000-00">
                  </input>
            </div>
          </div>
        </div>
        <div className="text-center mt-20">
          <button className="btn btn-green">Sign in</button>
        </div>
      </form>
    </div>
  </div>
  {/* /.form */}
</>


    )




};