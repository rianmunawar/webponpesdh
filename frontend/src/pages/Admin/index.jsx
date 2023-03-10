import React, { useEffect, useState } from "react";
import axios from "axios";
import timeIcon from "../../assets/svg/times.svg";
import userIcon from "../../assets/svg/users-colored.svg";
import homeIcon from "../../assets/svg/home-colored.svg";
import "./admin.css";
import CardStatistik from "../../components/molecules/Admin/CardStatistik";
import CardList from "../../components/molecules/CardList";
import refreshToken from "../../utils/refreshToken";
import Cookies from "js-cookie";

function Admin() {
  const [data, setData] = useState([]);
  const endpoint = process.env.REACT_APP_ENDPOINT;
  useEffect(() => {
    axios.get(`${endpoint}/pendaftaran`).then((res) => {
      const { payload } = res.data;
      setData(payload);
    });
    if (!Cookies.get("token")) refreshToken();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3>Overfiew</h3>
          <h5 className="content-desc mb-4">statistik keadaan lembaga</h5>
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <CardStatistik text="Jumlah Siswa" value="633" icon={timeIcon} />
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <CardStatistik
            text="Pendaftar Baru"
            value={data.length}
            icon={userIcon}
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <CardStatistik text="Lembaga Formal" value="3" icon={homeIcon} />
        </div>
        <div className="col-12 col-md-6 col-xl-4">
          <CardStatistik text="Published News" value="3" icon={homeIcon} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-lg-6">
          <h3>Documents</h3>
          {/* <h5 className="content-desc mb-4">Standard procedure</h5> */}
          <div className="document-card">
            <div className="document-item">
              <div className="d-flex justify-content-start align-items-center">
                <div className="document-icon box">
                  <img
                    src="./assets/img/home/document/archive.svg"
                    alt="icon"
                  />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <h2 className="document-title">Customer Guide</h2>
                  <span className="document-desc">180 MB • PDF</span>
                </div>
              </div>
              <button className="btn-statistics">
                <img src="./assets/img/global/download.svg" alt="icon" />
              </button>
            </div>
            <div className="document-item">
              <div className="d-flex justify-content-start align-items-center">
                <div className="document-icon globe">
                  <img src="./assets/img/home/document/twitch.svg" alt="icon" />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <h2 className="document-title">Twitch Record</h2>
                  <span className="document-desc">700 GB • MP4</span>
                </div>
              </div>
              <button className="btn-statistics">
                <img src="./assets/img/global/download.svg" alt="icon" />
              </button>
            </div>
            <div className="document-item">
              <div className="d-flex justify-content-start align-items-center">
                <div className="document-icon database">
                  <img
                    src="./assets/img/home/document/database.svg"
                    alt="icon"
                  />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <h2 className="document-title">Personas Datasets</h2>
                  <span className="document-desc">11 MB • CSV</span>
                </div>
              </div>
              <button className="btn-statistics">
                <img src="./assets/img/global/download.svg" alt="icon" />
              </button>
            </div>
            <div className="document-item">
              <div className="d-flex justify-content-start align-items-center">
                <div className="document-icon target">
                  <img
                    src="./assets/img/home/document/book-open.svg"
                    alt="icon"
                  />
                </div>
                <div className="d-flex flex-column justify-content-between align-items-start">
                  <h2 className="document-title">Marketing Book</h2>
                  <span className="document-desc">891 MB • PDF</span>
                </div>
              </div>
              <button className="btn-statistics">
                <img src="./assets/img/global/download.svg" alt="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <h3>Fresh News</h3>
          <div className="document-card">
            {[1, 2, 3].map((item, index) => (
              <CardList key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
