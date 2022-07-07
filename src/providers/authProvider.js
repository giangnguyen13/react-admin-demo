import bmo_ad from "../data/bmo_ad";

const TOKEN_EXPIRED_KEY = "expired";

// in src/authProvider.js
export default {
  // called when the user attempts to log in
  // send username and password to the auth server and get back credentials
  login: ({ username }) => {
    //  // Sample Authentication API Request, which return JWT token
    // const request = new Request("http://localhost:8001/authenticate", {
    //   method: "POST",
    //   body: JSON.stringify({ username, password }),
    //   headers: new Headers({ "Content-Type": "application/json" }),
    // });
    // return fetch(request)
    //   .then((response) => {
    //     if (response.status < 200 || response.status >= 300) {
    //       throw new Error(response.statusText);
    //     }
    //     return response.json();
    //   })
    //   .then(({ token }) => inMemoryJWT.setToken(token));

    // // Mimic Authentication request with static data

    // get first user matches username
    const user = bmo_ad.filter((user) => user.username === username)[0];
    if (user) {
      localStorage.setItem("username", username);
      return Promise.resolve();
    }
    return Promise.reject();
  },

  // called when the user clicks on the logout button
  // remove local credentials and notify the auth server that the user logged out
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },

  // called when the API returns an error
  // when the dataProvider returns an error, check if this is an authentication error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  // called when the user navigates to a new location, to check for authentication
  // when the user navigates, make sure that their credentials are still valid
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },

  // get the user's profile
  getIdentity: () => Promise.resolve(),

  // get the user permissions (optional)
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => {
    return Promise.resolve();
  },
};
