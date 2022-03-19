import React from "react";

export default function Promo() {
    return (
        <>
        <div id="hero" className="hero overlay subpage-hero portfolio-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Black Friday</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active">Promoções</li>
              </ol>
            </div>
            {/* /.hero-text */}
          </div>
          {/* /.hero-content */}
        </div>
        {/* /.hero */}
        <main id="main" className="site-main">
          <section className="site-section subpage-site-section section-portfolio">
            <div className="container">
              <ul className="portfolio-sorting list-inline text-center">
                <li>
                  <a className="btn btn-gray active" data-group="all">
                 Reservar!
                  </a>
                  <h2 class="mt-50">Por apenas R$1.000!</h2>
                </li>
              </ul>
           
              <div className="center">
  <div className="property-card">
    <a href="#">
      <div className="property-image">
        <div className="property-image-title">
          {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
        </div>
      </div>
    </a>
    <div className="property-description">
      <h5> Roma </h5>
      <p>
      Lugares para ver, maneiras de explorar e experiências típicas por um preço especial.
      </p>
    </div>
    <a href="#">
      <div className="property-social-icons">
        {/* I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions */}
      </div>
      
    </a>
   
  </div>


</div>


            </div>
          </section>
        
        </main>
      </>
      
    );
}