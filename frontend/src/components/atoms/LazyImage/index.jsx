import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = React.forwardRef((props, ref) => {
  const { src, alt, scrollPosition, ...rest } = props;
  return (
    <LazyLoadImage
      ref={ref}
      effect="blur"
      src={src}
      alt={alt}
      scrollPosition={scrollPosition}
      {...rest}
    />
  );
});

export default trackWindowScroll(LazyImage);
