//Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";
//Components
//Actions
import {userCheckAuthRequest} from "./actions";

const PrivateRoutes = ({component: Component, authStatus,...rest}) => {

    return <Route {...rest} render={(props) => (
        authStatus === true
            ? <Component {...props} />
            : <Redirect to='/'/>
    )}
    />
};

PrivateRoutes.propTypes = {
    authStatus: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    authStatus: state.userAuthStatusReducer.authStatus,
});

const mapDispatchToProps = {
    userCheckAuthRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes)