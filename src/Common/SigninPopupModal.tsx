import React, { useState, useEffect } from "react";
import SignupPopupModal from "./SignupPopupModal";
import {
  setAccessToken,
  setIsAuthenticated,
  setResetPassword,
  setuser,
} from "../Redux/Reducers/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { withoutAuthAxios } from "../config/config";
import ForgotPassword from "./ForgotPassword";
import { trimObjValues } from "../Helper";
import { maxUserPhoneLength, minUserPhoneLength } from "../Constants";

function SigninPopupModal() {
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    mobile: "",
    password: "",
  });

  let storedRemember = localStorage.getItem("rememberMe");

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    const storedRememberMe = localStorage.getItem("rememberMe");

    if (storedRememberMe === "true" && storedEmail && storedPassword) {
      setUserInput((prev) => ({
        ...prev,
        email: storedEmail,
        password: storedPassword,
      }));
      setRememberMe(true);
    }
  }, [storedRemember]);

  useEffect(() => {
    const reset_forms = document.getElementsByClassName("reset--form");
    const reset_form = reset_forms[0] as HTMLElement;
    if (reset_form) {
      reset_form.style.display = "none";
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const requestPayload = trimObjValues(userInput);

    if (rememberMe) {
      localStorage.setItem("rememberedEmail", requestPayload.email);
      localStorage.setItem("rememberedPassword", requestPayload.password);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberedEmail");
      localStorage.removeItem("rememberedPassword");
      localStorage.removeItem("rememberMe");
    }

    setLoading(true);
    await withoutAuthAxios()
      .post("/mobile/login", requestPayload)
      .then(
        (response) => {
          setLoading(false);
          console.log("responseData" , response)
          if (response.data.status === "true") {
            const resData = response.data.data
              toast.success("Logged in successfully");
              dispatch(setAccessToken(resData.jwtToken));
              dispatch(setuser(resData));
              dispatch(setIsAuthenticated(true));
              setUserInput({ mobile: "", password: "" });
              document
                .querySelector(".custom--popup")
                ?.classList.remove("active--popup");
          }
          else {
            toast.error(response.data?.message);
          }
        },
        (error) => {
          setLoading(false);
          if (error.response.data.message) {
            toast.error(error.response.data.message);
          } else {
            const obj = error.response.data.errors[0];
            const errormsg = Object.values(obj) || [];
            if (errormsg && errormsg.length > 0) {
              toast.error(`${errormsg[0]}`);
            }
          }
        }
      )
      .catch((error) => {
        console.log("errorrrr", error);
      });
  };

  const handleForgotPass = () => {
    dispatch(setResetPassword(false));
    document.querySelector(".custom--popup")?.classList.remove("active--popup");
    const reset_passwords = document.getElementById("reset--password");
    const element = reset_passwords as HTMLElement;
    if (element) {
      element.style.display = "flex";
    }
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[^0-9-+]/g, ""); // Remove non-numeric, non-hyphen, and non-plus characters
    if (sanitizedValue.match(/^\+?[0-9-]*$/)) {
      setUserInput((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
    }
  };

  return (
    <>
      <section className="custom--popup">
        <span className="close--login">x</span>
        <div className="custom--popup--wrapper">
          <div className="switcher--tabs">
            <ul style={{marginLeft : '0rem'}}>
              <li>
                <a
                  href=""
                  data-id="login--form"
                  className="btn login--tab--item active"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href=""
                  data-id="signin--form"
                  className="btn signin--tab--item"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="login--form active--from" id="login--form">
            <div className="login--form--wrapper">
              <form onSubmit={handleSubmit}>
              <div className="form--group">
              <label htmlFor="phone">
                Phone <span className="required">*</span>
              </label>
              <input
                required
                minLength={minUserPhoneLength}
                maxLength={maxUserPhoneLength}
                value={userInput.mobile}
                name="mobile"
                onChange={handleChangePhone}
                type="text"
                placeholder="Phone"
              />
            </div>

                <div className="form--group password--container">
                  <label htmlFor="password">
                    Password <span className="required">*</span>
                  </label>
                  <a
                    className={`form-icon form-icon-right passcode-switch password-hide--show lg ${showPassword ? "is-hiden" : "is-shown"
                      } `}
                    onClick={() => setShowPassword(!showPassword)}
                    data-target="password"
                  >
                    {showPassword ? (
                      <em className="passcode-icon icon-show icon ni ni-eye"></em>
                    ) : (
                      <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                    )}
                  </a>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={userInput.password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className="form--checkbox">
                  <label htmlFor="rememberme">
                    <input
                      className=""
                      name="rememberme"
                      type="checkbox"
                      id="rememberme"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />{" "}
                    <span>Remember me</span>
                  </label>
                  <span
                    data-category="forgot-pass"
                    onClick={handleForgotPass}
                    className="lost--password"
                  >
                    <a>Lost your password?</a>
                  </span>
                </div>
                <div className="form--action">
                  <button type="submit" className="submit--from btn">
                    {loading ? "Loading.." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <SignupPopupModal />
        </div>
      </section>
      <ForgotPassword />
    </>
  );
}

export default SigninPopupModal;
