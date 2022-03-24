import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DestinoUserService from "../../services/DestinoUserService";
import NovoUserService from "../../services/NovoUserService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cPF, setCpf] = useState("");
  const [email, setEmail] = useState("");

  const [destino, setDestino] = useState({ id_Destino: "", cidade: ""});


  const [DestinoUser, setDestinoUser] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const getAllDestinoUser = () => {
    DestinoUserService.getAllDestinoUser()
      .then((response) => {
        setDestinoUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinoUser();
  }, []);

  const criarOuEditarNovoUser = (e) => {
    e.preventDefault();

    const user = { nome, idade, cPF, email, destino};
    console.log(user)
    if (id) {
      NovoUserService.updateNovoUser(id, user).then((response) => {
        navigate("/NovoUser");
      });
    } else {
        NovoUserService.createNovoUser(user).then((response) => {
        navigate("/NovoUser");
      });
    }
  };

  useEffect(() => {
    function getNovoUserById() {
      if (id) {
        NovoUserService.getNovoUserById(id)
          .then((response) => {
            setNome(response.data.nome);
            setIdade(response.data.idade);
            setCpf(response.data.cPF);
            setEmail(response.data.email);

            setDestino({
              id_Destino: response.data.destino.id_Destino,
              cidade: response.data.destino.Cidade,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getNovoUserById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Idade" className="form-label">
              Idade
            </label>
            <input
              type="text"
              id="Idade"
              className="form-control"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="Cpf"
              value={cPF}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Telefone" className="form-label">
           Email
            </label>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              placeholder="Telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div className="form-group mb-3">
            <label htmlFor="DestinoId_destino" className="form-label">
              Destino
            </label>
            <select
              id="DestinoId_destino"
              name="DestinoId_destino"
              className="form-select"
              onChange={(e) =>
                setDestino({ id_Destino: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? destino.Cidade : 'Escolha um Destino'}</option>
              {DestinoUser.map((destino) => (
                <option key={destino.id_Destino} value={destino.id_Destino}>
                  {destino.cidade} {destino.pais}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarNovoUser(e)}
          >
            Enviar
          </button>
          <Link
            to="/NovoUsers"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}