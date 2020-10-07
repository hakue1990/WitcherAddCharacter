import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form onSubmit={props.submitFn}>
      <h1>add new item</h1>
      <br />
      <input type="text" placeholder="name" />
      <input type="text" placeholder="link" />
      <input type="text" placeholder="image" />
      <input type="textarea" placeholder="description" />
      <button type="submit">add item</button>
    </form>
  );
};

export default Form;
