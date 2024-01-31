import React from "react";

const Whyus = () => {
  return (
    <section className="why--us">
      <div className="grid--container">
        <div className="grid">
          <div className="grid---- order--tab--1">
            <div className="grid--wrapper">
              <div className="why--us--content">
                <h3 data-aos="fade-up" data-aos-duration="1000">
                  Why Us?
                </h3>
              </div>
              <div className="why--us--grid">
                <div
                  className="why--us--grid--item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={require("../asstes/image/dolor--icon.svg").default}
                    alt=""
                    className="icon--thumbnuil"
                  />
                  <h3>Simple Easy online investment</h3>
                  <p>
                    Welcome to Kiddy Bank – Where Investing is Made Simple!
                    Discover the ease of online investment with our
                    user-friendly platform. Experience the future of financial
                    growth, tailored to suit your needs. Your journey to secure
                    and rewarding investments begins here, effortlessly. Start
                    your path to financial success with Kiddy Bank – Simple,
                    Easy, and Online!
                  </p>
                </div>
                <div
                  className="why--us--grid--item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={require("../asstes/image/dolor--icon.svg").default}
                    alt=""
                    className="icon--thumbnuil"
                  />
                  <h3>QR Code Enabled</h3>
                  <p>
                    Unlock a Seamless Experience with Kiddy Bank - QR Code
                    Enabled! Elevate your investment journey with the
                    convenience of QR codes. Scan, invest, and watch your wealth
                    grow effortlessly. Say goodbye to complexities, and embrace
                    the simplicity of QR Code Enabled transactions. Your path to
                    financial empowerment just became smoother, exclusively with
                    Kiddy Bank.
                  </p>
                </div>
                <div
                  className="why--us--grid--item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={require("../asstes/image/dolor--icon.svg").default}
                    alt=""
                    className="icon--thumbnuil"
                  />
                  <h3>Committed to Service</h3>
                  <p>
                    At Kiddy Bank, we are Committed to Service Excellence. Our
                    dedication goes beyond investments – it's about delivering a
                    superior experience. Your financial goals matter, and so
                    does your satisfaction. Trust us to provide unparalleled
                    support, transparency, and reliability throughout your
                    journey. Join Kiddy Bank, where commitment meets service,
                    and your success is our priority.
                  </p>
                </div>
                <div
                  className="why--us--grid--item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    src={require("../asstes/image/dolor--icon.svg").default}
                    alt=""
                    className="icon--thumbnuil"
                  />
                  <h3>Online Customer Portal</h3>
                  <p>
                    Welcome to Kiddy Bank's Online Customer Support – your
                    dedicated platform for effortless financial management.
                    Unlock the power of 24/7 access to your investment
                    portfolio, receive real-time updates, and gain personalized
                    insights. At Kiddy Bank, we provide you with a user-friendly
                    interface, ensuring that you have complete control over your
                    investments. Navigate your financial journey seamlessly
                    through our Online Customer Portal, crafted with your
                    convenience in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
