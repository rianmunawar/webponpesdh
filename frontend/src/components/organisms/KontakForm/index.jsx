import React, { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { successMessage, errorMessage } from "../../atoms/alert/alert";

const KontakForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const endpoint = process.env.REACT_APP_ENDPOINT;
  console.log(endpoint);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${endpoint}/send-email`, { name, email, subject, message })
      .then((res) => {
        console.log(res.data);
        successMessage(res.data.message);
      })
      .catch((err) => {
        errorMessage(err.message);
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <div className="contact__form">
      <ToastContainer />
      <form onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="700">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-md-6">
            <div className="contact__form-input">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__form-input">
              <textarea
                placeholder="Enter Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="contact__btn">
              <button type="submit" className="e-btn">
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default KontakForm;
