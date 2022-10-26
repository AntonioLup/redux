import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { isEmail } from "validator";
import LoginLogic from "../pure/loginLogic";
import { login } from "../../actions/auth";
function Login({ children }) {
  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  let navigate = useNavigate();

  const form = useRef(null);
  const checkBtn = useRef(null);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState();

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          navigate("/home");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <LoginLogic
        form={form}
        username={username}
        required={required}
        checkBtn={checkBtn}
        password={password}
        onChangePassword={onChangePassword}
        handleLogin={handleLogin}
        message={message}
        onChangeUsername={onChangeUsername}
      />
    </>
  );
}

export default Login;
