import React from "react";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { errorMessage, successMessage } from "../../atoms/alert/alert";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./form.css";

export default function FormPendaftaran() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  const jenjang = watch("jenjang");
  const j_pendaftaran = watch("j_pendaftaran");

  const endpoint = process.env.REACT_APP_ENDPOINT;

  const onSubmit = async (data) => {
    await axios
      .post(`${endpoint}/pendaftaran`, { ...data })
      .then((res) => {
        successMessage(res.data.message);
        reset();
        navigate("/ppdb/pendaftaran-selesai");
      })
      .catch((err) => errorMessage(err.message));
  };

  return (
    <>
      <section className="form__area py-5 px-1 px-md-5 grey-bg" id="form">
        <div className="container">
          <ToastContainer />
          <div className="text-wrapper text-center">
            <h2 className="section__title mb-3">Formulir Pendaftaran</h2>
            <h4 className="mb-3 text-desc">
              PPDB Ponpes Darul Hikmah 2023/2024
            </h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-0 p-md-5">
            <fieldset className="rounded shadow">
              <legend className="text-black fw-bold mb-4">Data Pribadi</legend>
              <div className="mb-3">
                <label className="text-black form-label">
                  Jenis Pendapataran
                  <span className="text-danger">*</span>
                </label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="baru">
                    Siswa Baru
                  </label>
                  <input
                    type="radio"
                    name="j_pendaftaran"
                    id="baru"
                    value={"baru"}
                    className={`form-check-input ${
                      errors.j_pendaftaran && "is-invalid"
                    }`}
                    {...register("j_pendaftaran", {
                      required: "Pilih Jenis Pendaftaran",
                    })}
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="pindahan">
                    Siswa Pindahan
                  </label>
                  <input
                    type="radio"
                    className={`form-check-input ${
                      errors.j_pendaftaran && "is-invalid"
                    }`}
                    name="j_pendaftaran"
                    id="pindahan"
                    value={"pindahan"}
                    {...register("j_pendaftaran", {
                      required: "Pilih Jenis Pendaftaran",
                    })}
                  />
                </div>
                {errors.j_pendaftaran?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.j_pendaftaran.message}
                  </small>
                )}
              </div>
              {j_pendaftaran === "pindahan" && (
                <FormInput
                  label="Kelas"
                  name="kelas"
                  type="text"
                  isRequired
                  mb="3"
                  className={`form-control ${errors.kelas && "is-invalid"}`}
                  {...register("kelas", { required: "kelas Wajib Di isi" })}
                  error={
                    errors.kelas?.type === "required" && (
                      <small className="text-danger">
                        {" "}
                        {errors.kelas.message}
                      </small>
                    )
                  }
                />
              )}
              <div className="mb-3">
                <label htmlFor="jenjang" className="form-label text-black">
                  Jenjang Pendaftaran
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="jenjang"
                  id="jenjang"
                  className={`form-select ${errors.jenjang && "is-invalid"}`}
                  {...register("jenjang", {
                    required: "Jenjang wajib di isi",
                  })}
                >
                  <option value="">Pilih Jenjang pendaftaran</option>
                  <option value={"ra"}>RA AR-Rohmah</option>
                  <option value={"mts"}>MTs Darul Hikmah</option>
                  <option value={"mak"}>MAK Darul Hikmah</option>
                </select>
                {errors.jenjang?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.jenjang.message}
                  </small>
                )}
              </div>
              {jenjang === "ra" || jenjang === undefined ? (
                ""
              ) : (
                <FormInput
                  label="NISN"
                  name="nisn"
                  type="number"
                  mb="3"
                  isRequired
                  className={`form-control ${errors.nisn && "is-invalid"}`}
                  {...register("nisn", {
                    required: "NISN Wajib Di isi",
                    pattern: {
                      value: /^\d+$/,
                      message: "Hanya number saja",
                    },
                  })}
                  onKeyUp={() => trigger("nisn")}
                  error={
                    errors.nisn && (
                      <small className="text-danger">
                        {" "}
                        {errors.nisn.message}
                      </small>
                    )
                  }
                />
              )}

              <FormInput
                label="Nama Lengkap"
                name="nama"
                type="text"
                isRequired
                mb="3"
                className={`form-control ${errors.nama && "is-invalid"}`}
                {...register("nama", { required: "Nama Wajib Di isi" })}
                error={
                  errors.nama?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nama.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="NIK / No. KITAS"
                name="nik"
                type="number"
                isRequired
                mb="3"
                className={`form-control ${errors.nik && "is-invalid"}`}
                {...register("nik", { required: "Nik Wajib Di isi" })}
                error={
                  errors.nik?.type === "required" && (
                    <small className="text-danger"> {errors.nik.message}</small>
                  )
                }
              />
              <FormInput
                label="Tempat Lahir"
                name="tempat-lahir"
                type="text"
                isRequired
                mb="3"
                className={`form-control ${
                  errors.tempat_lahir && "is-invalid"
                }`}
                {...register("tempat_lahir", {
                  required: "Tempat Lahir Wajib Di isi",
                })}
                error={
                  errors.tempat_lahir?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.tempatLahir.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="Tanggal Lahir"
                name="dob"
                type="date"
                isRequired
                mb="3"
                className={`form-control ${errors.dob && "is-invalid"}`}
                {...register("dob", { required: "Tanggal Lahir Wajib Di isi" })}
                error={
                  errors.dob?.type === "required" && (
                    <small className="text-danger"> {errors.dob.message}</small>
                  )
                }
              />
              <div className="mb-3">
                <label className="text-black form-label">
                  Jenis Kelamin
                  <span className="text-danger">*</span>
                </label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="male">
                    Laki-laki
                  </label>
                  <input
                    type="radio"
                    name="j_kelamin"
                    id="male"
                    value={"male"}
                    className={`form-check-input ${
                      errors.j_kelamin && "is-invalid"
                    }`}
                    {...register("j_kelamin", {
                      required: "Pilih Jenis Kelamin anda",
                    })}
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="female">
                    Perempuan
                  </label>
                  <input
                    type="radio"
                    className={`form-check-input ${
                      errors.j_kelamin && "is-invalid"
                    }`}
                    name="j_kelamin"
                    id="female"
                    value={"female"}
                    {...register("j_kelamin", {
                      required: "Pilih Jenis Kelamin anda",
                    })}
                  />
                </div>
                {errors.j_kelamin?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.j_kelamin.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label text-black">
                  Alamat Tempat Tinggal
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  name="alamat"
                  id="alamat"
                  cols="20"
                  rows="5"
                  className={`form-control ${errors.alamat && "is-invalid"}`}
                  {...register("alamat", { required: "Alamat wajib di isi" })}
                ></textarea>
                {errors.alamat?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.alamat.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="agama" className="text-black form-label">
                  Pilih Agama
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="agama"
                  id="agama"
                  className={`form-select ${errors.agama && "is-invalid"}`}
                  {...register("agama", { required: "Agama wajib di isi" })}
                >
                  <option value={""}>Agama...</option>
                  <option value={"islam"}>Islam</option>
                  <option value={"kristen"}>Kristen</option>
                  <option value={"budha"}>Budha</option>
                  <option value={"konghucu"}>Konghucu</option>
                  <option value={"lainnya"}>Lainnya</option>
                </select>
                {errors.agama?.type === "required" && (
                  <small className="text-danger"> {errors.agama.message}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="text-black form-label">
                  Kewarganegaraan
                  <span className="text-danger">*</span>
                </label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="wni">
                    WNI
                  </label>
                  <input
                    type="radio"
                    className={`form-check-input ${
                      errors.kewarganegaraan && "is-invalid"
                    }`}
                    name="warga-negara"
                    id="wni"
                    value={"wni"}
                    {...register("kewarganegaraan", {
                      required: "Pilih Kewarganegaraan anda",
                    })}
                  />
                </div>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="wna">
                    WNA
                  </label>
                  <input
                    type="radio"
                    className={`form-check-input ${
                      errors.kewarganegaraan && "is-invalid"
                    }`}
                    name="warga-negara"
                    id="wna"
                    value={"wna"}
                    {...register("kewarganegaraan", {
                      required: "Pilih Kewarganegaraan anda",
                    })}
                  />
                </div>
                {errors.kewarganegaraan?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.kewarganegaraan.message}
                  </small>
                )}
              </div>
              <FormInput
                label="E-Mail"
                name="email"
                type="email"
                isRequired
                mb="3"
                className={`form-control ${errors.email && "is-invalid"}`}
                {...register("email", { required: "email Wajib Di isi" })}
                error={
                  errors.email?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.email.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="No. Handphone"
                name="hp"
                type="number"
                isRequired
                mb="3"
                className={`form-control ${errors.no_hp && "is-invalid"}`}
                {...register("no_hp", { required: "No. Hp Wajib Di isi" })}
                error={
                  errors.no_hp?.type === "required" && (
                    <small className="text-danger"> {errors.hp.message}</small>
                  )
                }
              />
            </fieldset>
            {jenjang === "ra" || jenjang === undefined ? (
              ""
            ) : (
              <fieldset className="rounded shadow">
                <legend className="text-black fw-bold mb-3">
                  Data Asal Sekolah
                </legend>
                <FormInput
                  label="Asal Sekolah"
                  name="asal-sekolah"
                  type="text"
                  isRequired
                  mb="3"
                  className={`form-control ${
                    errors.asal_sekolah && "is-invalid"
                  }`}
                  {...register("asal_sekolah", { required: "Wajib di isi" })}
                  error={
                    errors.asal_sekolah?.type === "required" && (
                      <small className="text-danger">
                        {" "}
                        {errors.asal_sekolah.message}
                      </small>
                    )
                  }
                />
                <FormInput
                  label="No. Seri Ijazah"
                  name="ijazah"
                  type="text"
                  mb="3"
                  {...register("no_ijazah")}
                />
              </fieldset>
            )}

            <fieldset className="rounded shadow">
              <legend className="text-black fw-bold mb-3">
                Data Orang Tua
              </legend>
              <FormInput
                label="Nama Ayah"
                name="nama-ayah"
                isRequired
                type="text"
                mb="3"
                className={`form-control ${errors.nama_ayah && "is-invalid"}`}
                {...register("nama_ayah", {
                  required: "Nama Ayah Wajib Di isi",
                })}
                error={
                  errors.nama_ayah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nama_ayah.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="NIK Ayah"
                name="nik-ayah"
                type="number"
                isRequired
                mb="3"
                className={`form-control ${errors.nik_ayah && "is-invalid"}`}
                {...register("nik_ayah", { required: "NIK Ayah Wajib Di isi" })}
                error={
                  errors.nik_ayah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nik_ayah.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="Tahun Lahir"
                name="dob-ayah"
                type="number"
                isRequired
                mb="3"
                className={`form-control ${errors.dob_ayah && "is-invalid"}`}
                {...register("dob_ayah", {
                  required: "Tanggal Lahir Wajib Di isi",
                })}
                error={
                  errors.dob_ayah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.dob_ayah.message}
                    </small>
                  )
                }
              />
              <div className="mb-3">
                <label htmlFor="pend-ayah" className="text-black form-label">
                  Pendidikan
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="pend-ayah"
                  id="pend-ayah"
                  className={`form-select ${errors.pend_ayah && "is-invalid"}`}
                  {...register("pend_ayah", {
                    required: "Pendidikan Ayah wajib di isi",
                  })}
                >
                  <option value={""}>Pilih pendidikan</option>
                  <option value="tidak sekolah">Tidak Sekolah</option>
                  <option value="sd">SD/Sederajat</option>
                  <option value="smp">SMP/Sederajat</option>
                  <option value="sma">SMA/Sederajat</option>
                  <option value="d1">D1</option>
                  <option value="d2">D2</option>
                  <option value="d3">D3</option>
                  <option value="s1/d4">S1/D4</option>
                  <option value="s2">S2</option>
                  <option value="s3">S3</option>
                </select>
                {errors.pend_ayah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pend_ayah.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="pek-ayah" className="text-black form-label">
                  Pekerjaan
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="pek-ayah"
                  id="pek-ayah"
                  className={`form-select ${errors.pek_ayah && "is-invalid"}`}
                  {...register("pek_ayah", {
                    required: "Pekerjaan ayah wajib di isi",
                  })}
                >
                  <option value={""}>Pilih Pekerjaan</option>
                  <option value="Tidak Kerja">Tidak Kerja</option>
                  <option value="Nelayan">Nelayan</option>
                  <option value="Petani">Petani</option>
                  <option value="Peternak">Peternak</option>
                  <option value="PNS/TNI/POLRI">PNS/TNI/POLRI</option>
                  <option value="Karyawan Swasta">Karyawan Swasta</option>
                  <option value="Pedagang">Pedagang</option>
                  <option value="Wiraswasta">Wiraswasta</option>
                  <option value="Wirausaha">Wirausaha</option>
                  <option value="Buruh">Buruh</option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {errors.pek_ayah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pek_ayah.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="peng-ayah" className="text-black form-label">
                  Penghasilan Bulanan
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="peng-ayah"
                  id="peng-ayah"
                  className={`form-select ${errors.peng_ayah && "is-invalid"}`}
                  {...register("peng_ayah", {
                    required: "Penghasilan Ayah wajib di Isi",
                  })}
                >
                  <option value={""}>Pilih Penghasilan Bulanan</option>
                  <option value="kurang dari 500.000">
                    {" "}
                    Kurang dari 500.000
                  </option>
                  <option value="500.000 - 999.999">500.000 - 999.999</option>
                  <option value="1 Juta - 1.999.999">1 Juta - 1.999.999</option>
                  <option value="2 Juta - 4.999.999">2 Juta - 4.999.999</option>
                  <option value="5 Juta - 20 Juta">5 Juta - 20 Juta</option>
                  <option value="Lebih dari 20 Juta">Lebih dari 20 Juta</option>
                </select>
                {errors.peng_ayah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.peng_ayah.message}
                  </small>
                )}
              </div>
              <FormInput
                label="Kebutuhan Khusus"
                name="disabilitas-ayah"
                type="text"
                mb="5"
                {...register("disabilitas_ayah")}
              />
              <hr className="mb-5" />
              <FormInput
                label="Nama Ibu"
                name="nama-ibu"
                type="text"
                isRequired
                mb="3"
                className={`form-control ${errors.nama_ibu && "is-invalid"}`}
                {...register("nama_ibu", {
                  required: "Nama Ibu wajib di isi",
                })}
                error={
                  errors.nama_ibu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nama_ibu.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="NIK Ibu"
                name="nik-ibu"
                isRequired
                type="number"
                mb="3"
                className={`form-control ${errors.nik_ibu && "is-invalid"}`}
                {...register("nik_ibu", {
                  required: "NIK Ibu wajib di isi",
                })}
                error={
                  errors.nik_ibu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nik_ibu.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="Tahun Lahir"
                name="dob-ibu"
                isRequired
                type="number"
                mb="3"
                className={`form-control ${errors.dob_ibu && "is-invalid"}`}
                {...register("dob_ibu", {
                  required: "Tahun lahir Ibu wajib di isi",
                })}
                error={
                  errors.dob_ibu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.dob_ibu.message}
                    </small>
                  )
                }
              />
              <div className="mb-3">
                <label htmlFor="pend-ibu" className="text-black form-label">
                  Pendidikan
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="pend-ibu"
                  id="pend-ibu"
                  className={`form-select ${errors.pend_ibu && "is-invalid"}`}
                  {...register("pend_ibu", {
                    required: "Pendidikan Ibu wajib di isi",
                  })}
                >
                  <option value={""}>Pilih pendidikan</option>
                  <option value="tidak sekolah">Tidak Sekolah</option>
                  <option value="sd">SD/Sederajat</option>
                  <option value="smp">SMP/Sederajat</option>
                  <option value="sma">SMA/Sederajat</option>
                  <option value="d1">D1</option>
                  <option value="d2">D2</option>
                  <option value="d3">D3</option>
                  <option value="s1/d4">S1/D4</option>
                  <option value="s2">S2</option>
                  <option value="s3">S3</option>
                </select>
                {errors.pend_ibu?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pend_ibu.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="pek-ibu" className="text-black form-label">
                  Pekerjaan
                  <span className="text-danger">*</span>
                </label>
                <select
                  name="pek-ibu"
                  id="pek-ibu"
                  className={`form-select ${errors.pek_ibu && "is-invalid"}`}
                  {...register("pek_ibu", {
                    required: "Pkerjaan Ibu Wajib di Isi",
                  })}
                >
                  <option value={""}>Pilih Pekerjaan</option>
                  <option value="Tidak Kerja / IRT">Tidak Kerja / IRT</option>
                  <option value="Nelayan">Nelayan</option>
                  <option value="Petani">Petani</option>
                  <option value="Peternak">Peternak</option>
                  <option value="PNS/TNI/POLRI">PNS/TNI/POLRI</option>
                  <option value="Karyawan Swasta">Karyawan Swasta</option>
                  <option value="Pedagang">Pedagang</option>
                  <option value="Wiraswasta">Wiraswasta</option>
                  <option value="Wirausaha">Wirausaha</option>
                  <option value="Buruh">Buruh</option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                {errors.pek_ibu?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pek_ibu.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="peng-ibu" className="text-black form-label">
                  Penghasilan Bulanan
                </label>
                <select
                  name="peng-ibu"
                  id="peng-ibu"
                  className="form-select"
                  {...register("peng_ibu")}
                >
                  <option value={""}>Pilih Penghasilan Bulanan</option>
                  <option value="kurang dari 500.000">
                    {" "}
                    Kurang dari 500.000
                  </option>
                  <option value="500.000 - 999.999">500.000 - 999.999</option>
                  <option value="1 Juta - 1.999.999">1 Juta - 1.999.999</option>
                  <option value="2 Juta - 4.999.999">2 Juta - 4.999.999</option>
                  <option value="5 Juta - 20 Juta">5 Juta - 20 Juta</option>
                  <option value="Lebih dari 20 Juta">Lebih dari 20 Juta</option>
                </select>
              </div>
              <FormInput
                label="Kebutuhan Khusus"
                name="disabilitas-ibu"
                type="text"
                mb="3"
                {...register("disabilitas_ibu")}
              />
            </fieldset>
            <fieldset className="rounded shadow">
              <button type="submit" className="btn btn-primary">
                Daftar
              </button>
              <HashLink to={"/ppdb#banner"}>
                <button className="btn btn-danger ms-3">Back</button>
              </HashLink>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
}
