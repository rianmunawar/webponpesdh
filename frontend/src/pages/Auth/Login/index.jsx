import axios from "axios";
import React from "react";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { errorMessage } from "../../../components/atoms/alert/alert";

function Login() {
  const navigate = useNavigate();
  const endpoint = process.env.REACT_APP_ENDPOINT;
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios
      .post(`${endpoint}/user/login`, { ...data })
      .then((res) => {
        const { token } = res.data.payload;
        const expInFifteenSeconds = new Date(new Date().getTime() + 15 * 1000);
        Cookies.set("token", token, { expires: expInFifteenSeconds });
        navigate("/admin");
        reset();
      })
      .catch((err) => errorMessage(err.response.data.message));
  };
  return (
    <section className="login__area pb-100 pt-50">
      <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
        <ToastContainer />
        <div className="sign__header mb-30 text-center">
          <h2 className="sign__title">Login</h2>
          <p className="sign__desc">
            Silahkan login dengan menggunakan akun yang telah anda daftarkan
          </p>
        </div>
        <div className="sign__wrapper white-bg">
          <div className="sign__form">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <span /> Login
              </button>
              <div className="sign__new text-center mt-20">
                <p>
                  Not have account ? please{" "}
                  <Link to={"/user/register"}> register</Link> here
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
