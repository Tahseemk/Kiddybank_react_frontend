import React, { useEffect, useState } from "react";
import { authAxios } from "../config/config";
import { toast } from "react-toastify";
import IsLoadingHOC from "./IsLoadingHOC";
// import { QRCode } from "react-qr-svg";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { trimObjValues, validateEmail } from "../Helper";

interface MyComponentProps {
  setLoading: (isComponentLoading: boolean) => void;
}

const Footer = (props: MyComponentProps) => {
  const { setLoading } = props;
  const [base64QRCode, setBase64QRCode] = useState(null);
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const [accepted, setIsaccepted] = useState<boolean>(false);

  const Isaccepted = localStorage.getItem('cookie-accepted')

  // useEffect(()=>{
  
  //   setIsaccepted(!accepted)
  
  // },[accepted])
  
  const  handleCookieClick=()=>{
  
    localStorage.setItem('cookie-accepted', "true")
    setIsaccepted(true)
  
  }

  const getBase64QRCodeData = async () => {
    setLoading(true);
    await authAxios()
      .get("/qr-code/show")
      .then(
        (response) => {
          setLoading(false);
          if (response.data.status === 1) {
            const qrCode = response.data.data;
            setBase64QRCode(qrCode);
          }
        },
        (error) => {
          setLoading(false);
          toast.error(error.response.data?.message);
        }
      )
      .catch((error) => {
        console.log("errorrrr", error);
      });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let payload = { email, message };
    payload = trimObjValues(payload);
    const isValid = validateEmail(payload.email);
    if (!isValid) {
      toast.error("Invalid email address");
    } else if (!payload.message) {
      toast.error("Please enter message");
    } else if (payload.message.length < 5) {
      toast.error("Message bust be at least 5 character long!");
    } else {
      setLoading(true);
      await authAxios()
        .post("/contact/send-query", payload)
        .then(
          (response) => {
            setLoading(false);
            if (response.data.status === 1) {
              toast.success(response.data.message);
              setEmail("");
              setMessage("");
            }
          },
          (error) => {
            setLoading(false);
            toast.error(error.response.data?.message);
          }
        )
        .catch((error) => {
          console.log("errorrrr", error);
        });
    }
  };

  return (
    <>
    <footer className="footer">
      <div className="grid--container">
        <div className="grid">
          <div className="grid----">
            <div className="grid--wrapper">
              <div className="bold--heading--wrapper">
                <div
                  className="heading--big"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2>Get in touch? </h2>
                </div>
              </div>
              <div
                className="footer--form"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <form onSubmit={handleSubmit}>
                  <div className="form--group">
                    <input
                      type="email"
                      value={email}
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      required
                      minLength={5}
                      placeholder="Message"
                      value={message}
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <div className="submit--btn">
                      <button type="submit">{}</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="contact--details">
                <ul>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    <a href="tel:+91 7575757575">+911 75757575</a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    <a href="mailto:info@go-bold.ca">kiddybank@gmail.com</a>
                  </li>
                  </ul>
                <div
                  className="social--list"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                </div>
              </div>
              <div className="footer--copyright">
                <p
                  className="copyright"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  All Rights Reserved © 2024 Kiddy Bank INC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
     </>
  );
};

export default IsLoadingHOC(Footer);
