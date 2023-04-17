//j'import mon parametrage Axios
import Axios from "../api/axios";
//////////////////////////////////////////////
//gestion de ma connexion à l'API/////////////
//////////////////////////////////////////////

//Authentification//
let login = (data) => {
  return Axios.post("/login", data);
};

let logout = (id, data) => {
  return Axios.put(`/logoutUser/${id}`, data);
};

let register = (data) => {
  return Axios.post("/userCreate", data);
};

let emailConfirm = (activateCode) => {
  return Axios.post(`/emailConfirm/${activateCode}`);
};

let forgotPassword = (data) => {
  return Axios.post("/forgotPassword", data);
};

let resetPassword = (data, token) => {
  return Axios.post(`/resetPassword/${token}`, data);
};

//Professionnels//
let createProfilPro = (data, id) => {
  return Axios.post(`/createProfilPro/${id}`, data);
};

let checkProfilValide = (id) => {
  return Axios.post(`/checkProfilValide/${id}`);
};
let showProfilePro = (id) => {
  return Axios.get(`/showProfilPro/${id}`);
};
let uploadPro = (data) => {
  return Axios.post(`/uploadAvatarPro`, data);
};

//Customer//
let createProfilCustomer = (data, id) => {
  return Axios.post(`/createProfilCustomer/${id}`, data);
};
let checkProfilCustomerValide = (id) => {
  return Axios.post(`/checkProfilCustomerValide/${id}`);
};
let showProfileCustomer = (id) => {
  return Axios.get(`/showProfileCustomer/${id}`);
};
let showCustomerCv = (id) => {
  return Axios.get(`/showCustomerCv/${id}`);
};
let UpdateProfilCustomer = (data, id) => {
  return Axios.put(`/UpdateCustomerProfil/${id}`, data);
};
let uploadAvatar = (data) => {
  return Axios.post(`/uploadAvatar`, data);
};

let uploadCV = (data) => {
  return Axios.post(`/uploadCV`, data);
};

///////////////////////////////////////////////////
//gestion des tokens///////////////////////////////
//////////////////////////////////////////////////
let saveToken = (token) => {
  localStorage.setItem("token", token);
};

// let logout = () => {
//   localStorage.removeItem("token");
// };

let isLogged = () => {
  let token = localStorage.getItem("token");

  return !!token;
};

export const accountService = {
  //tokens//
  logout,
  saveToken,
  isLogged,
  //Authentification//
  login,
  register,
  emailConfirm,
  forgotPassword,
  resetPassword,
  //Professionnels//
  createProfilPro,
  checkProfilValide,
  showProfilePro,
  uploadPro,
  //Customer//
  createProfilCustomer,
  checkProfilCustomerValide,
  showProfileCustomer,
  UpdateProfilCustomer,
  uploadAvatar,
  uploadCV,
  showCustomerCv,
};
