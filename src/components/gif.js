import { useEffect, useState } from "react";
import "../check.css";
const Gifs = (props) => {
  console.log(props);
  return (
    <div className="m-3">
      <img src={props.url} className="rounded h-3/5 img-circle"></img>
      <h1 className="text-center">{props.title}</h1>
    </div>
  );
};
export default Gifs;
