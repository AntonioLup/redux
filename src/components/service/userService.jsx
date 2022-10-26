import React from "react";

import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://127.0.0.1:5173/api/test/";

// (Data service)
function getPublicContent() {
  return axios.get(API_URL, "all");
}
function getUserBoard() {
  return axios.get(API_URL, "user", { headers: authHeader() });
}
function getModeratorBoard() {
  return axios.get(API_URL, "mod", { headers: authHeader() });
}
function getAdminBoard() {
  return axios.get(API_URL, "admin", { headers: authHeader() });
}

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
