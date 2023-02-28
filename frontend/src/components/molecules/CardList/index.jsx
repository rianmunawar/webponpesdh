import React from "react";

function CardList() {
  const r = Math.floor(Math.random() * 200) + 100;
  const g = Math.floor(Math.random() * 200) + 100;
  const b = Math.floor(Math.random() * 200) + 100;
  // const color = rgba(r, g, b, 0.7);
  return (
    <div
      className={`border-bottom-1`}
      style={{ borderBottom: "1px solid #ececec" }}
    >
      <div className="card-inner d-flex align-items-center p-3">
        <div className="card-img w-25">
          <div
            className="card-img-box rounded-circle d-flex justify-content-center align-items-center"
            style={{
              width: 100,
              height: 100,
              backgroundColor: `rgba(${r}, ${g}, ${b}, 0.9)`,
            }}
          >
            <img
              src=""
              alt="Gambar"
              width={320}
              height={"auto"}
              className="rounded"
            />
          </div>
        </div>
        <div className="card-content w-75 ms-4">
          <div className="card-text">
            <h4 className="card-title">Judul Berita</h4>
            <h6 className="card-subtitle text-muted">18, januari 2023</h6>
          </div>
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
