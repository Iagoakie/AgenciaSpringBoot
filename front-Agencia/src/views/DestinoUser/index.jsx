import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoUserService from "../../services/DestinoUserService";

export default function Index() {
  const [destino, setDestino] = useState([]);

  const getAllDestino = () => {
    DestinoUserService.getAllDestino()
      .then((response) => {
        setDestino(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestino();
  }, []);

  const deleteDestino = (destinoId) => {
    DestinoUserService.deleteDestino(destinoId)
      .then((response) => {
        getAllDestino();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Informar Destino</h1>
      </header>
      <div className="container p-5">
        <Link to="/DestinoUser-Create" className="btn btn-primary mb-2">
          Criar Destino
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Cidade</th>
                <th>País</th>

              </tr>
            </thead>
            <tbody>
              {destino.map((destino) => (
                <tr key={destino.Id_Destino}>
                  <td>{destino.Id_Destino}</td>
                  <td>{destino.Cidade}</td>
                  <td>{destino.Pais}</td>
                  <td className="d-flex">
                    <Link
                      to={`/DestinoUser-Update/${destino.Id_Destino}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestino(destino.Id_Destino)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}