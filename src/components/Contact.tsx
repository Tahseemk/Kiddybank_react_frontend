import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { authAxios } from "../config/config";
import IsLoadingHOC from "../Common/IsLoadingHOC";
import { trimObjValues } from "../Helper";
import { maxUserPhoneLength, minUserPhoneLength } from "../Constants";

// first_name, last_name, company_name, email, phone, message, feedback

interface MyComponentProps {
  setLoading: (isComponentLoading: boolean) => void;
  isLoading: boolean;
}

function ContactUs(props: MyComponentProps) {
  const { setLoading, isLoading } = props;
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    phone: "",
    message: "",
    feedback: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[^0-9-+]/g, ""); // Remove non-numeric, non-hyphen, and non-plus characters
    if (sanitizedValue.match(/^\+?[0-9-]*$/)) {
      setUserData((prev) => ({
        ...prev,
        [name]: sanitizedValue,
      }));
    }
  };

  const handleModalClose = () => {
    setShowSuccessPopup(false);
  };

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = trimObjValues(userData);
    let validUsername = /^[A-Za-z\s]+$/;
    if (!payload.first_name) {
      toast.error("First name is required!");
    } else if (!validUsername.test(payload.first_name)) {
      toast.error("First name should only contain letters");
    } else if (!payload.last_name) {
      toast.error("Last name is required!");
    } else if (!validUsername.test(payload.last_name)) {
      toast.error("Last Name should only contain letters");
    } else {
      setLoading(true);
      await authAxios()
        .post("/contact/save", payload)
        .then(
          (response) => {
            setLoading(false);
            if (response.data.status === 1) {
              // toast.success(response.data.message);
              setShowSuccessPopup(true);
              setUserData({
                first_name: "",
                last_name: "",
                company_name: "",
                email: "",
                phone: "",
                message: "",
                feedback: "",
              });

              // setTimeout(() => {
              //   setShowSuccessPopup(false);
              // }, 3000);
            } else {
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
    }
  };

  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <>
      <section className="about--portable">
        <div className="grid--container">
          <div
            className="banner--heading d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1>Contact Us</h1>
          </div>
          <div className="grid">
            <div className="grid----">
              <div className="about--portable--wrapper">
                <div className="about--portable--data">
                  <h2 data-aos="fade-up" data-aos-duration="1000">
                    Have Questions or Ready to Start Your Investment Journey?
                    We're Here for You!
                  </h2>
                  <p
                    className="highlight--text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    At KiddyBank, we believe in providing exceptional service
                    and support to our valued investors. Whether you have
                    questions about our investment options, need assistance
                    navigating our platform, or simply want to learn more about
                    how KiddyBank can help you achieve your financial goals, our
                    dedicated team is here to assist you every step of the way.
                  </p>
                  <h3>Empowering Every Investor, Big and Small.</h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    At the core of KiddyBank's mission is the commitment to
                    empower individuals at every stage of their financial
                    journey. Whether you're a seasoned investor or just starting
                    to explore the world of finance, we provide a secure and
                    user-friendly platform to help you achieve your financial
                    goals.
                  </p>
                </div>
                <div className="about--banner">
                  <img
                    src={require("../asstes/image/contact_us.jpg")}
                    alt=" Aboutport"
                    data-aos="fade-in"
                    data-aos-duration="500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="we--committed">
        <div className="grid--container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="we--commited--data">
              <h2>How to Reach Us!</h2>
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Customer Support
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Our friendly and knowledgeable customer support team is
                available to address your inquiries and provide guidance on any
                aspect of your investment journey.
              </p>

              <h2 data-aos="fade-up" data-aos-duration="1000">
                Consultation and Investment Guidance
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Interested in personalized investment advice? Our financial
                experts are ready to guide you towards the investment options
                that align with your goals
              </p>
            </div>
            <div className="we--commited--data">
              <h2>Consultation and Investment Guidance</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Interested in personalized investment advice? Our financial
                experts are ready to guide you towards the investment options
                that align with your goals.
              </p>
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Connect on Social Media
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Stay updated on the latest news, investment tips, and community
                discussions by connecting with us on social media
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact--us">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="contact--us--wrapper">
                <div
                  className="contact--sidebar"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h2>Get in touch</h2>
                  <div className="contact--data">
                    <ul>
                      <li>
                        <div className="contact--data--item">
                          <span className="icons">
                            <img
                              src={require("../asstes/image/lucide-mail.png")}
                              alt="AboutUs"
                              loading="lazy"
                            />
                          </span>
                          <div className="details--item">
                            <h3>Email us</h3>
                            <Link to={"mailto:info@gmail.com"}>
                              info@gmail.com
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact--data--item">
                          <span className="icons">
                            <img
                              src={require("../asstes/image/iconamoon-phone-light.png")}
                              alt="AboutUs"
                              loading="lazy"
                            />
                          </span>
                          <div className="details--item">
                            <h3>Phone</h3>
                            <Link to={"tel:+1 (250) 869-5444"}>
                              +9175001414
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="contact--data--item">
                          <span className="icons">
                            <img
                              src={require("../asstes/image/basil-location-outline.png")}
                              alt="AboutUs"
                              loading="lazy"
                            />
                          </span>
                          <div className="details--item">
                            <h3>Our office Location</h3>
                            {/* <p>Come to discuss at our office.</p> */}
                            <address>Ashok Nagar, New Delhi (110096)</address>
                          </div>
                        </div>
                        <div style={{ margin: "36px", marginBottom: "0px" }}>
                          <b> Our team is here to help you!</b>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="social--hendals">
                    <ul>
                      <li>
                        <Link to="">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"https://www.polyjohn.com/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>PJ</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"https://www.psai.org/"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>PSI</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="contact--us--form"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="default--form">
                    <div className="default--form--wrapper">
                      <div className="form--title">
                        <h2>Tell us more about yourself!</h2>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="form--group">
                          <label htmlFor="name" hidden>
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={35}
                            placeholder="First Name"
                            value={userData.first_name}
                            name="first_name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form--group">
                          <label htmlFor="name" hidden>
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={35}
                            placeholder="Last Name"
                            value={userData.last_name}
                            name="last_name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form--group span--2">
                          <label htmlFor="name" hidden>
                            Company Name
                          </label>
                          <input
                            type="text"
                            required
                            maxLength={60}
                            placeholder="Company Name"
                            value={userData.company_name}
                            name="company_name"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form--group span--2">
                          <label htmlFor="Email" hidden>
                            Email
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Email"
                            value={userData.email}
                            name="email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form--group span--2">
                          <label htmlFor="Email" hidden>
                            Phone
                          </label>
                          <input
                            type="text"
                            required
                            minLength={minUserPhoneLength}
                            maxLength={maxUserPhoneLength}
                            placeholder="Phone"
                            value={userData.phone}
                            name="phone"
                            onChange={handleChangePhone}
                          />
                        </div>
                        <div className="form--group span--2">
                          <label htmlFor="name" hidden>
                            Message
                          </label>
                          <textarea
                            placeholder="Message"
                            required
                            value={userData.message}
                            name="message"
                            onChange={handleChangeTextArea}
                          ></textarea>
                        </div>
                        <div className="form--action span--2">
                          <button type="submit" className="submit--from btn">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showSuccessPopup && (
        <div id="success--popup" className="success--container">
          <span id="close--modal" onClick={handleModalClose}>
            x
          </span>
          <div className="success--content">
            <p>
              Your request has been submited. One of our team members will be
              contacting you shortly.
            </p>
            <button onClick={handleRedirect} className="btn">
              Go to Home Page
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default IsLoadingHOC(ContactUs);
