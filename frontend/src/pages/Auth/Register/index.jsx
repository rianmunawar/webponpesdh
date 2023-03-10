import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  errorMessage,
  successMessage,
} from "../../../components/atoms/alert/alert";
function Register() {
  const navigate = useNavigate();
  const endpoint = process.env.REACT_APP_ENDPOINT;
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post(`${endpoint}/user/register`, { ...data })
      .then((res) => {
        successMessage(res.data.message);
      })
      .catch((err) => errorMessage(err.response.statusText));
    reset();
    navigate("/user/login");
  };
  return (
    <section className="register__area pb-100 pt-50">
      <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
        <ToastContainer />
        <div className="sign__header mb-30 text-center">
          <h2 className="sign__title">Register</h2>
          <p className="sign__desc">
            Register to get access to our dashboard and start managing your
            pages.
          </p>
        </div>
        <div className="sign__wrapper white-bg">
          <div className="sign__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="sign__input-wrapper mb-25">
                <h5>
                  Nama Lengkap <span className="text-danger">*</span>
                </h5>
                <div className="sign__input">
                  <i className="fal fa-user" />
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    {...register("name", {
                      required: "wajib di isi",
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "hanya boleh huruf",
                      },
                    })}
                    onKeyUp={() => trigger("name")}
                  />
                  {errors.name && (
                    <small className="text-danger">
                      {" "}
                      {errors.name.message}
                    </small>
                  )}
                </div>
              </div>
              <div className="sign__input-wrapper mb-25">
                <h5>
                  Email <span className="text-danger">*</span>
                </h5>
                <div className="sign__input">
                  <input
                    type="email"
                    placeholder="e-mail address"
                    {...register("email", {
                      required: "wajib di isi",
                      pattern: {
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "email tidak valid",
                      },
                    })}
                    onKeyUp={() => trigger("email")}
                  />
                  {errors.email && (
                    <small className="text-danger">
                      {" "}
                      {errors.email.message}
                    </small>
                  )}
                  <i className="fal fa-envelope" />
                </div>
              </div>
              <div className="sign__input-wrapper mb-25">
                <h5>
                  Password <span className="text-danger">*</span>
                </h5>
                <div className="sign__input">
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "wajib di isi",
                      pattern: {
                        value: /^\S*$/,
                        message: "tidak boleh ada spasi",
                      },
                      minLength: {
                        value: 8,
                        message: "minimal 8 karakter",
                      },
                    })}
                    onKeyUp={() => trigger("password")}
                  />
                  {errors.password && (
                    <small className="text-danger">
                      {" "}
                      {errors.password.message}
                    </small>
                  )}
                  <i className="fal fa-lock" />
                </div>
              </div>
              <button className="e-btn w-100">
                {" "}
                <span /> Register
              </button>
              <div className="sign__new text-center mt-20">
                <p>
                  Sudah punya akun ? <Link to={"/user/login"}> Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
