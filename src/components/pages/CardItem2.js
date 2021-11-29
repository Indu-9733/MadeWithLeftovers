import React from "react";
import { Link } from "react-router-dom";

function CardItem2(props) {
  return (
    <>
      <li className="cards__item__link">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="Travel Image"
            src={props.src}
          />
        </figure>
        <div className="cards__item__info">
          <a className="cards__item__text" href={props.href}>
            {props.text}
          </a>
        </div>
      </li>
    </>
  );
}
export default CardItem2;
