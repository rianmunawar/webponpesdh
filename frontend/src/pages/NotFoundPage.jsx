import React from "react";
import { Link } from "react-router-dom";
import erroImg from "../assets/img/error/error2.png";

function NotFoundPage() {
  return (
    <section className="error__area pt-50" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
            <div className="error__item text-center">
              <div className="error__thumb mb-45">
                <img src={erroImg} alt="error" width={255} />
              </div>
              <div className="error__content">
                <h3 className="error__title">Page Not Found</h3>
                <p>Please try searching for some other page.</p>
                <Link to={"/"} className="e-btn e-btn-3 e-btn-4">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
