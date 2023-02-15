import React, { useEffect } from "react";
import "./program.css";
import mosqueIcon from "../../../assets/svg/mosque.svg";
import ProgramCard from "../../molecules/ProgramCard";
import smileIcon from "../../../assets/svg/icon/contact/smile.svg";
import bookOpenIcon from "../../../assets/svg/book-open.svg";
import homeIcon from "../../../assets/svg/home.svg";
import archiveIcon from "../../../assets/svg/archive.svg";

const Program = () => {
  return (
    <section className="program__area">
      <div className="container pt-20 position-relative mb-200">
        <div className="program__inner white-bg">
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard icon={mosqueIcon} content={"Beriman dan Bertaqwa"} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard icon={smileIcon} content={"Character Building"} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard
                icon={bookOpenIcon}
                content={"Kurikulum terintegrasi"}
              />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard icon={homeIcon} content={"Fasilitas Lengkap"} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard
                icon={mosqueIcon}
                content={"Pembiasan Sholat Dhuha dan Dzuhur berjamah"}
              />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard icon={archiveIcon} content={"Kajian Kitab Kuning"} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard icon={bookOpenIcon} content={"Qiro'atul Mujawwad"} />
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3 align-items-center"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <ProgramCard
                icon={homeIcon}
                content={"Tahfidz Al-qur'an dan Hadits"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
