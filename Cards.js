import React from "react";

import babes from "./babes";

const Cards = () => {
  return (
    <section className="section">
      {babes.map((babe) => {
        const { id, image, title } = babe;
        return (
          <div key={id} className="card">
            <img src={image} alt={title} className="image" />
            <h2 className="title">{title}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
