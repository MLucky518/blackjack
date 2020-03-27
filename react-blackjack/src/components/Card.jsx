import React from 'react';
import { connect } from "react-redux";

function Card() {
    return (
        <div>
            <h1>Card</h1>
        </div>
    )
}

export default connect(mapStateToProps,{})(Card)
