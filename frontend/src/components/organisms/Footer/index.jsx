import React from "react";
import logo from "../../../assets/img/logo/logo-footer.png";
import SocialIcon from "../../atoms/SocialIcon";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area footer-bg mt-100">
        <div className="footer__top pt-190 pb-40">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <div className="footer__logo">
                      <a href="index.html">
                        <img src={logo} alt="logo" />
                      </a>
                    </div>
                  </div>
                  <div className="footer__widget-body">
                    <p>
                      Jl. Raya Sadang - Subang Km 12, Karyamekar Cibatu
                      Purwakarta Jawa Barat 41183
                    </p>
                    <div className="footer__social">
                      <ul>
                        <li>
                          <SocialIcon
                            url="https://www.youtube.com/@pojokdh1993"
                            target="_blank"
                            className="fb"
                            classImg="social_facebook"
                          />
                        </li>
                        <li>
                          <SocialIcon
                            url="https://www.youtube.com/@pojokdh1993"
                            target="_blank"
                            className="yt"
                            classImg="social_youtube"
                          />
                        </li>
                        <li>
                          <SocialIcon
                            url="https://www.instagram.com/official_makdarulhikmah93"
                            target="_blank"
                            className="ig"
                            classImg="social_instagram"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Site Pages</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link">
                      <ul>
                        <li>
                          <a href="#">Beranda</a>
                        </li>
                        <li>
                          <a href="#">Profil</a>
                        </li>
                        <li>
                          <a href="#">Kontak</a>
                        </li>
                        <li>
                          <a href="#">News and Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                <div className="footer__widget mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Platform</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__link">
                      <ul>
                        <li>
                          <a href="#">RA Ar - Rohmah</a>
                        </li>
                        <li>
                          <a href="#">MTs Darul Hikmah</a>
                        </li>
                        <li>
                          <a href="#">MAK Darul Hikmah</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                <div className="footer__widget footer__pl-70 mb-50">
                  <div className="footer__widget-head mb-22">
                    <h3 className="footer__widget-title">Subscribe</h3>
                  </div>
                  <div className="footer__widget-body">
                    <div className="footer__subscribe">
                      <form action="#">
                        <div className="footer__subscribe-input mb-15">
                          <input
                            type="email"
                            placeholder="Your email address"
                          />
                          <button type="submit">
                            <i className="far fa-arrow-right" />
                            <i className="far fa-arrow-right" />
                          </button>
                        </div>
                      </form>
                      <p>
                        Get the latest news and updates right at your inbox.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="footer__copyright text-center">
                  <p>
                    © {new Date().getFullYear()} Ponpes Darul Hikmah | All
                    Rights Reserved | Develope By &nbsp;
                    <a
                      href="https://www.instagram.com/rianmunawar13/"
                      target={"_blank"}
                    >
                      Rian Munawar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
