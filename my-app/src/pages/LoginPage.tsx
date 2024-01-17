import React from "react";
import "../styles/loginPage.scss";

const LoginPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <h1 className="login-container__title">
            <strong>login</strong>
          </h1>
          <form>
            <div className="email-container">
              <label>
                <img alt="email" title="email" />
                <input name="email" type="email" id="email" placeholder="Email"></input>
              </label>
            </div>

            <div className="password-container">
              <label>
                <img alt="password" title="password" />
                <input name="password" type="password" id="password" placeholder="Password"></input>
              </label>
            </div>

            <div className="agreements-container">
              <label>
                <input name="agreements" type="checkbox"></input>
                <span>Remember me</span>
              </label>
            </div>
            <div>
              <input name="login" type="button" value={'login'}></input>
            </div>
          </form>
          <div>
            <div>
              Or login with
            </div>
            <div>
              <div>
                <img alt=""></img>
                <span>Facebook</span>
              </div>
              <div>
                <img alt=""></img>
                <span>Google</span>
              </div>
            </div>
          </div>
          <div>
            Not a member? <a href="https://developer.mozilla.org">Sing up now</a> 
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
