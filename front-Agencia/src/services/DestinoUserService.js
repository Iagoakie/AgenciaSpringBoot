import axios from "axios";

const DESTINOUSER_API_URL = "http://localhost:8080/DestinoUser";

class DestinoUserService {
  getAllAutores() {
    return axios.get(DESTINOUSER_API_URL);
  }

  createAutor(autor) {
    return axios.post(DESTINOUSER_API_URL, autor);
  }

  getAutorById(autorId) {
    return axios.get(DESTINOUSER_API_URL + "/" + autorId);
  }

  updateAutor(autorId, autor) {
    return axios.put(DESTINOUSER_API_URL + "/" + autorId, autor);
  }

  deleteAutor(autorId) {
    return axios.delete(DESTINOUSER_API_URL + "/" + autorId);
  }
}

export default new DestinoUserService();
