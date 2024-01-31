import React from "react";

function WomenSavingPlan() {
  return (
    <>
      <section className="about--portable">
        <div className="grid--container">
          <div className="grid">
            <div className="grid----">
              <div className="about--portable--wrapper">
                <div className="about--portable--data">
                  <h2 data-aos="fade-up" data-aos-duration="1000">
                    Women saving plan
                  </h2>
                  <p
                    className="highlight--text"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    At KiddyBank, we understand the importance of financial
                    independence, and our Women Saving Plan is crafted to
                    empower women on their journey to secure and prosperous
                    futures. Choose from our range of installment options, each
                    designed to suit varying investment periods
                  </p>
                  <p>
                    We understand trust is crucial. If, at any point, you need
                    to withdraw your principal amount, KiddyBank assures you a
                    hassle-free process within 7 working days. Embark on your
                    financial journey with confidence at KiddyBank – where your
                    aspirations meet financial reality!
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
              <h2 className="term--plan">Secure After 1 Year 24% Return</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                For short-term financial goals, our A category offers a
                lucrative 24% return when customers choose to withdraw after a
                1-year installment period. Secure your financial future with
                KiddyBank, where safety and growth go hand in hand.
              </p>
              <p className="daily-profit">
                Calculated daily, but withdrawal only after completing 1 year
              </p>
              <h2
                className="term--plan"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Maximum Growth After 5 Years: 50% Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Experience maximum growth with our E category, providing an
                exceptional 50% return when withdrawing after completing a
                5-year installment. This plan offers the highest return
                potential for those committed to a more extended investment
                horizon
              </p>
              <p className="daily-profit">
                Calculated daily, to be withdrawn after completing 5 years
              </p>
              <h2
                className="term--plan"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Substantial Returns After 3 Years: 40% Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Planning for the long term? Our C category provides substantial
                returns of 40% when withdrawing after completing a 3-year
                installment. Let your money work for you and witness the growth
                of your investment over the years
              </p>
              <p className="daily-profit">
                Calculated daily, to be withdrawn after completing 3 years
              </p>
            </div>
            <div className="we--commited--data">
              <h2 className="term--plan">
                Steady Growth After 2 Years 36% Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Opt for our B category to experience steady growth with a 36%
                return when withdrawing after completing a 2-year installment.
                This plan strikes the perfect balance between risk and reward,
                ensuring consistent returns for your financial aspirations.
              </p>
              <p className="daily-profit">
                Calculated daily, with withdrawal after completing 2 years
              </p>
              <h2
                className="term--plan"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                High Rewards After 4 Years 44% Return
              </h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                Embrace high rewards with our D category, offering a remarkable
                44% return when withdrawing after completing a 4-year
                installment. This option is perfect for those seeking
                significant profits over a slightly longer investment period.
              </p>
              <p className="daily-profit">
                Calculated daily, for withdrawal after completing 4 years
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WomenSavingPlan;
