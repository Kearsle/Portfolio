import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div id="projects" className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/test.jpeg"
              title="Project 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
            <CardItem
              src="images/test.jpeg"
              title="Project 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
            <CardItem
              src="images/test.jpeg"
              title="Project 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/test.jpeg"
              title="Project 4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
            <CardItem
              src="images/test.jpeg"
              title="Project 5"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
            <CardItem
              src="images/test.jpeg"
              title="Project 6"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar dolor urna, non bibendum lorem tempus vel. In at arcu at urna accumsan vestibulum. Donec dignissim, risus a tincidunt malesuada, velit dui aliquet sem, ac sagittis eros neque sit amet nunc. Fusce facilisis eu magna vel dictum."
              path="/test"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
