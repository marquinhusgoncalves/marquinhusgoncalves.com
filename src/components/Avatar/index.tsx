import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Avatar = () => {
  return (
    <StaticImage
      src="../../images/marquinhus-goncalves.jpg"
      alt="Marquinhus Gonçalves"
      placeholder="blurred"
      width={200}
      height={200}
      style={{ borderRadius: "50%", marginBottom: "2em" }}
    />
  );
};

export default Avatar;
