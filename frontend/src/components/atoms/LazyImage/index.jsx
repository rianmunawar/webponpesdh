import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LazyImage({ src, alt, scrollPosition, ...props }) {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      scrollPosition={scrollPosition}
      {...props}
    />
  );
}

export default trackWindowScroll(LazyImage);
