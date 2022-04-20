import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Czym jest <span>krzyż celtycki?</span>
        <br />
        Dlaczego Mateusz wysnuł <span>alternatywną tezę?</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "krzyż",
  "app__whitebg"
);

// http://www.tydzien.co.uk/artykuly/2015/11/04/wizje-swiata-celtow
// https://www.kobieta.pl/artykul/magiczne-symbole-krzyz-celtycki
// https://stronakobiet.pl/krzyz-celtycki-znaczenie-historia-symbole-czym-sie-rozni-krzyz-grecki-od-jerozolimskiego-i-dlaczego-krzyz-celtycki-jest-zakazany/ar/c6-15295563
