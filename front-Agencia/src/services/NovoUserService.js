import axios from "axios";

const NovoUser_API_URL = "http://localhost:8080/NovoUser";

class NovoUserService {
  getAllNovoUser() {
    return axios.get(NovoUser_API_URL);
  }

  createNovoUser(user) {
    return axios.post(NovoUser_API_URL, user);
  }

  getNovoUserById(userId) {
    return axios.get(NovoUser_API_URL + "/" + userId);
  }

  updateNovoUser(userId, user) {
    return axios.put(NovoUser_API_URL + "/" + userId, user);
  }

  deleteNovoUser(userId) {
    return axios.delete(NovoUser_API_URL + "/" + userId);
  }
}

export default new NovoUserService();