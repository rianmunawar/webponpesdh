import axios from "axios";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
const RowData = lazy(() =>
  import("../../../components/molecules/Admin/RowData")
);
import Styles from "./calonSiswa.module.css";

function CalonSiswa() {
  const [dataCalonSiswa, setDataCalonSiswa] = useState([]);
  const endpoint = process.env.REACT_APP_ENDPOINT;
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get(`${endpoint}/pendaftaran`);
    const { payload } = response.data;
    setDataCalonSiswa(payload);
  };
  return (
    <>
      <section className="setting__area">
        <div className="container">
          <div
            className="white-bg rounded border-1 p-2 p-md-3 p-lg-4 p-md-4"
            style={{ borderTop: "4px solid #011111" }}
          >
            <div className={`mb-5 ${Styles["text-wrapper"]}`}>
              <h3 className="section__subtitle">Calon Siswa TA 2023/2024</h3>
            </div>
            <div className={`${Styles["content-wrapper"]} mb-3`}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Email</th>
                    <th scope="col">Handphone</th>
                    <th scope="col">Jenjang</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCalonSiswa.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.nama}</td>
                        <td>{item.email}</td>
                        <td>{item.no_hp}</td>
                        <td>{item.jenjang}</td>
                        <td>
                          <Link to={`/admin/calon-siswa/${item.uuid}`}>
                            <button className="btn btn-success">
                              <i className="fas fa-eye me-2"></i>
                              Detail
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* <Suspense fallback={<div>Loading ....</div>}>
                {dataIdentitas.map((item, index) => (
                  <RowData
                    label={item.label}
                    content={item.content}
                    key={index}
                  />
                ))}
                <RowData
                  label={"Visi"}
                  content={
                    "Lembaga pendidikan islam uang dipilih, disenangi, dan dibutuhkan masyarakat serta mengangkat harkat drajat manusia dengan ilmu dan amalnya."
                  }
                />
                <RowData label={"Misi"}>
                  <ol>
                    {misi.map((item, index) => (
                      <li key={index}>
                        <p className="text-content">{item}</p>
                      </li>
                    ))}
                  </ol>
                </RowData>
                <RowData
                  label={"Visi"}
                  content={
                    "Lembaga pendidikan islam uang dipilih, disenangi, dan dibutuhkan masyarakat serta mengangkat harkat drajat manusia dengan ilmu dan amalnya."
                  }
                />
                <RowData
                  label={"Moto"}
                  content={
                    "Berakhlakul karimah, berbadan sehat, berwawasan luas, dan berfikir islami."
                  }
                />
              </Suspense> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CalonSiswa;
