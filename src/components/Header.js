import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ( { loggedIn } ) => (
    <div>
        <a href="/">Home</a>&nbsp;&nbsp;&nbsp;
        <a href="/page1">Page 1</a>&nbsp;&nbsp;&nbsp;
        <a href="/page2">Page 2</a>
    </div>
);

const mapStateToProps = ( state ) => ( {
    loggedIn: state.loggedIn,
} );

export default connect( mapStateToProps )( Header );
