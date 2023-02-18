import axios from "axios";
import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Modal } from "react-bootstrap";
import IconYellowList from "../../atoms/IconYellowList";
// import styles
import Styles from "./gallery.module.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");
  const [data, setData] = useState([]);
  const endpoint = process.env.REACT_APP_ENDPOINT;

  useEffect(() => {
    axios.get(`${endpoint}/galeri`).then((res) => {
      setData(res.data.payload);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const imgSrc = e.target.src;
    setShow(true);
    setSrc(imgSrc);
  };

  const actionButton = (action) => {
    const index = data.findIndex((item) => item.image === src.split("/").pop());
    if (action === "next") {
      if (index === data.length - 1) {
        setSrc(`${endpoint}/${data[0].image}`);
      } else {
        setSrc(`${endpoint}/${data[index + 1].image}`);
      }
    } else {
      if (index === 0) {
        setSrc(`${endpoint}/${data[data.length - 1].image}`);
      } else {
        setSrc(`${endpoint}/${data[index - 1].image}`);
      }
    }
  };
  return (
    <section className="events__area pt-115 pb-120 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 offset-xxl-4">
            <div className="section__title-wrapper mb-60 text-center">
              <h2 className="section__title">
                <span className="yellow-bg yellow-bg-big">
                  Galeri
                  <IconYellowList />
                </span>
              </h2>
              <p>Documentasi kegiatan ponpes Darul Hikmah</p>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          className={Styles["my-modal"]}
          centered
          dialogClassName={Styles["modal-wrapper"]}
          contentClassName={Styles["content-wrapper"]}
        >
          <Modal.Body className={Styles["modal-body"]}>
            {/* button close */}
            <button
              className={Styles["btn-control-close"]}
              onClick={handleClose}
            >
              <i className="fas fa-times"></i>
            </button>
            <button
              className={Styles["btn-control-prev"]}
              onClick={() => actionButton("prev")}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <img src={src} alt={src} />
            <button
              className={Styles["btn-control-next"]}
              onClick={() => actionButton("next")}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </Modal.Body>
        </Modal>

        <div className="row gy-4 p-0">
          <div className="gallery-wrapper">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1rem">
                {data.map((item, index) => (
                  <img
                    src={`${endpoint}/${item.image}`}
                    key={index}
                    alt="gambar"
                    onClick={handleShow}
                    className="image"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
