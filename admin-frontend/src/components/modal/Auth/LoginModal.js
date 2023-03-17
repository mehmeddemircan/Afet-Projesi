import { Modal } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import {
  Login,
  register as _register,
} from "../../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const LoginModal = ({ showLoginModal, handleCancelLoginModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [register, setRegister] = useState(false);

  const auth = useSelector((state) => state.auth);

  // toggle button
  const handleRegisterLogin = () => {
    setRegister((prev) => !prev);
  };

  const userSignup = () => {
    const user = { name, email, password };

    dispatch(_register(user));
  };
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();

    if (register) {
      userSignup();
    } else {
      dispatch(Login({ email, password }));
    }
  };

  useEffect(() => {
    if (auth.authenticate == true) {
      handleCancelLoginModal();
    }
  }, [auth.authenticate]);

  return (
    <Fragment>
      <Modal
        centered
        open={showLoginModal}
        footer={null}
        onCancel={handleCancelLoginModal}
      >
        <div class=" d-flex align-items-center h-100 ">
          <div class="container h-100 ">
            <div class="row d-flex justify-content-center align-items-center h-100 ">
              <div class=" col-md-12 ">
                <div style={{ borderRadius: "15px" }}>
                  <div className="d-flex mb-4 justify-content-between">
                    <button
                      class="btn btn-light rounded-pill text-white"
                      style={{
                        border: "1px solid rgb(180,180,180)",
                        backgroundColor: "#1890ff",
                      }}
                      onClick={handleRegisterLogin}
                    >
                      {register ? "Login" : "Register"}
                    </button>
                  </div>
                  <div className="row mb-4">
                    <h4 className="text-center ">
                      {!register ? "Login" : "Register"}
                    </h4>
                  </div>
                  <form>
                    {register && (
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                    )}

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div class="form-check d-flex justify-content-between mb-3">
                      <div>
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          class="form-check-label"
                          for="form2Example3g"
                          style={{ fontSize: "15px" }}
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        <a
                          href="/forgot-password"
                          className="text-dark"
                          style={{ textDecorationLine: "underline" }}
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div class="form-check d-flex justify-content-start mb-3">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label
                        class="form-check-label"
                        for="form2Example3g"
                        style={{ fontSize: "15px" }}
                      >
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn  btn-block btn-lg gradient-custom-4 rounded-pill mt-3  w-100 text-white"
                        style={{ backgroundColor: "#222" }}
                        onClick={userLogin}
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-3 mb-0">
                      Have already an account?{" "}
                      <a
                        class="fw-bold text-body"
                        onClick={handleRegisterLogin}
                      >
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default LoginModal;
