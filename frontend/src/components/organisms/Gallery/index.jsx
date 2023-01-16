import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import IconYellowList from "../../atoms/IconYellowList";
import "./gallery.css";

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    const imgSrc = e.target.src;
    setShow(true);
    setSrc(imgSrc);
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
        <div className="row">
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            className="modal bg-black-50"
            centered
            dialogClassName="modal-dialog"
            contentClassName="modal-content"
          >
            <Modal.Body>
              <img src={src} alt="gambar" className="image-gallery w-100" />
            </Modal.Body>
          </Modal>
          <img
            src="https://unsplash.it/1200/768.jpg?image=251"
            alt="gambar"
            onClick={handleShow}
            className="image-gallery col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 h-100"
          />
          <img
            src="https://unsplash.it/1200/768.jpg?image=253"
            alt="gambar"
            onClick={handleShow}
            className="image-gallery col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 h-100"
          />
          <img
            src="https://unsplash.it/1200/768.jpg?image=254"
            alt="gambar"
            onClick={handleShow}
            className="image-gallery col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 h-100"
          />
        </div>
        {/* <div className="row">
          <iframe
            src="https://snapwidget.com/embed/1021954"
            className="snapwidget-widget"
            allowTransparency="true"
            frameBorder={0}
            scrolling="yes"
            style={{ border: "none", overflow: "hidden", width: "100%" }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
