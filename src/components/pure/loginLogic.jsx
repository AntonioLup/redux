import React from "react";
import Login from "../container/login";

function LoginLogic({
  form,
  checkBtn,
  onChangePassword,
  handleLogin,
  required,
  password,
  message,
  username,
  onChangeUsername,
}) {
  return (
    <div style={formContainerStyle}>
      <div>
        <picture className="sm:hidden">
          <img
            style={imgPicture}
            src="https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </picture>
      </div>
      <form onSubmit={handleLogin} ref={form} style={styleForm}>
        <div>
          <i style={iStyle}>{"😎"}</i>
        </div>
        <div>
          <label style={styleLabel} htmlFor="username">
            Username:
          </label>
          <input
            style={styleInput}
            id="username"
            value={username || ""}
            onChange={onChangeUsername}
            type="text"
            placeholder="Username"
            validations={[required]}
          />
        </div>
        <div>
          <label style={styleLabel} htmlFor="email">
            Email:
          </label>
          <input
            style={styleInput}
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label style={styleLabel} htmlFor="current-password">
            Password:
          </label>
          <input
            style={styleInput}
            id="current-password"
            name="password"
            onChange={onChangePassword}
            value={password || ""}
            validations={[required]}
            type="current-password"
            placeholder="*******..."
          />
        </div>
        <div>
          <input type="checkbox" ref={checkBtn} />
          <span>Check</span>
        </div>
        <div>
          <button className="hover:bg-blue-700 font-bold" style={styleButton}>
            Sign in
          </button>
        </div>
      </form>
      {message && (
        <div>
          <p role="alert">{message}</p>
        </div>
      )}
    </div>
  );
}
const formContainerStyle = {
  border: "1px solid",
  padding: "1rem",
  display: "flex",
  flexDirection: "row",
  borderRadius: "4px",
  gap: "15px",
};
const iStyle = {
  fontSize: "2rem",
};
const imgPicture = {
  width: "200px",
  height: "100%",
  objectFit: "cover",

  display: "block",
  borderRadius: "4px",
};
const styleForm = {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
};
const styleLabel = {
  display: "block",
  width: "100%",
  textalign: "start",
  fontSize: "0.7rem",
  margin: "1rem 0 0 0",
};
const styleInput = {
  padding: "0.5rem",
  border: "none",
  borderBottom: "1px solid",
  borderRadius: "4px",
};
const styleButton = {
  margin: "1.5rem",
  padding: "0.35rem 2rem",
};

export default LoginLogic;
