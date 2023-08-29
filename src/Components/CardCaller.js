import React from "react";
import "../CSS/cardCaller.css";
import Card from "../Components/Card";
import mountain1 from "../images/mountains/Cannon-StoryImg_2.jpg";
import mountain2 from "../images/mountains/WildcatD-StoryImg.jpg";
import mountain3 from "../images/mountains/Tripyramids-StoryImg_2.jpg";
import mountain4 from "../images/mountains/Zeacliff-StoryImg_2.jpg";

const CardCaller = () => {
  return (
    <div className="caller-container">
      <h3 className="section-header" id="about-header">
        Explore Top Rated Parks
      </h3>
      <div div className="card-call-container">
        <Card
          src={mountain1}
          text="Visiting Yellowstone National Park was an unforgettable experience. From the iconic geysers to the abundant wildlife, the park offered a stunning display of nature's beauty."
        />
        <Card
          src={mountain2}
          text="WildcatD National Park is a hidden gem for adventurous travelers, with rugged hiking trails and breathtaking scenic views that are sure to leave a lasting impression."
        />
        <Card
          src={mountain3}
          text="Tripyramids National Park is home to some of the most awe-inspiring rock formations in the world, with towering peaks and jagged ridges that will take your breath away."
        />
        <Card
          src={mountain4}
          text="Zeacliff National Park boasts some of the most picturesque views in the country, with miles of verdant forests and tranquil lakes that are sure to put your mind at ease."
        />
      </div>
    </div>
  );
};

export default CardCaller;
