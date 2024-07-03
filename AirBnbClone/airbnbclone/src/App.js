import React from "react";
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
// import img from "./img/c1.png";
import data from "./data.js";

export default function App() {
  const cardhere = data.map((card) => {
    return (
      <Card
        key={card.id}
        // coverImg={card.coverImg}
        // rating={card.stats.rating}
        // reviewcount={card.stats.reviewcount}
        // location={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots}
        // cleaning it by passing the whole object
        item={card}
        // to make it the same the old way
        // use {...card}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <section
        className="cards--list
      "
      >
        {cardhere}
      </section>
    </div>
  );
}
