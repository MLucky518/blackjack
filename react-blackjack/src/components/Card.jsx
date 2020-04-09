import React from "react";
import { connect } from "react-redux";

function Card(props) {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

export default connect(null, {})(Card);
