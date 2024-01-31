import React from "react";


function ShortTermPlan() {
  return (
    <>
      <section className="about--portable">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="about--portable--wrapper">
                <div className="about--portable--data">
                  <h2 data-aos="fade-up" data-aos-duration="1000">
                    Short-Term Investment
                  </h2>
                  <p
                    className="highlight--text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    At KiddyBank, we understand that financial goals vary, and
                    short-term investments are a popular choice for those
                    seeking quick returns with different risk preferences. Our
                    Short-Term Investment plans offer three distinctive options
                    tailored to meet your financial objectives
                  </p>
                  <p>
                    At KiddyBank, we prioritize transparency, security, and
                    profitability. Choose the Short-Term Investment plan that
                    aligns with your financial goals, and let us help you
                    achieve the returns you desire. Invest smartly with
                    KiddyBank – where your financial success begins!
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
              <h2 className="term--plan">
                Secure and Steady 6% Monthly Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                With our A category, investors can enjoy a secure and steady 6%
                monthly return on their investments. What sets this option apart
                is not just the attractive return but also the assurance of a
                100% secure investment. We believe in providing you with a
                reliable and predictable source of income.
              </p>
              <p>0.22% Daily profit of the investment amount</p>
              <p>30 Days</p>
            </div>
            <div className="we--commited--data">
              <h2 className="term--plan">
                Low Risk, High Returns 10% Monthly Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                For those who prioritize low risk coupled with high returns, our
                B category is the ideal choice. With a 10% monthly return, this
                option provides a favorable balance between risk and reward.
                Your investment is safeguarded, and you can watch your funds
                grow steadily over the course of the month
              </p>
              <p>0.33% Daily profit of the investment amount</p>
              <p>30 Days</p>
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
                For the risk-takers looking for substantial rewards, our C
                category offers an exciting 15% monthly return. While this
                option carries a higher level of risk, it opens the door to
                potentially significant profits. If you're ready to embrace the
                challenge and maximize your returns, C category is the way to go
              </p>
              <p>0.5% Daily profit of the investment amount</p>
              <p>30 Days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShortTermPlan;
