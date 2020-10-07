import React from "react";
import "./ListItem.css";

const ListItem = (props) => (
  <li className="listItem__wrapper">
    <img className={"listItem__image"} src={props.image} alt="danabramov" />
    <div>
      <h3 className="listItem__name">{props.name}</h3>
      <p className="listItem__description">
        {props.description}
        <br />
      </p>
      <a className="listItem__button" href={props.link} target="blank">
        visit Wiki
      </a>
    </div>
  </li>
);

export default ListItem;
