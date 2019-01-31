import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = process.env.REACT_APP_PLATO_API_URI;

const responseBody = res => res.body;

let token = null;

const tokenPlugin = req => {
    if (token) {      
      req.set('authorization', `Bearer ${token}`);
    }
}

const requests = {
  del: url => superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url => superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
};

const Auth = {
  current: () => requests.get('/user'),
  login: (email, password) => requests.post('/login', { eternal: true, username: email, password:password }),
  register: (username, email, password) => requests.post('/users', { user: { username, email, password } }),
  save: user => requests.put('/user', { user }),
};

const Request = {
  requestToMatch: (isOb) => requests.get(`/mentee/toMatch?isOb=${isOb}`),
};

const Profile = {
  getProfileInfo: (id) => requests.get(`/mentee/${id}`),
};

export default {
  Auth,
  Request,
  Profile,
  setToken: _token => { token = _token },
};
