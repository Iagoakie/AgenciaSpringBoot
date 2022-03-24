import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NovoUserService from "../../services/NovoUserService";

export default function Index() {
  const [NovoUser, setNovoUsers] = useState([]);

 const getAllNovoUsers = () => {
    NovoUserService.getAllNovoUsers()
      .then((response) => {
        setNovoUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllNovoUsers();
  }, []);

  const deleteNovoUser = (userId) => {
    NovoUserService.deleteNovoUser(userId)
      .thn((response) => {
        getAllNovoUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro NovoUser</h1>
      </header>
      <div className="container py-3">
        <Link to="/NovoUser-Create" className="btn btn-primary mb-2">
          Criar NovoUser
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Cpf</th>
                <th>Email</th>
                <th>Destino</th>

              </tr>
            </thead>
            <tbody>
              {NovoUser.map((NovoUser) => (
                <tr key={NovoUser.Id_NovoUser}>
                  <td>{NovoUser.Id_NovoUser}</td>
                  <td>{NovoUser.nome}</td>
                  <td>{NovoUser.idade}</td>
                  <td>{NovoUser.cPF}</td>
                  <td>{NovoUser.email}</td>
                
                  <td>
                    {NovoUser.Destino.Cidade} {NovoUser.Destino.Pais}
                  </td>
                  <td className="d-flex">
                    <Link
                      to={`/NovoUser-Update/${NovoUser.id_NovoUser}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteNovoUser(NovoUser.id_NovoUser)}
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