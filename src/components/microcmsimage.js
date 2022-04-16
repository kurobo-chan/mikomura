import * as React from "react";
import Imgix from "react-imgix";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import lazysizes from "lazysizes";
import "lazysizes/plugins/blur-up/ls.blur-up";
import "./lazysizes.css";

lazysizes.cfg.blurupMode = "always";

const MicroCmsImg = (props) => {
  const url = props.imgUrl;
  const alt = props.imgAlt;
  const width = props.imgWidth;
  const height = props.imgHeight;
  const sizes = props.imgSizes;
  return (
    <React.Fragment>
      <Imgix
        src={url}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className="lazyload blur"
        attributeConfig={{
          src: "data-src",
          srcSet: "data-srcset",
          sizes: "data-sizes",
        }}
        htmlAttributes={{
          "data-lowsrc": url,
        }}
      />
    </React.Fragment>
  );
};
export default MicroCmsImg;
