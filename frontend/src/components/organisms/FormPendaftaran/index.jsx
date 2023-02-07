import React from "react";
import { HashLink } from "react-router-hash-link";
import { useForm } from "react-hook-form";
import FormInput from "../../atoms/FormInput";
import "./form.css";

export default function FormPendaftaran() {
  const {
    register,
    handleSubmit,
    reset,
    triger,
    watch,
    formState: { errors },
  } = useForm();
  const jenjang = watch("jenjang");
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const endpoint = process.env.REACT_APP_ENDPOINT;
  console.log(endpoint);
  return (
    <>
      <section className="form__area mb-100 mt-4" id="form">
        <div className="container">
          <div className="text-wrapper text-center">
            <h2 className="section__title mb-3">Formulir Pendaptaran</h2>
            <h4 className="mb-3">PPDB Ponpes Darul Hikmah 2023/2024</h4>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="p-5">
            <fieldset className="rounded shadow mb-3">
              <legend className="text-black fw-bold mb-4">Data Diri</legend>
              <div className="mb-3">
                <label htmlFor="jenjang" className="form-label text-black">
                  Jenjang Pendaftaran
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
                  className={`form-control ${errors.nisn && "is-invalid"}`}
                  {...register("nisn", {
                    required: "NISN Wajib Di isi",
                    pattern: {
                      value: /^\d+$/,
                      message: "Hanya number saja",
                    },
                    minLength: {
                      value: 5,
                      message: "Minimal 5 karakter",
                    },
                  })}
                  onKeyUp={() => triger("nisn")}
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
                mb="3"
                className={`form-control ${errors.tempatLahir && "is-invalid"}`}
                {...register("tempatLahir", {
                  required: "Tempat Lahir Wajib Di isi",
                })}
                error={
                  errors.tempatLahir?.type === "required" && (
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
                <label className="text-black form-label">Jenis Kelamin</label>
                <div className="form-check">
                  <label className="form-check-label" htmlFor="male">
                    Laki-laki
                  </label>
                  <input
                    type="radio"
                    name="jk"
                    id="male"
                    value={"male"}
                    className={`form-check-input ${errors.jk && "is-invalid"}`}
                    {...register("jk", {
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
                    className={`form-check-input ${errors.jk && "is-invalid"}`}
                    name="jk"
                    id="female"
                    value={"female"}
                    {...register("jk", {
                      required: "Pilih Jenis Kelamin anda",
                    })}
                  />
                </div>
                {errors.jk?.type === "required" && (
                  <small className="text-danger"> {errors.jk.message}</small>
                )}
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
                <label className="text-black form-label">Kewarganegaraan</label>
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
                mb="3"
                className={`form-control ${errors.hp && "is-invalid"}`}
                {...register("hp", { required: "No. Hp Wajib Di isi" })}
                error={
                  errors.hp?.type === "required" && (
                    <small className="text-danger"> {errors.hp.message}</small>
                  )
                }
              />
            </fieldset>
            {jenjang === "ra" || jenjang === undefined ? (
              ""
            ) : (
              <fieldset className="rounded shadow mb-3">
                <legend className="text-black fw-bold mb-3">
                  Data Asal Sekolah
                </legend>
                <FormInput
                  label="Asal Sekolah"
                  name="asal-sekolah"
                  type="text"
                  mb="3"
                  className={`form-control ${
                    errors.asalSekolah && "is-invalid"
                  }`}
                  {...register("asalSekolah", { required: "Wajib di isi" })}
                  error={
                    errors.asalSekolah?.type === "required" && (
                      <small className="text-danger">
                        {" "}
                        {errors.asalSekolah.message}
                      </small>
                    )
                  }
                />
                <FormInput
                  label="No. Seri Ijazah"
                  name="ijazah"
                  type="text"
                  mb="3"
                  {...register("noIjazah")}
                />
              </fieldset>
            )}

            <fieldset className="rounded shadow mb-3">
              <legend className="text-black fw-bold mb-3">
                Data Orang Tua
              </legend>
              <FormInput
                label="Nama Ayah"
                name="nama-ayah"
                type="text"
                mb="3"
                className={`form-control ${errors.namaAyah && "is-invalid"}`}
                {...register("namaAyah", {
                  required: "Nama Ayah Wajib Di isi",
                })}
                error={
                  errors.namaAyah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.namaAyah.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="NIK Ayah"
                name="nik-ayah"
                type="number"
                mb="3"
                className={`form-control ${errors.nikAyah && "is-invalid"}`}
                {...register("nikAyah", { required: "NIK Ayah Wajib Di isi" })}
                error={
                  errors.nikAyah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nikAyah.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="Tahun Lahir"
                name="dob-ayah"
                type="number"
                mb="3"
                className={`form-control ${errors.dobAyah && "is-invalid"}`}
                {...register("dobAyah", {
                  required: "Tanggal Lahir Wajib Di isi",
                })}
                error={
                  errors.dobAyah?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.dobAyah.message}
                    </small>
                  )
                }
              />
              <div className="mb-3">
                <label htmlFor="pend-ayah" className="text-black form-label">
                  Pendidikan
                </label>
                <select
                  name="pend-ayah"
                  id="pend-ayah"
                  className={`form-select ${errors.pendAyah && "is-invalid"}`}
                  {...register("pendAyah", {
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
                {errors.pendAyah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pendAyah.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="pek-ayah" className="text-black form-label">
                  Pekerjaan
                </label>
                <select
                  name="pek-ayah"
                  id="pek-ayah"
                  className={`form-select ${errors.pekAyah && "is-invalid"}`}
                  {...register("pekAyah", {
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
                {errors.pekAyah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pekAyah.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="peng-ayah" className="text-black form-label">
                  Penghasilan Bulanan
                </label>
                <select
                  name="peng-ayah"
                  id="peng-ayah"
                  className={`form-select ${errors.pengAyah && "is-invalid"}`}
                  {...register("pengAyah", {
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
                {errors.pengAyah?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pengAyah.message}
                  </small>
                )}
              </div>
              <FormInput
                label="Kebutuhan Khusus"
                name="disabilitas-ayah"
                type="text"
                mb="5"
              />
              <hr className="mb-5" />
              <FormInput
                label="Nama Ibu"
                name="nama-ibu"
                type="text"
                mb="3"
                className={`form-control ${errors.namaIbu && "is-invalid"}`}
                {...register("namaIbu", {
                  required: "Nama Ibu wajib di isi",
                })}
                error={
                  errors.namaIbu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.namaIbu.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="NIK Ibu"
                name="nik-ibu"
                type="number"
                mb="3"
                className={`form-control ${errors.nikIbu && "is-invalid"}`}
                {...register("nikIbu", {
                  required: "NIK Ibu wajib di isi",
                })}
                error={
                  errors.nikIbu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.nikIbu.message}
                    </small>
                  )
                }
              />
              <FormInput
                label="Tahun Lahir"
                name="dob-ibu"
                type="number"
                mb="3"
                className={`form-control ${errors.dobIbu && "is-invalid"}`}
                {...register("dobIbu", {
                  required: "Tahun lahir Ibu wajib di isi",
                })}
                error={
                  errors.dobIbu?.type === "required" && (
                    <small className="text-danger">
                      {" "}
                      {errors.dobIbu.message}
                    </small>
                  )
                }
              />
              <div className="mb-3">
                <label htmlFor="pend-ibu" className="text-black form-label">
                  Pendidikan
                </label>
                <select
                  name="pend-ibu"
                  id="pend-ibu"
                  className={`form-select ${errors.pendIbu && "is-invalid"}`}
                  {...register("pendIbu", {
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
                {errors.pendIbu?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pendIbu.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="pek-ibu" className="text-black form-label">
                  Pekerjaan
                </label>
                <select
                  name="pek-ibu"
                  id="pek-ibu"
                  className={`form-select ${errors.namaIbu && "is-invalid"}`}
                  {...register("pekIbu", {
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
                {errors.pekIbu?.type === "required" && (
                  <small className="text-danger">
                    {" "}
                    {errors.pekIbu.message}
                  </small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="peng-ibu" className="text-black form-label">
                  Penghasilan Bulanan
                </label>
                <select name="peng-ibu" id="peng-ibu" className="form-select">
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
              />
            </fieldset>
            <fieldset className="rounded shadow mb-3">
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
