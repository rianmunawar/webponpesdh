import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat2 cat4">
      <div className="blog__wrapper">
        <div className="blog__item white-bg mb-30 transition-3 fix">
          <div className="blog__thumb w-img fix">
            <a href={props.linkTarget}>
              <img src={props.imgUrl} alt={props.imgAlt} />
            </a>
          </div>
          <div className="blog__content">
            <div className="blog__tag">
              <a href="#">{props.tag}</a>
            </div>
            <h3 className="blog__title">
              <a href={props.linkTarget}>{props.title}</a>
            </h3>
            <div className="blog__meta d-flex align-items-center justify-content-between">
              <div className="blog__author d-flex align-items-center">
                <div className="blog__author-thumb mr-10">
                  <img src={props.authorPic} alt="gambar" />
                </div>
                <div className="blog__author-info">
                  <h5>{props.author}</h5>
                </div>
              </div>
              <div className="blog__date d-flex align-items-center">
                <i className="fal fa-clock" />
                <span>{props.updatedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorPic: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  linkTarget: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default Card;
