import React from "react";
import BannerPage from "../../components/molecules/BannerPage";
import Card from "../../components/molecules/Card";
import Layouts from "../../Layout";
import image1 from "../../assets/img/blog/blog-1.jpg";

const BeritaPage = () => {
  return (
    <Layouts>
      <BannerPage title="Blog & Informasi" />
      <section className="container" id="berita">
        <div className="berita__wrapper p-4 row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="row grid">
              <div
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <Card
                  title="Maulid Nabi Muhammad SAW"
                  linkTarget="/detail"
                  tag="islami"
                  imgAlt="gambar"
                  imgUrl={image1}
                  author="admin"
                  updatedAt="Juni, 12 2022"
                />
              </div>
              <div
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Card
                  title="Maulid Nabi Muhammad SAW"
                  linkTarget="/detail"
                  tag="islami"
                  imgAlt="gambar"
                  imgUrl={image1}
                  author="admin"
                  updatedAt="Juni, 12 2022"
                />
              </div>
              <div
                className="col-12 col-md-6 col-lg-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Card
                  title="Maulid Nabi Muhammad SAW"
                  linkTarget="/detail"
                  tag="islami"
                  imgAlt="gambar"
                  imgUrl={image1}
                  author="admin"
                  updatedAt="Juni, 12 2022"
                />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="blog__sidebar pl-70">
              <div className="sidebar__widget mb-60">
                <div className="sidebar__widget-content">
                  <div className="sidebar__search p-relative">
                    <form action="#">
                      <input type="text" placeholder="Search for courses..." />
                      <button type="submit">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 584.4 584.4"
                          style={{ enableBackground: "new 0 0 584.4 584.4" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <g>
                              <path
                                className="st0"
                                d="M565.7,474.9l-61.1-61.1c-3.8-3.8-8.8-5.9-13.9-5.9c-6.3,0-12.1,3-15.9,8.3c-16.3,22.4-36,42.1-58.4,58.4    c-4.8,3.5-7.8,8.8-8.3,14.5c-0.4,5.6,1.7,11.3,5.8,15.4l61.1,61.1c12.1,12.1,28.2,18.8,45.4,18.8c17.1,0,33.3-6.7,45.4-18.8    C590.7,540.6,590.7,499.9,565.7,474.9z"
                              />
                              <path
                                className="st1"
                                d="M254.6,509.1c140.4,0,254.5-114.2,254.5-254.5C509.1,114.2,394.9,0,254.6,0C114.2,0,0,114.2,0,254.5    C0,394.9,114.2,509.1,254.6,509.1z M254.6,76.4c98.2,0,178.1,79.9,178.1,178.1s-79.9,178.1-178.1,178.1S76.4,352.8,76.4,254.5    S156.3,76.4,254.6,76.4z"
                              />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                  <h3 className="sidebar__widget-title">Recent posts</h3>
                </div>
                <div className="sidebar__widget-content">
                  <div className="rc__post-wrapper">
                    <div className="rc__post d-flex align-items-center">
                      <div className="rc__thumb mr-20">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/sm/blog-sm-1.jpg" alt />
                        </a>
                      </div>
                      <div className="rc__content">
                        <div className="rc__meta">
                          <span>October 15, 2021</span>
                        </div>
                        <h6 className="rc__title">
                          <a href="blog-details.html">
                            The Importance Intrinsic Motivation.
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="rc__post d-flex align-items-center">
                      <div className="rc__thumb mr-20">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/sm/blog-sm-2.jpg" alt />
                        </a>
                      </div>
                      <div className="rc__content">
                        <div className="rc__meta">
                          <span>March 26, 2021</span>
                        </div>
                        <h6 className="rc__title">
                          <a href="blog-details.html">
                            A Better Alternative To Grading Student.
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="rc__post d-flex align-items-center">
                      <div className="rc__thumb mr-20">
                        <a href="blog-details.html">
                          <img src="assets/img/blog/sm/blog-sm-3.jpg" alt />
                        </a>
                      </div>
                      <div className="rc__content">
                        <div className="rc__meta">
                          <span>October 15, 2021</span>
                        </div>
                        <h6 className="rc__title">
                          <a href="blog-details.html">
                            Strategic Social Media &amp; Evolution of Visual
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                  <h3 className="sidebar__widget-title">Category</h3>
                </div>
                <div className="sidebar__widget-content">
                  <div className="sidebar__category">
                    <ul>
                      <li>
                        <a href="blog.html">Category</a>
                      </li>
                      <li>
                        <a href="blog.html">Video &amp; Tips (4)</a>
                      </li>
                      <li>
                        <a href="blog.html">Education (8)</a>
                      </li>
                      <li>
                        <a href="blog.html">Business (5)</a>
                      </li>
                      <li>
                        <a href="blog.html">UX Design (3)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar__widget mb-55">
                <div className="sidebar__widget-head mb-35">
                  <h3 className="sidebar__widget-title">Tags</h3>
                </div>
                <div className="sidebar__widget-content">
                  <div className="sidebar__tag">
                    <a href="#">Art &amp; Design</a>
                    <a href="#">Course</a>
                    <a href="#">Videos</a>
                    <a href="#">App</a>
                    <a href="#">Education</a>
                    <a href="#">Data Science</a>
                    <a href="#">Machine Learning</a>
                    <a href="#">Tips</a>
                  </div>
                </div>
              </div>
              <div className="sidebar__widget mb-55">
                <div className="sidebar__banner w-img">
                  <img src="assets/img/blog/banner/banner-1.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default BeritaPage;
