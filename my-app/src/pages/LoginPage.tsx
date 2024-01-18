import React, { useState } from "react";
import "../styles/loginPage.scss";



enum InputName {
  Email = 'Email',
  Password = 'Password',
  Agreement = 'Agreement',
  Login = 'Login'
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({});


  const handleChange = (e: React.SyntheticEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;

    setFormData(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <div className="main-container">
        <div className="login-container">
          <h1 className="login-container__title">
            <strong>login</strong>
          </h1>
          <form className="login-container__form" onSubmit={handleSubmit}>
            <div>
              <label className="input-container input-container_style">
                <img alt={InputName.Email} title={InputName.Email} src={'../assets/images/letter.png'} className="input-img" />
                <input
                  name={InputName.Email}
                  type="email"
                  id={InputName.Email}
                  placeholder={InputName.Email}
                  // value={ formData[InputName.Email] || ''}
                  onChange={handleChange}>
                </input>
              </label>
            </div>

            <div>
              <label className="input-container input-container_style">
                <img alt={InputName.Password} title={InputName.Password} src={'../assets/images/lock.png'} className="input-img" />
                <input
                  name={InputName.Password}
                  type="password"
                  id={InputName.Password}
                  placeholder={InputName.Password}
                  // value={''}
                  onChange={handleChange}>
                </input>
              </label>
            </div>

            <div>
              <label className="input-container agreements-container">
                <input
                  name={InputName.Agreement}
                  type="checkbox"
                  // value={''}
                  onChange={handleChange}>
                  </input>
                <span>Remember me</span>
              </label>
            </div>
            <div className="input-container login-button">
              <input 
              name={InputName.Login} 
              type="submit"></input>
            </div>
          </form>
          <div className='login-bottom'>
            <div>
              Or login with
            </div>
            <div className='alternative-text-container'>
              <div className='alternative-text'>
                <img alt="Facebook" title="Facebook" src={'../assets/images/facebook.png'} className="alternative-img"></img>
                <span><a href="https://www.facebook.com/" title="Facebook" className="links">Facebook</a></span>
              </div>
              <div className='alternative-text'>
                <img alt="Google" title="Google" src={'../assets/images/google.png'} className="alternative-img"></img>
                <span><a href="https://www.google.com/" title="Google" className="links"> Google</a></span>
              </div>
            </div>
          </div>
          <div className="sign-up-container">
            Not a member? <a href="https://developer.mozilla.org" title="sing up">Sing up now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
