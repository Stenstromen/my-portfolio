import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Badge = ({ className, alt, src }) => {
  const placeholder =
    "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221%22%20height%3D%221%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22transparent%22%20%2F%3E%3C%2Fsvg%3E";

  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          observer.disconnect();
        }
      });
    });

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src]);

  return <img ref={imgRef} className={className} alt={alt} src={placeholder} />;
};

Badge.propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
};

export default Badge;
