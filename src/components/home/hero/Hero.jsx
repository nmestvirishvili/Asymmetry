import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div
            style={{
              position: "relative",
              zIndex: 9999,
              width: "900px",
              textAlign: "center",
            }}
          >
            <h1>შენი სამგანზომილებიანი მოთხოვნების დასაკმაყოფილებლად</h1>
          </div>
        </div>
        <div className="backdrop" />
      </section>
    </>
  );
};

export default Hero;
