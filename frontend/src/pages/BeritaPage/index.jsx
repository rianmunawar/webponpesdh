import React from "react";
import BannerPage from "../../components/molecules/BannerPage";
import Card from "../../components/molecules/Card";
import Layouts from "../../layouts";
import image1 from "../../assets/img/blog/blog-1.jpg";
import authorPic from "../../assets/img/blog/blog-1.jpg";

const BeritaPage = () => {
  return (
    <Layouts>
      <BannerPage title="Blog & Informasi" />
      <div className="container">
        <div className="berita__wrapper p-4">
          <div className="row grid">
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              authorPic={authorPic}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              authorPic={authorPic}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
            <Card
              title="Maulid Nabi Muhammad SAW"
              linkTarget="/detail"
              tag="islami"
              imgAlt="gambar"
              imgUrl={image1}
              authorPic={authorPic}
              author="admin"
              updatedAt="Juni, 12 2022"
            />
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default BeritaPage;
