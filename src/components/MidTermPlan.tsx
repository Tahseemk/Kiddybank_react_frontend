import React from "react";

function MidTermPlan() {
  return (
    <>
      <section className="about--portable">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="about--portable--wrapper">
                <div className="about--portable--data">
                  <h2 data-aos="fade-up" data-aos-duration="1000">
                    Mid-Term Investment
                  </h2>
                  <p
                    className="highlight--text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    At Kiddy Bank, we recognize the importance of mid-term
                    financial planning, and our Mid-Term Investment plans are
                    designed to cater to investors seeking a balance between
                    stability and growth. Explore our three distinct options,
                    each crafted to suit different risk appetites
                  </p>
                  <p>
                    At KiddyBank, we believe in empowering our investors with
                    diverse opportunities for growth and stability. Choose the
                    Mid-Term Investment plan that aligns with your financial
                    objectives and embark on a journey of financial success.
                    Invest with confidence at KiddyBank – where your financial
                    goals come to life!
                  </p>
                </div>
                <div className="about--banner">
                  <img
                    src={require("../asstes/image/aboutus-1.jpg")}
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
              <h2 className="term--plan">Secure Growth 2% Monthly Return</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Invest with confidence in our A category, providing a secure 2%
                monthly return. We prioritize the safety of your investment
                while ensuring steady growth over the mid-term period.
                Experience the assurance of a 100% secure investment with
                reliable returns
              </p>
              <p>0.07% Daily profit of the investment amount</p>
              <p>180 Days</p>
            </div>
            <div className="we--commited--data">
              <h2 className="term--plan">
                Low Risk, Consistent Returns 4% Monthly Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                For investors seeking a balance between low risk and consistent
                returns, our B category offers a 4% monthly return. Enjoy the
                benefits of a controlled risk profile while witnessing your
                investment steadily grow throughout the month.
              </p>
              <p>0.13% Daily profit of the investment amount</p>
              <p>180 Days</p>
            </div>
            <div className="we--commited--data">
              <h2
                className="term--plan"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                High Risk, High Rewards 15% Monthly Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Embrace the potential for high rewards with our C category,
                providing a dynamic 6% monthly return. While this option
                involves a higher level of risk, it opens doors to substantial
                profits for those ready to take on the challenge
              </p>
              <p>0.2% Daily profit of the investment amount</p>
              <p>30 Days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MidTermPlan;
