import React from "react";
import { useNavigate } from "react-router-dom";
import erroImg from "../assets/img/error/error2.png";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate(-1);
  return (
    <section className="error__area pt-50 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="error__item text-center">
              <div className="error__thumb mb-45">
                <img src={erroImg} alt="error" />
              </div>
              <div className="error__content">
                <h3 className="error__title">Page Not Found</h3>
                <p>Please try searching for some other page.</p>
                <button
                  onClick={handleOnClick}
                  className="e-btn e-btn-3 e-btn-4"
                >
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

export default NotFoundPage;
