import React from "react";
import imgHomeBanner from "../../assets/images/img.png";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner text="Chez vous, partout et ailleurs" image={imgHomeBanner} />
      <Gallery />
    </div>
  );
};

export default Home;
