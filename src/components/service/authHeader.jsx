import React from "react";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.accessToken) {
    return {
      Authorization: "Antoni00" + user.accessToken,
    };
  } else {
    return {};
  }
}
