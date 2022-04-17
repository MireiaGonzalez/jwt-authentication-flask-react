const getState = ({ getStore, getActions, setStore }) => {
  const URL =
    "https://3001-mireiagonzalez-jwtauthen-jg8v8jj70jv.ws-eu40.gitpod.io";

  return {
    store: {
      token: localStorage.token,
    },
    actions: {
      registerUser: (email, password) => {
        fetch(URL + "/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      },

      login: (email, password) => {
        const store = getStore();

        fetch(URL + "/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, password: password }),
        })
          .then((res) => res.json())
          .then((data) => {
            setStore({ token: data });
            localStorage.setItem("token", JSON.stringify(data));
          })
          .catch((err) => console.log(err));
      },

      validation: () => {
        const store = getStore();
        fetch(URL + "/api/user/validate", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data, store.token))
          .catch((err) => console.log(err));
      },
    },
  };
};

export default getState;
