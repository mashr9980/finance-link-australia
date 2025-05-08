import IndividualTailoredSolution from "./assets/Tailored Lending Options.webp";
import FastLoan from "./assets/fastClock1.webp";
import CompetitiveInterest from "./assets/Low Interest1.webp";
import arrow from "./assets/arrow2.png"
import "./Process.css"
export function Process() {
    return (
        <div className="timeline-main" style={{filter:"grayscale(1"}}>
        <div className="timeline-wrap">
          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">Fast Loan <br /> Applications</h2>
                {/* <h6 className="timeline-card-subhead">Jan - 2021 to April - 2022</h6> */}
              </div>
              <p className="timeline-card-text">
              Get your loan approved quickly with our simple application process.
              Minimal paperwork. Maximum speed.
              </p>
            </div>
          </div>
          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">Individually <br /> Tailored Solutions</h2>
                {/* <h6 className="timeline-card-subhead">Jan - 2021 to April - 2022</h6> */}
              </div>
              <p className="timeline-card-text">
              We craft loan options that fit your unique financial goals.
              One size doesn’t fit all — and we don’t believe it should.
              </p>
            </div>
          </div>
          <div className="timeline-card">
            <div className="timeline-card-wrap">
              <div className="card-head-wrap">
                <h2 className="timeline-card-head">Competitive <br /> Interest Rates</h2>
                {/* <h6 className="timeline-card-subhead">Jan - 2021 to April - 2022</h6> */}
              </div>
              <p className="timeline-card-text">
              Enjoy low interest rates that save you money over time.
              Fair rates. Better value.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}