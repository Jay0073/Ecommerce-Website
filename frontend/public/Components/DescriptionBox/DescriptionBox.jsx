import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox_navigator">
        <div className="descriptionbox_nav_box">Description</div>
        <div className="descriptionbox_nav_box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox_description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nam
          placeat cum alias ex? Quo ipsum corrupti, commodi suscipit esse
          explicabo dolorum sint quis voluptatibus neque ad eaque quia culpa.
          Aut sint deleniti dignissimos ad error eius ipsa ea. Maxime!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde itaque
          saepe, amet dignissimos nisi aperiam excepturi! Consectetur sunt
          asperiores aut sapiente quas iusto. Quis, quae!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
