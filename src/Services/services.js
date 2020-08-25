const url = process.env.REACT_APP_API_URL;
const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

const services = {
  getSections: async () => {
    let res = await fetch(`${url}/sections`);
    let data = await res.json();
    return data;
  },

  updateLink: async (link, token) => {
    options.method = "PUT";
    options.body = JSON.stringify(link);
    options.headers.Authorization = token;
    let res = await fetch(`${url}/link`, options);
    return res;
  },

  deleteLink: async (link, token) => {
    options.method = "DELETE";
    options.headers.Authorization = token;
    options.body = JSON.stringify(link);
    let res = await fetch(`${url}/link`, options);
    return res;
  },

  deleteSection: async (section, token) => {
    options.method = "DELETE";
    options.body = JSON.stringify(section);
    options.headers.Authorization = token;
    let res = await fetch(`${url}/section`, options);
    return res;
  },

  updateSection: async (section, token) => {
    options.method = "PUT";
    options.body = JSON.stringify(section);
    options.headers.Authorization = token;
    let res = await fetch(`${url}/section`, options);
    return res;
  },
};

export default services;
