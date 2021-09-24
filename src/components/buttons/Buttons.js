import React from "react";
import './Buttons.css'

export const SmallButton = (props) => {
  return (
    <>
      <button className="btn btn-small">{props.children}</button>
    </>
  );
};

export const BigButton = (props) => {
  return (
    <>
      <button className="btn btn-big">{props.children}</button>
    </>
  );
};
