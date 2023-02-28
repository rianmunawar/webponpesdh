import React, { useEffect, useState } from "react";
import axios from "axios";
import IconYellowList from "../../../atoms/IconYellowList";

function GalleryList() {
  const [gallery, setGallery] = useState([]);
  const endpoint = process.env.REACT_APP_ENDPOINT;
  useEffect(() => {
    async function getGallery() {
      const response = await axios.get(`${endpoint}/galeri`);
      setGallery(response.data.payload);
    }
    getGallery();
  }, []);
  console.log(gallery);
  return (
    <section className="gallery-list mt-5">
      <div className="container">
        <div className="mb-3 header-content row">
          <div className="col-12 col-lg-8">
            <div className="text-wrapper">
              <h1 className="section__title">List Foto Galeri</h1>
              <p className="">
                Kumpulan foto dokumentasi kegiatan ponpes Darul Hikmah
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 justify-content-end">
            <div className="add-button">
              <button className="btn btn-primary">
                {" "}
                <i className="fas fa-plus"></i> Tambah Foto
              </button>
            </div>
          </div>
        </div>
        <table className="table">
          <thead className="">
            <tr className="table-primary">
              <th>#</th>
              <th>Preview</th>
              <th>Kegiatan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {" "}
                  <img
                    src={`${endpoint}/${item.image}`}
                    alt={item.title}
                    width="100"
                  />{" "}
                </td>
                <td>{item.title}</td>
                <td>
                  {" "}
                  <button className="btn btn-warning">
                    <i className="fas fa-edit"></i>
                  </button>{" "}
                  <button className="btn btn-danger">
                    <i className="fas fa-trash"></i>
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default GalleryList;
