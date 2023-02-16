import React from "react";
// Import Swiper React components
import { Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./whyus.css";

export default function WhyUs() {
  return (
    <>
      <section className="swiper__area p-4 mb-100">
        <div className="container">
          <div className="text-wrapper mb-5">
            <h1 className="section__title">
              Kenapa Harus <br />
              Ponpes Darul Hikmah
            </h1>
          </div>
          <Swiper
            modules={[Pagination, EffectCoverflow]}
            effect="coverflow"
            slidesPerView={1}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<span class="' + className + '">' + (index + 1) + "</span>"
                );
              },
            }}
            className="mySwiper"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <SwiperSlide>
              <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12 icon-wrapper">
                  <svg
                    width={"100%"}
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            " .st0{fill:#FFEEA9;} .st1{fill:#2b4eff;} .st2{fill:#b8dde3;} .st3{fill:#0e1133;} .st4{fill:none;stroke:#0e1133;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
                        }}
                      />{" "}
                      <g id="_x34_0-Id_Card" /> <g id="_x33_9-Formula" />{" "}
                      <g id="_x33_8-Elbow" /> <g id="_x33_7-Diploma" />{" "}
                      <g id="_x33_6-Laptop" /> <g id="_x33_5-Brush" />{" "}
                      <g id="_x33_4-Baseball" /> <g id="_x33_3-Student" />{" "}
                      <g id="_x33_2-Highlighter" /> <g id="_x33_1-Ruler" />{" "}
                      <g id="_x33_0-Caliper" /> <g id="_x32_9-Ruler_Elbow" />{" "}
                      <g id="_x32_8-Abacus" /> <g id="_x32_7-Id_Card" />{" "}
                      <g id="_x32_6-Eraser" /> <g id="_x32_5-Pencil" />{" "}
                      <g id="_x32_4-Ink" /> <g id="_x32_3-Graduation_Cap" />{" "}
                      <g id="_x32_2-_Sling_Bag" /> <g id="_x32_1-Rugby_Ball" />{" "}
                      <g id="_x32_0-Clock" /> <g id="_x31_9-Certificate" />{" "}
                      <g id="_x31_8-Idea" />{" "}
                      <g id="_x31_7-Bookshelf">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              className="st2"
                              height="46.3"
                              width="13.2"
                              x="5.5"
                              y="16.6"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="61.8"
                              width="15.4"
                              x="18.8"
                              y="1.1"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <polygon
                              className="st2"
                              points="58.5,59.8 45.6,62.9 34.2,18.1 47.1,15 "
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M15.7,22.1H8.6c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h7.1c0.6,0,1.1-0.5,1.1-1.1 C16.8,22.6,16.3,22.1,15.7,22.1z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M23,8.8H30c0.6,0,1.1-0.5,1.1-1.1S30.6,6.6,30,6.6H23c-0.6,0-1.1,0.5-1.1,1.1S22.3,8.8,23,8.8z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M23,57.4H30c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1H23c-0.6,0-1.1,0.5-1.1,1.1 C21.8,56.9,22.3,57.4,23,57.4z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M15.7,55.2H8.6c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h7.1c0.6,0,1.1-0.5,1.1-1.1 C16.8,55.7,16.3,55.2,15.7,55.2z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M59.6,59.5L48.1,14.7c-0.1-0.6-0.7-0.9-1.3-0.8l-11.5,2.8V1.1c0-0.6-0.5-1.1-1.1-1.1H18.8 c-0.6,0-1.1,0.5-1.1,1.1v14.3H5.5c-0.6,0-1.1,0.5-1.1,1.1v46.3c0,0.6,0.5,1.1,1.1,1.1h13.2h15.4c0.6,0,1.1-0.5,1.1-1.1v-36 l9.2,36.3c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l12.9-3.1c0.3-0.1,0.5-0.3,0.7-0.5C59.6,60.1,59.6,59.8,59.6,59.5z M6.6,17.7h11v44.1h-11V17.7z M33.1,61.8H19.9V16.6V2.2h13.2V61.8z M46.4,61.6L35.6,18.9l10.7-2.6L57.1,59L46.4,61.6z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M45.3,21l-6.9,1.7c-0.6,0.1-1,0.7-0.8,1.3c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l6.9-1.7 c0.6-0.1,1-0.7,0.8-1.3S45.9,20.8,45.3,21z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M45.8,56c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l6.9-1.7c0.6-0.1,1-0.7,0.8-1.3 c-0.1-0.6-0.7-0.9-1.3-0.8l-6.9,1.7C46,54.9,45.6,55.5,45.8,56z"
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g id="_x31_6-Formula" /> <g id="_x31_5-Bell" />{" "}
                      <g id="_x31_4-Magnifying_Glass" />{" "}
                      <g id="_x31_3-Calculator" /> <g id="_x31_2-Eyeglasses" />{" "}
                      <g id="_x31_1-Bus" /> <g id="_x31_0-Trophy" />{" "}
                      <g id="_x39_-Globe" /> <g id="_x38_-Basket_Ball" />{" "}
                      <g id="_x37_-Pen" /> <g id="_x36_-Board" />{" "}
                      <g id="_x35_-Bag" /> <g id="_x34_-Exam" />{" "}
                      <g id="_x33_-Book" /> <g id="_x32_-Ruler" />{" "}
                      <g id="_x31_-Building" />{" "}
                    </g>
                  </svg>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5>KEUNGGULAN</h5>
                  <p>
                    Program pendidikan tidak hanya berfokus pada kegiatan
                    belajar secara teoritik tapi lebih ditekankan tehadap
                    pendidikan karakter Akhlaqul Karimah sehingga mencetak
                    generasi emas yang siap menjadi pemimpin bangsa
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12 icon-wrapper">
                  <svg
                    width={"100%"}
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            " .st0{fill:#FFEEA9;} .st1{fill:#2b4eff;} .st2{fill:#b8dde3;} .st3{fill:#0e1133;} .st4{fill:none;stroke:#0e1133;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
                        }}
                      />{" "}
                      <g id="_x34_0-Id_Card" /> <g id="_x33_9-Formula" />{" "}
                      <g id="_x33_8-Elbow" /> <g id="_x33_7-Diploma" />{" "}
                      <g id="_x33_6-Laptop" /> <g id="_x33_5-Brush" />{" "}
                      <g id="_x33_4-Baseball" /> <g id="_x33_3-Student" />{" "}
                      <g id="_x33_2-Highlighter" /> <g id="_x33_1-Ruler" />{" "}
                      <g id="_x33_0-Caliper" /> <g id="_x32_9-Ruler_Elbow" />{" "}
                      <g id="_x32_8-Abacus" />{" "}
                      <g id="_x32_7-Id_Card">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="39.7"
                              width="61.8"
                              x="1.1"
                              y="12.1"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <circle
                              className="st0"
                              cx="18.3"
                              cy="26.3"
                              r="7.1"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path
                              className="st2"
                              d="M31,44.8H5.5v-0.7c0-5.9,4.8-10.7,10.7-10.7h4.2c5.9,0,10.7,4.8,10.7,10.7V44.8z"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M62.9,11H1.1C0.5,11,0,11.5,0,12.1v39.7C0,52.5,0.5,53,1.1,53h61.8c0.6,0,1.1-0.5,1.1-1.1V12.1 C64,11.5,63.5,11,62.9,11z M61.8,50.8H2.2V13.2h59.6V50.8z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M5.5,45.9H31c0.6,0,1.1-0.5,1.1-1.1v-1c0-5.4-3.7-9.9-8.7-11.1c1.9-1.5,3.1-3.8,3.1-6.3 c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2c0,2.6,1.2,4.8,3.1,6.3c-5,1.2-8.7,5.7-8.7,11.1v1C4.4,45.4,4.9,45.9,5.5,45.9z M12.3,26.3c0-3.3,2.7-6,6-6s6,2.7,6,6s-2.7,6-6,6S12.3,29.6,12.3,26.3z M15.8,34.5h4.9c5.1,0,9.2,4.1,9.2,9.1H6.6 C6.6,38.6,10.8,34.5,15.8,34.5z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M39.9,26.5h18.3c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1H39.9c-0.6,0-1.1,0.5-1.1,1.1 C38.8,26,39.3,26.5,39.9,26.5z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M39.9,33.1h18.3c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H39.9c-0.6,0-1.1,0.5-1.1,1.1S39.3,33.1,39.9,33.1z "
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M39.9,39.7h18.3c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1H39.9c-0.6,0-1.1,0.5-1.1,1.1S39.3,39.7,39.9,39.7z "
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g id="_x32_6-Eraser" /> <g id="_x32_5-Pencil" />{" "}
                      <g id="_x32_4-Ink" /> <g id="_x32_3-Graduation_Cap" />{" "}
                      <g id="_x32_2-_Sling_Bag" /> <g id="_x32_1-Rugby_Ball" />{" "}
                      <g id="_x32_0-Clock" /> <g id="_x31_9-Certificate" />{" "}
                      <g id="_x31_8-Idea" /> <g id="_x31_7-Bookshelf" />{" "}
                      <g id="_x31_6-Formula" /> <g id="_x31_5-Bell" />{" "}
                      <g id="_x31_4-Magnifying_Glass" />{" "}
                      <g id="_x31_3-Calculator" /> <g id="_x31_2-Eyeglasses" />{" "}
                      <g id="_x31_1-Bus" /> <g id="_x31_0-Trophy" />{" "}
                      <g id="_x39_-Globe" /> <g id="_x38_-Basket_Ball" />{" "}
                      <g id="_x37_-Pen" /> <g id="_x36_-Board" />{" "}
                      <g id="_x35_-Bag" /> <g id="_x34_-Exam" />{" "}
                      <g id="_x33_-Book" /> <g id="_x32_-Ruler" />{" "}
                      <g id="_x31_-Building" />{" "}
                    </g>
                  </svg>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5>JAMINAN PENDIDIKAN</h5>
                  <p>
                    Peserta didik diarahkan dan dibentuk menjadi insan
                    berakhlaqul karimah yang memiliki kemampuan intelektual
                    Dengan di didik oleh guru-guru berpengalaman dan di dukung
                    fasilitas terbaik, kami memastikan bahwa setiap siswa dapat
                    belajar dan berkembang dengan maksimal.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12 icon-wrapper">
                  <svg
                    width={"100%"}
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            " .st0{fill:#2b4eff;} .st1{fill:#b8dde3;} .st2{fill:#8DD1D3;} .st3{fill:#0e1133;} .st4{fill:none;stroke:#0e1133;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
                        }}
                      />{" "}
                      <g id="_x34_0-Id_Card" /> <g id="_x33_9-Formula" />{" "}
                      <g id="_x33_8-Elbow" /> <g id="_x33_7-Diploma" />{" "}
                      <g id="_x33_6-Laptop">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path
                              className="st1"
                              d="M58.1,41H5.9c-0.6,0-1-0.4-1-1V8.2c0-0.6,0.4-1,1-1h52.2c0.6,0,1,0.4,1,1V40C59.1,40.6,58.6,41,58.1,41z"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <path
                              className="st0"
                              d="M60.6,56.8H3.4c-1.5,0-2.6-1.4-2.2-2.9l3.2-11.3c0.3-1,1.2-1.6,2.2-1.6h50.8c1,0,1.9,0.7,2.2,1.6L62.8,54 C63.2,55.4,62.1,56.8,60.6,56.8z"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M63.9,53.6l-3.2-11.3c-0.2-0.7-0.6-1.2-1.1-1.6c0.4-0.6,0.6-1.2,0.6-2V9.4c0-1.9-1.5-3.4-3.4-3.4H7.2 C5.3,6,3.8,7.6,3.8,9.4v29.3c0,0.7,0.2,1.4,0.6,2c-0.5,0.4-0.9,1-1.1,1.6L0.1,53.6c-0.3,1-0.1,2.1,0.6,3C1.3,57.5,2.3,58,3.4,58 h57.2c1.1,0,2.1-0.5,2.7-1.3C64,55.8,64.2,54.7,63.9,53.6z M6,9.4c0-0.6,0.5-1.1,1.1-1.1h49.7c0.6,0,1.1,0.5,1.1,1.1v29.3 c0,0.6-0.5,1.1-1.1,1.1H7.2c-0.6,0-1.1-0.5-1.1-1.1V9.4z M61.5,55.3c-0.2,0.3-0.5,0.4-0.9,0.4H3.4c-0.4,0-0.7-0.2-0.9-0.4 c-0.2-0.3-0.3-0.6-0.2-1L5.5,43c0.1-0.5,0.6-0.8,1.1-0.8h0.6h49.7h0.6c0.5,0,0.9,0.3,1.1,0.8l3.2,11.3 C61.8,54.6,61.7,55,61.5,55.3z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M29.7,12.8h4.5c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1h-4.5c-0.6,0-1.1,0.5-1.1,1.1 C28.6,12.3,29.1,12.8,29.7,12.8z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M53.4,44.4H10.6c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h42.9c0.6,0,1.1-0.5,1.1-1.1S54.1,44.4,53.4,44.4z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M42.2,51.2H21.8c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h20.3c0.6,0,1.1-0.5,1.1-1.1S42.8,51.2,42.2,51.2z"
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g id="_x33_5-Brush" /> <g id="_x33_4-Baseball" />{" "}
                      <g id="_x33_3-Student" /> <g id="_x33_2-Highlighter" />{" "}
                      <g id="_x33_1-Ruler" /> <g id="_x33_0-Caliper" />{" "}
                      <g id="_x32_9-Ruler_Elbow" /> <g id="_x32_8-Abacus" />{" "}
                      <g id="_x32_7-Id_Card" /> <g id="_x32_6-Eraser" />{" "}
                      <g id="_x32_5-Pencil" /> <g id="_x32_4-Ink" />{" "}
                      <g id="_x32_3-Graduation_Cap" />{" "}
                      <g id="_x32_2-_Sling_Bag" /> <g id="_x32_1-Rugby_Ball" />{" "}
                      <g id="_x32_0-Clock" /> <g id="_x31_9-Certificate" />{" "}
                      <g id="_x31_8-Idea" /> <g id="_x31_7-Bookshelf" />{" "}
                      <g id="_x31_6-Formula" /> <g id="_x31_5-Bell" />{" "}
                      <g id="_x31_4-Magnifying_Glass" />{" "}
                      <g id="_x31_3-Calculator" /> <g id="_x31_2-Eyeglasses" />{" "}
                      <g id="_x31_1-Bus" /> <g id="_x31_0-Trophy" />{" "}
                      <g id="_x39_-Globe" /> <g id="_x38_-Basket_Ball" />{" "}
                      <g id="_x37_-Pen" /> <g id="_x36_-Board" />{" "}
                      <g id="_x35_-Bag" /> <g id="_x34_-Exam" />{" "}
                      <g id="_x33_-Book" /> <g id="_x32_-Ruler" />{" "}
                      <g id="_x31_-Building" />{" "}
                    </g>
                  </svg>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5>PENDIDIKAN KARAKTER</h5>
                  <p>
                    Kami memahami bahwa pendidikan tidak hanya tentang
                    mengumpulkan informasi, tetapi juga membentuk karakter dan
                    sikap. Oleh karena itu, kami menawarkan program pendidikan
                    yang memadukan ilmu pengetahuan dan ajaran Islam untuk
                    membentuk generasi pemimpin masa depan yang berkarakter dan
                    berkualitas.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12 icon-wrapper">
                  <svg
                    width={"100%"}
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            " .st0{fill:#FFEEA9;} .st1{fill:#2b4eff;} .st2{fill:#b8dde3;} .st3{fill:#0e1133;} .st4{fill:none;stroke:#0e1133;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
                        }}
                      />{" "}
                      <g id="_x34_0-Id_Card" /> <g id="_x33_9-Formula" />{" "}
                      <g id="_x33_8-Elbow" /> <g id="_x33_7-Diploma" />{" "}
                      <g id="_x33_6-Laptop" /> <g id="_x33_5-Brush" />{" "}
                      <g id="_x33_4-Baseball" /> <g id="_x33_3-Student" />{" "}
                      <g id="_x33_2-Highlighter" /> <g id="_x33_1-Ruler" />{" "}
                      <g id="_x33_0-Caliper" /> <g id="_x32_9-Ruler_Elbow" />{" "}
                      <g id="_x32_8-Abacus" /> <g id="_x32_7-Id_Card" />{" "}
                      <g id="_x32_6-Eraser" /> <g id="_x32_5-Pencil" />{" "}
                      <g id="_x32_4-Ink" /> <g id="_x32_3-Graduation_Cap" />{" "}
                      <g id="_x32_2-_Sling_Bag" /> <g id="_x32_1-Rugby_Ball" />{" "}
                      <g id="_x32_0-Clock" /> <g id="_x31_9-Certificate" />{" "}
                      <g id="_x31_8-Idea" />{" "}
                      <g id="_x31_7-Bookshelf">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              className="st2"
                              height="46.3"
                              width="13.2"
                              x="5.5"
                              y="16.6"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="61.8"
                              width="15.4"
                              x="18.8"
                              y="1.1"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <polygon
                              className="st2"
                              points="58.5,59.8 45.6,62.9 34.2,18.1 47.1,15 "
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M15.7,22.1H8.6c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h7.1c0.6,0,1.1-0.5,1.1-1.1 C16.8,22.6,16.3,22.1,15.7,22.1z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M23,8.8H30c0.6,0,1.1-0.5,1.1-1.1S30.6,6.6,30,6.6H23c-0.6,0-1.1,0.5-1.1,1.1S22.3,8.8,23,8.8z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M23,57.4H30c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1H23c-0.6,0-1.1,0.5-1.1,1.1 C21.8,56.9,22.3,57.4,23,57.4z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M15.7,55.2H8.6c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1h7.1c0.6,0,1.1-0.5,1.1-1.1 C16.8,55.7,16.3,55.2,15.7,55.2z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M59.6,59.5L48.1,14.7c-0.1-0.6-0.7-0.9-1.3-0.8l-11.5,2.8V1.1c0-0.6-0.5-1.1-1.1-1.1H18.8 c-0.6,0-1.1,0.5-1.1,1.1v14.3H5.5c-0.6,0-1.1,0.5-1.1,1.1v46.3c0,0.6,0.5,1.1,1.1,1.1h13.2h15.4c0.6,0,1.1-0.5,1.1-1.1v-36 l9.2,36.3c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l12.9-3.1c0.3-0.1,0.5-0.3,0.7-0.5C59.6,60.1,59.6,59.8,59.6,59.5z M6.6,17.7h11v44.1h-11V17.7z M33.1,61.8H19.9V16.6V2.2h13.2V61.8z M46.4,61.6L35.6,18.9l10.7-2.6L57.1,59L46.4,61.6z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M45.3,21l-6.9,1.7c-0.6,0.1-1,0.7-0.8,1.3c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l6.9-1.7 c0.6-0.1,1-0.7,0.8-1.3S45.9,20.8,45.3,21z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M45.8,56c0.1,0.5,0.6,0.8,1.1,0.8c0.1,0,0.2,0,0.3,0l6.9-1.7c0.6-0.1,1-0.7,0.8-1.3 c-0.1-0.6-0.7-0.9-1.3-0.8l-6.9,1.7C46,54.9,45.6,55.5,45.8,56z"
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g id="_x31_6-Formula" /> <g id="_x31_5-Bell" />{" "}
                      <g id="_x31_4-Magnifying_Glass" />{" "}
                      <g id="_x31_3-Calculator" /> <g id="_x31_2-Eyeglasses" />{" "}
                      <g id="_x31_1-Bus" /> <g id="_x31_0-Trophy" />{" "}
                      <g id="_x39_-Globe" /> <g id="_x38_-Basket_Ball" />{" "}
                      <g id="_x37_-Pen" /> <g id="_x36_-Board" />{" "}
                      <g id="_x35_-Bag" /> <g id="_x34_-Exam" />{" "}
                      <g id="_x33_-Book" /> <g id="_x32_-Ruler" />{" "}
                      <g id="_x31_-Building" />{" "}
                    </g>
                  </svg>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5>KURIKULUM CAMPURAN</h5>
                  <p>
                    Program pendidikan yang kami lakukan tentunya mengacu kepada
                    kurikulum nasional yang dipadukan dengan kurikulum khas
                    pondok pesantren Darul Hikmah sehingga proses KBM dapat
                    berjalan dengan lebih efektif dan tepat sasaran sesuai
                    dengan kebutuhan peserta didik dilapangan
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row g-5 justify-content-center">
                <div className="col-lg-4 col-md-12 col-sm-12 icon-wrapper">
                  <svg
                    width={"100%"}
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                          __html:
                            " .st0{fill:#2d69f0;} .st1{fill:#dd246e;} .st2{fill:#b8dde3;} .st3{fill:#0e1133;} .st4{fill:none;stroke:#0e1133;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} ",
                        }}
                      />{" "}
                      <g id="_x34_0-Id_Card" /> <g id="_x33_9-Formula" />{" "}
                      <g id="_x33_8-Elbow" /> <g id="_x33_7-Diploma" />{" "}
                      <g id="_x33_6-Laptop" /> <g id="_x33_5-Brush" />{" "}
                      <g id="_x33_4-Baseball" /> <g id="_x33_3-Student" />{" "}
                      <g id="_x33_2-Highlighter" /> <g id="_x33_1-Ruler" />{" "}
                      <g id="_x33_0-Caliper" /> <g id="_x32_9-Ruler_Elbow" />{" "}
                      <g id="_x32_8-Abacus" /> <g id="_x32_7-Id_Card" />{" "}
                      <g id="_x32_6-Eraser" /> <g id="_x32_5-Pencil" />{" "}
                      <g id="_x32_4-Ink" /> <g id="_x32_3-Graduation_Cap" />{" "}
                      <g id="_x32_2-_Sling_Bag" /> <g id="_x32_1-Rugby_Ball" />{" "}
                      <g id="_x32_0-Clock" /> <g id="_x31_9-Certificate" />{" "}
                      <g id="_x31_8-Idea" /> <g id="_x31_7-Bookshelf" />{" "}
                      <g id="_x31_6-Formula" /> <g id="_x31_5-Bell" />{" "}
                      <g id="_x31_4-Magnifying_Glass" />{" "}
                      <g id="_x31_3-Calculator" /> <g id="_x31_2-Eyeglasses" />{" "}
                      <g id="_x31_1-Bus" /> <g id="_x31_0-Trophy" />{" "}
                      <g id="_x39_-Globe" /> <g id="_x38_-Basket_Ball" />{" "}
                      <g id="_x37_-Pen" /> <g id="_x36_-Board" />{" "}
                      <g id="_x35_-Bag" /> <g id="_x34_-Exam" />{" "}
                      <g id="_x33_-Book" /> <g id="_x32_-Ruler" />{" "}
                      <g id="_x31_-Building">
                        {" "}
                        <g>
                          {" "}
                          <g>
                            {" "}
                            <rect
                              className="st2"
                              height="44.1"
                              width="26.5"
                              x="18.8"
                              y="16.3"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st0"
                              height="37.5"
                              width="17.7"
                              x="1.1"
                              y="22.9"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st0"
                              height="37.5"
                              width="17.7"
                              x="45.2"
                              y="22.9"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st0"
                              height="15.4"
                              width="8.8"
                              x="27.6"
                              y={45}
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <circle
                              className="st0"
                              cx={32}
                              cy="29.6"
                              r="4.4"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="8.8"
                              width="4.4"
                              x="7.5"
                              y={45}
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="8.8"
                              width="4.4"
                              x="51.9"
                              y={45}
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="8.8"
                              width="4.4"
                              x="51.9"
                              y="29.6"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <rect
                              className="st1"
                              height="8.8"
                              width="4.4"
                              x="7.7"
                              y="29.6"
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <polygon
                              className="st1"
                              points="32,3.5 16.6,16.3 47.4,16.3 "
                            />{" "}
                          </g>{" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M62.9,21.8H46.3v-4.4h1.1c0.5,0,0.9-0.3,1-0.7c0.2-0.4,0-0.9-0.3-1.2L32.7,2.7c-0.4-0.3-1-0.3-1.4,0 L15.8,15.5c-0.4,0.3-0.5,0.8-0.3,1.2c0.2,0.4,0.6,0.7,1,0.7h1.1v4.4H1.1c-0.6,0-1.1,0.5-1.1,1.1v37.5c0,0.6,0.5,1.1,1.1,1.1 h17.7h8.8h8.8h8.8h17.7c0.6,0,1.1-0.5,1.1-1.1V22.9C64,22.3,63.5,21.8,62.9,21.8z M32,5l12.4,10.2H19.6L32,5z M2.2,24h15.4v35.3 H2.2V24z M19.9,22.9v-5.5h24.3v5.5v36.4h-6.6V45c0-0.6-0.5-1.1-1.1-1.1h-8.8c-0.6,0-1.1,0.5-1.1,1.1v14.3h-6.6V22.9z M28.7,59.4 V46.1h6.6v13.2H28.7z M61.8,59.4H46.3V24h15.4V59.4z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M32,35.1c3,0,5.5-2.5,5.5-5.5S35,24,32,24s-5.5,2.5-5.5,5.5S29,35.1,32,35.1z M32,26.2 c1.8,0,3.3,1.5,3.3,3.3c0,1.8-1.5,3.3-3.3,3.3s-3.3-1.5-3.3-3.3C28.7,27.7,30.2,26.2,32,26.2z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M12,43.9H7.5c-0.6,0-1.1,0.5-1.1,1.1v8.8c0,0.6,0.5,1.1,1.1,1.1H12c0.6,0,1.1-0.5,1.1-1.1V45 C13.1,44.4,12.6,43.9,12,43.9z M10.9,52.7H8.7v-6.6h2.2V52.7z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M51.9,54.9h4.4c0.6,0,1.1-0.5,1.1-1.1V45c0-0.6-0.5-1.1-1.1-1.1h-4.4c-0.6,0-1.1,0.5-1.1,1.1v8.8 C50.8,54.4,51.3,54.9,51.9,54.9z M53,46.1h2.2v6.6H53V46.1z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M51.9,39.5h4.4c0.6,0,1.1-0.5,1.1-1.1v-8.8c0-0.6-0.5-1.1-1.1-1.1h-4.4c-0.6,0-1.1,0.5-1.1,1.1v8.8 C50.8,39,51.3,39.5,51.9,39.5z M53,30.7h2.2v6.6H53V30.7z"
                              />{" "}
                            </g>{" "}
                            <g>
                              {" "}
                              <path
                                className="st3"
                                d="M12.1,28.5H7.7c-0.6,0-1.1,0.5-1.1,1.1v8.8c0,0.6,0.5,1.1,1.1,1.1h4.4c0.6,0,1.1-0.5,1.1-1.1v-8.8 C13.2,28.9,12.7,28.5,12.1,28.5z M11,37.3H8.8v-6.6H11V37.3z"
                              />{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h5>FASILITAS</h5>
                  <p>
                    Kami menyediakan fasilitas penunjang pembelajaran dengan
                    lengkap sehingga peserta didik dapat belajar dengan nyaman
                    dan bisa mengeksplorasi minat dan bakatnya melalui berbagai
                    sarana dan prasarana yang telah kami sediakan. Antara lain
                    Gedung sekolah yang nyaman, Mesjid, Kantin, Lab. Komputer,
                    Lapangan Olahraga, Asrama, dll.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination" />
          </Swiper>
        </div>
      </section>
    </>
  );
}
