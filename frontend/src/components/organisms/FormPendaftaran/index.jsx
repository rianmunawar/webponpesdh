import React from "react";
import "./form.css";

export default function FormPendaftaran() {
  return (
    <>
      <section className="form__area mb-100" style={{ marginTop: "150px" }}>
        <div className="container">
          <div className="text-wrapper">
            <h2 className="section__title mb-3">Formulir Pendaptaran</h2>
            <h4 className="mb-3">PPDB Ponpes Darul Hikmah 2023/2024</h4>
          </div>
          <form action="" className="p-5">
            <fieldset className="rounded shadow">
              <legend className="text-black fw-bold mb-4">Data Diri</legend>
              <div className="mb-3">
                <label className="form-label text-black">NISN</label>
                <input type="number" className="form-control" name="nisn" />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">NIK / No. KITAS</label>
                <input type="number" className="form-control" name="nik" />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">Tempat Lahir</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">Tanggal Lahir</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="form-control"
                />
              </div>
              <p className="text-black">Jenis Kelamin</p>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="male">
                  Laki-laki
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="jk"
                  id="male"
                  value={"male"}
                />
              </div>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="female">
                  Perempuan
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="jk"
                  id="female"
                  value={"female"}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">
                  Alamat Tempat Tinggal
                </label>
                <textarea
                  name="alamat"
                  id="alamat"
                  cols="20"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <select name="agama" id="agama" className="form-select mb-3">
                <option selected defaultValue={""}>
                  Pilih Agama
                </option>
                <option value={"islam"}>Islam</option>
                <option value={"kristen"}>Kristen</option>
                <option value={"budha"}>Budha</option>
                <option value={"konghucu"}>Konghucu</option>
                <option value={"lainnya"}>Lainnya</option>
              </select>
              <p className="text-black">Kewarganegaraan</p>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="wni">
                  WNI
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="warga-negara"
                  id="wni"
                  value={"wni"}
                />
              </div>
              <div className="mb-3 form-check">
                <label className="form-check-label" htmlFor="wna">
                  WNA
                </label>
                <input
                  type="radio"
                  className="form-check-input"
                  name="warga-negara"
                  id="wna"
                  value={"wna"}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">No. Handphone</label>
                <input
                  type="number"
                  name="hp"
                  id="hp"
                  className="form-control"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}
