import React from "react";
import ListItem from "../ListItem/ListItem";
import "./ListWrapper.css";

const ListWrapper = (props) => {
  const items = props.items.map((account) => (
    <ListItem
      key={account.name}
      image={account.image}
      name={account.name}
      description={account.description}
      link={account.twitterLink}
    />
  ));
  return <ul className="ListWrapper__wrapper">{items}</ul>;
};

export default ListWrapper;
