import React, { useEffect, useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassword } from "../redux/actions/AuthActions";
import { toast } from "react-toastify";
import SuccessResult from "../components/result/SuccessResult";

const ForgotPasswordPage = () => {
  const forgotResetPassword = useSelector((state) => state.forgotResetPassword);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(ForgotPassword({ email }));
    if (!forgotResetPassword.success) {
      setEmail("");
    }
  };

  useEffect(() => {
    if (forgotResetPassword.success) {
      toast(forgotResetPassword.message);
    }
    if (forgotResetPassword.error != null) {
      toast.error(forgotResetPassword.error);
    }
  }, [forgotResetPassword.success, forgotResetPassword.error]);
  return (
    <MainLayout>
      <div class="container d-flex flex-column mt-5">
        <div
          class="row align-items-center justify-content-center"
        >
          {forgotResetPassword.success ? 
          (
            <SuccessResult  />
          ) : 
          <div class="col-12 col-md-8 col-lg-7">
          <div class="card shadow-sm rounded-3 ">
            <div class="card-body p-4">
              <div class="mb-4">
                <h4 className="text-center">Reset your password</h4>
                <p class="mb-2 text-center">
                  Enter your email address and we'll send you a link to reset
                  your password.
                </p>
              </div>

              <form>
                <div class="mb-3">
                  <label for="email" class=" form-label  fs-5">
                    Your email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control  mx-auto"
                    style={{ height: "50px" }}
                    name="email"
                    placeholder="Enter Your Email"
                    required=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3 d-flex justify-content-start">
                  <button
                    type="submit"
                    class="btn rounded-pill text-white w-25 fs-5  mt-4"
                    style={{ background: "#222" }}
                    onClick={handleForgotPassword}
                  >
                    Email me
                  </button>
                </div>
                <p>
                  Don't have an account? <a href="sign-in.html">sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
    

        }
          </div>
    </div>
      {/* success Result  */}
    </MainLayout>
  );
};

export default ForgotPasswordPage;
