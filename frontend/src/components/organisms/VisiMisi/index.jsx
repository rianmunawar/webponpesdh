import React from "react";

const VisiMisi = () => {
  const misi = [
    "Menciptakan pendidikan islam yang berbasis islamic behaviour",
    "Menanamkan pembiasaan nilai-nilai",
    "Mencerminkan lingkungan pesantren yang estetis higenis dan harmonis",
  ];
  return (
    <section className="visimisi__area mt-100 grey-bg py-5">
      <div className="container">
        <div className="visi__area" data-aos="fade-up">
          <h2 className="section__title">Visi</h2>
          <p>
            Lembaga pendidikan islam uang dipilih, disenangi, dan dibutuhkan
            masyarakat serta mengangkat harkat drajat manusia dengan ilmu dan
            amalnya.
          </p>
        </div>
        <div className="misi__area" data-aos="fade-up" data-aos-delay="400">
          <h2 className="section__title">Misi</h2>
          <ol>
            {misi.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        <div className="moto__area" data-aos="fade-up">
          <h2 className="section__title">Moto</h2>
          <p>
            Berakhlakul karimah, berbadan sehat, berwawasan luas, dan berfikir
            islami.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
