import React from "react";
import { useNavigate } from "react-router-dom";
import successImg from "../../assets/svg/success.svg";

function Success() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate("/ppdb");
  return (
    <section className="error__area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="error__item text-center">
              <div className="error__thumb">
                <img
                  src={successImg}
                  alt="vector success page dari situs freepik"
                  width={"100%"}
                />
              </div>
              <div className="error__content">
                <h3 className="error__title">Pendaftaran Anda Berhasil</h3>
                <p>Panitia pendaftaran akan segera menghubungi kamu</p>
                <button onClick={handleOnClick} className="e-btn">
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
