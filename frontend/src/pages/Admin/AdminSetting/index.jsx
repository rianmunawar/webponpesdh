import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
const RowData = lazy(() =>
  import("../../../components/molecules/Admin/RowData")
);
import Styles from "./adminSetting.module.css";

function AdminSetting() {
  const dataIdentitas = [
    {
      label: "Nama Lembaga",
      content: "Pondok Pesantren Darul Hikmah",
    },
    {
      label: "Tahun Berdiri",
      content: 1986,
    },
    {
      label: "Ketua Yayasan",
      content: "KH. Drs. Nana Suryana, MA",
    },
    {
      label: "Alamat",
      content:
        "Jl. Raya Sadan-Subang Km 12, Kp. Cikopo RT/RW 04/01, Ds. Karyamekar Kec. Cibatu Kab. Puwkarta Jawa Barata 41183",
    },
    {
      label: "Visi",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nemo in optio minima quibusdam cupiditate ullam voluptatibus omnis, amet iure.",
    },
    {
      label: "Misi",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae repellat reprehenderit itaque iusto tempore, quaerat laborum culpa veritatis quo quas?",
    },
    {
      label: "Motto",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sint eligendi eos consectetur animi amet a modi quidem! Veritatis, itaque.",
    },
    {
      label: "Sejarah",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus quod ullam aperiam natus vitae illo dolorum. Dolor vel quisquam nulla eaque aspernatur. Blanditiis labore numquam inventore reprehenderit qui corrupti placeat nam incidunt sunt officia. Dicta corrupti soluta omnis voluptates numquam corporis voluptate. A, numquam eaque corrupti eligendi voluptates similique?",
    },
  ];

  return (
    <>
      <section className="setting__area">
        <div className="container">
          <div
            className="white-bg rounded border-1 p-2 p-md-3 p-lg-4 p-md-4"
            style={{ borderTop: "4px solid #011111" }}
          >
            <div className={`mb-5 ${Styles["text-wrapper"]}`}>
              <h3 className="section__subtitle">Identitas Lembaga</h3>
            </div>
            <div className={`${Styles["content-wrapper"]} mb-3`}>
              <Suspense fallback={<div>Loading ....</div>}>
                {dataIdentitas.map((item, index) => (
                  <RowData
                    label={item.label}
                    content={item.content}
                    key={index}
                  />
                ))}
              </Suspense>
            </div>
            <div className="btn-wrapper mb-3">
              <button className="e-btn">
                <i className="fa fa-edit"></i>
                Update Data
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminSetting;
