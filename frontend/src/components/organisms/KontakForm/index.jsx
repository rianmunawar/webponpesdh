import React from "react";

const KontakForm = () => {
  return (
    <div className="contact__form">
      <form action="assets/mail.php">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input type="text" placeholder="Your Name" name="name" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input type="email" placeholder="Your Email" name="email" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <textarea
                placeholder="Enter Your Message"
                name="message"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-agree  d-flex align-items-center mb-20">
              <input className="e-check-input" type="checkbox" id="e-agree" />
              <label className="e-check-label" htmlFor="e-agree">
                I agree to the<a href="#">Terms &amp; Conditions</a>
              </label>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__btn">
              <button type="submit" className="e-btn">
                Send your message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KontakForm;
