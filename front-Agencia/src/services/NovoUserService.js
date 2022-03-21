import axios from "axios";

const NovoUser_API_URL = "http://localhost:8080/NovoUser";

class NovoUserService {
  getAllLivros() {
    return axios.get(NovoUser_API_URL);
  }

  createLivro(user)) {
    return axios.post(NovoUser_API_URL, );
  }

  getLivroById(userId) {
    return axios.get(NovoUser_API_URL + "/" + userId);
  }

  updateLivro(userId, user) {
    return axios.put(NovoUser_API_URL + "/" + userId, user);
  }

  deleteLivro(userId) {
    return axios.delete(NovoUser_API_URL + "/" + userId);
  }
}

export default new NovoUserService();
