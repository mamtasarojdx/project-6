import React from "react";
import "./Login.css";
import { GrFacebookOption } from "react-icons/gr";

function LoginPage() {
  return (
    <>
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
            <div class="row w-100 mx-0">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div class="admin-logo2">
                    <img src="https://demo.bootstrapdash.com/star-admin2-free/template/images/logo.svg" alt="logo" />
                  </div>
                  <h4 className="started-text">Hello! let's get started</h4>
                  <h6 class="Sign-continue">Sign in to continue.</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="mt-3">
                      <div class=" font-weight-medium sign-btn" href="../../index.html">
                        SIGN IN
                      </div>
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                      <div class="sign-check">
                        <label class="sign-check-label text-muted">
                          <input type="checkbox" class="form-check-input" />
                          Keep me signed in
                          <i class="input-helper"></i>
                        </label>
                      </div>
                      <a href="#" class="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                    <div class="mb-2">
                      <button type="button" class="btn4 btn-block btn4-facebook auth-form-btn4">
                        <span className="facebook-icon">
                          <GrFacebookOption />
                        </span>{" "}
                     <span className="facebook-text"> Connect using facebook</span>  
                      </button>
                    </div>
                    <div class="text-center mt-4  account">
                      Don't have an account?{" "}
                      <a href="register.html" class="text-primary">
                        Create
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
