import React, { Fragment, useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation , useParams } from 'react-router-dom'
import { ResetPassword } from '../redux/actions/AuthActions'
import { toast } from 'react-toastify'
import MetaTitle from '../meta/MetaTitle'

const ResetPasswordPage = () => {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
 const {token} = useParams()

  const dispatch = useDispatch()

  const forgotResetPassword = useSelector((state) => state.forgotResetPassword)

  const handleResetPassword = (e) => {
    e.preventDefault()


      dispatch(ResetPassword(token,{password,confirmPassword}))
    
     
  }

  useEffect(() => {
    if (forgotResetPassword.resetSuccess) {
        toast(forgotResetPassword.message)
    }
    if (forgotResetPassword.resetSuccess) {
      toast.error(forgotResetPassword.error)
    }
  }, [forgotResetPassword.resetSuccess])


  return (
   
        <MainLayout>
          <MetaTitle title="Şifrenizi Yenileyiniz" name="şifreYenileme" content="şifreYenileme" />
<div class="container d-flex flex-column mt-5">
        <div
          class="row align-items-center justify-content-center
        "
        >
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
                    <label for="password" class=" form-label  fs-5">
                     New Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      class="form-control  "
                      style={{ height: "50px" }}
                      name="password"
                      placeholder="new password"
                      required="Please it is required"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="password" class=" form-label  fs-5">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      class="form-control  "
                      style={{ height: "50px" }}
                      name="confirm-password"
                      placeholder="Confirm password"
                      required="Please it is required"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-start">
                    <button
                      type="submit"
                      class="btn rounded-pill text-white w-25 fs-5  mt-4"
                      style={{ background: "#222" }}
                      onClick={handleResetPassword}
                    >
                      Submit
                    </button>
                  </div>
                  <p>
                    Don't have an account? <a href="sign-in.html">sign in</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </MainLayout>
 
  )
}

export default ResetPasswordPage