import React from "react";

export default function Destinos() {
    return (
  
        
        <>
         <div id="hero" className="hero overlay subpage-hero Dest">
    <div className="hero-content">
      <div className="hero-text">
        <h1> Destino</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Inicio</a>
          </li>
          <li className="breadcrumb-item active">Destino</li>
        </ol>
      </div>
      {/* /.hero-text */}
    </div>
    {/* /.hero-content */}
  </div>
  {/* /.hero */}
  <div className="row mt-50">
    <div className="col-md-8 col-md-offset-2">
      <h2 className="text-center heading-separator">Destino Cadastro</h2>
      <form>
        <div className="row">
          <div className="col-sm-12">
            <div className="form-group">
              <label htmlFor="email">País</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="col-sm-12 mt-20">
            <div className="form-group">
              <label htmlFor="name">Cidade</label>
              <input type="password" className="form-control" id="password" />
            </div>
          </div>
          <div className="col-sm-12 mt-20">
            <div className="form-group">
              <label htmlFor="name">Saida</label>
              <input type="password" className="form-control" id="password" /> 
            </div>
            <div className="form-group">
              <label htmlFor="name">Chegada</label>
              <input type="password" className="form-control" id="password" /> 
            </div>
            </div>
          </div>
        <div className="text-center mt-20">
          <button className="btn btn-green">Cadastrar</button>
        </div>
      </form>
    </div>
  </div>
  {/* /.form */}
</>
    );
}