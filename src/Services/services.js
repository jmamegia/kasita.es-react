const url = process.env.REACT_APP_API_URL;

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getSections = async () => {
  let res = await fetch(`${url}/sections`);
  let data = await res.json();
  return data;
};

export const login = async (credentials) => {
  options.method = "PUT";
  options.headers["Content-Type"] = "application/json";
  options.body = JSON.stringify(credentials);
  let res = await fetch(`${url}/login`, options);
  let data = await res.json();
  return data ? data : false;
};

export const updateLink = async (link, token) => {
  options.method = "PUT";
  options.body = JSON.stringify(link);
  options.headers.Authorization = token;
  let res = await fetch(`${url}/link`, options);
  return res;
};

export const deleteLink = async (link, token) => {
  options.method = "DELETE";
  options.headers.Authorization = token;
  options.body = JSON.stringify(link);
  let res = await fetch(`${url}/link`, options);
  return res;
};

export const deleteSection = async (section, token) => {
  options.method = "DELETE";
  options.body = JSON.stringify(section);
  options.headers.Authorization = token;
  let res = await fetch(`${url}/section`, options);
  return res;
};

export const updateSection = async (section, token) => {
  options.method = "PUT";
  options.body = JSON.stringify(section);
  options.headers.Authorization = token;
  let res = await fetch(`${url}/section`, options);
  return res;
};
