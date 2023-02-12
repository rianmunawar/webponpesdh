import React from "react";
import AdminLayout from "../../Layout/AdminLayout";
import timeIcon from "../../assets/svg/times.svg";
import userIcon from "../../assets/svg/users-colored.svg";
import homeIcon from "../../assets/svg/home-colored.svg";
import "./admin.css";
import CardStatistik from "../../components/molecules/Admin/CardStatistik";

function Admin() {
  return (
    <>
      <AdminLayout>
        <div className="row">
          <div className="col-12">
            <h2 className="content-title">Overfiew</h2>
            <h5 className="content-desc mb-4">statistik keadaan lembaga</h5>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <CardStatistik text="Jumlah Siswa" value="1,000" icon={timeIcon} />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <CardStatistik text="Pendaftar Baru" value="700" icon={userIcon} />
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <CardStatistik text="Lembaga Formal" value="3" icon={homeIcon} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <h2 className="content-title">Documents</h2>
            <h5 className="content-desc mb-4">Standard procedure</h5>
            <div className="document-card">
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="document-icon box">
                    <img src="./assets/img/home/document/archive.svg" alt />
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Customer Guide</h2>
                    <span className="document-desc">180 MB • PDF</span>
                  </div>
                </div>
                <button className="btn-statistics">
                  <img src="./assets/img/global/download.svg" alt />
                </button>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="document-icon globe">
                    <img src="./assets/img/home/document/twitch.svg" alt />
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Twitch Record</h2>
                    <span className="document-desc">700 GB • MP4</span>
                  </div>
                </div>
                <button className="btn-statistics">
                  <img src="./assets/img/global/download.svg" alt />
                </button>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="document-icon database">
                    <img src="./assets/img/home/document/database.svg" alt />
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Personas Datasets</h2>
                    <span className="document-desc">11 MB • CSV</span>
                  </div>
                </div>
                <button className="btn-statistics">
                  <img src="./assets/img/global/download.svg" alt />
                </button>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <div className="document-icon target">
                    <img src="./assets/img/home/document/book-open.svg" alt />
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Marketing Book</h2>
                    <span className="document-desc">891 MB • PDF</span>
                  </div>
                </div>
                <button className="btn-statistics">
                  <img src="./assets/img/global/download.svg" alt />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="content-title">History</h2>
            <h5 className="content-desc mb-4">Track the flow</h5>
            <div className="document-card">
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="document-icon"
                    src="./assets/img/home/history/photo.png"
                    alt
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Amalia Syahrina</h2>
                    <span className="document-desc">
                      Promoted to Sr. Website Designer
                    </span>
                  </div>
                </div>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="document-icon"
                    src="./assets/img/home/history/photo-1.png"
                    alt
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Ah Park Yo</h2>
                    <span className="document-desc">
                      Promoted to Front-End Developer
                    </span>
                  </div>
                </div>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="document-icon"
                    src="./assets/img/home/history/photo-2.png"
                    alt
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Sintia Siny</h2>
                    <span className="document-desc">
                      Promoted to Accounting Executive
                    </span>
                  </div>
                </div>
              </div>
              <div className="document-item">
                <div className="d-flex justify-content-start align-items-center">
                  <img
                    className="document-icon"
                    src="./assets/img/home/history/photo-3.png"
                    alt
                  />
                  <div className="d-flex flex-column justify-content-between align-items-start">
                    <h2 className="document-title">Jerami Putu</h2>
                    <span className="document-desc">
                      Promoted to Quality Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}

export default Admin;
