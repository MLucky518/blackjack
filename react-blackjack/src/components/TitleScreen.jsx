import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TitleScreen = () => (
  <div>
    <h1>Title</h1>
    <Link to="/gameboard">
      <button>Start</button>
    </Link>
  </div>
);

export default connect(null, {})(TitleScreen);
