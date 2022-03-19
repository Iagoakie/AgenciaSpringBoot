import React from "react";

export default function Menu() {
    return (
        <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-4 col-xs-6">
                    <a class="site-title"><span>Agência</span>Perfect</a>
                    <p>Somos uma agência de viagens focada em soluções criativas e orientadas a resultados.</p>
                    <p>Medimos nosso sucesso pelos resultados que geramos para nossos clientes.</p>
                </div>
                <div class="col-lg-offset-4 col-md-3 col-sm-4 col-md-offset-2 col-sm-offset-0 col-xs-6 ">
                    <h3>Fale Conosco</h3>
                    <ul class="list-unstyled contact-links">
                        <li><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:iagocaldas58@gmail.com">iagocaldas58@gmail.com</a></li>
                        <li><i class="fa fa-phone" aria-hidden="true"></i><a href="tel:+5521998231440">+55 (21) 998231-440 </a></li>
                        <li><i class="fa fa-fax" aria-hidden="true"></i><a href="+37400900000">+374 (00) 90 00 00</a></li>
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i><p>201 Porã, Rio de Janeiro</p></li>
                    </ul>
                </div>
                <div class="clearfix visible-xs"></div>
                <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                    <h3>Links em destaque</h3>
                    <ul class="list-unstyled">
                        <li class="active"><a href="/">Inicio</a></li>
                        <li><a href="/Promo">Promoções</a></li>
                        <li><a href="/Destinos">Destinos</a></li>
                        <li><a href="/Contato">Contato</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-xs-8">   
                    </div>
                    <div class="col-xs-4">
                        <div class="text-right">
                            <p>&copy; AgênciaPerfect</p>
                            <p>Todos direitos Reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}