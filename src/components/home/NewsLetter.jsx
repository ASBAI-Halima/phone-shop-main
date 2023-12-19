import React from "react";

export default function NewsLetter() {
  return (
    <>
      <section className="section newsletter" id="contact">
        <div className="container">
          <div className="newsletter__content">
            <div className="newsletter__data">
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>
                A short sentence describing what someone will receive by
                subscribing
              </p>
            </div>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter__email"
              />
              <a className="newsletter__link" href="#">
                subscribe
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
