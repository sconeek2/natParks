import React from "react";
import "./CSS/home.css";
import Hero from "./Components/Hero";
import CardCaller from "./Components/CardCaller";

const Home = () => {
  return (
    <div className="home-container">
      <Hero
        link1="/search"
        link2="/mountains"
        link1text="Find a Park"
        link2text="Search Mountains"
      />
      <div className="about-us">
        <h3 className="section-header">About Us</h3>
        <p className="about-us-info">
          National Parks are like a canvas painted by the hand of nature, with
          each stroke revealing a masterpiece that is both breathtakingly
          beautiful and awe-inspiringly sublime. To visit a National Park is to
          embark on a journey of discovery, to traverse through the untamed
          wilderness and behold the sheer magnitude of the Earth's raw power and
          untold beauty.
        </p>
      </div>
      <CardCaller />
    </div>
  );
};

export default Home;
