//Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//Components
import Header from "./structure/header";
import List from '../helpers/url'
import Footer from "./structure/footer";
import Body from "./structure/body";
//Actions
import {userCheckAuthRequest} from "../actions";
//Assets
import Spinner from "reactstrap/es/Spinner";

class Shape extends Component {
    componentDidMount = () => {
        this.props.userCheckAuthRequest();
    };

    render() {
        const {children, authStatus, checkLoading} = this.props;

        return (
            <div>
                {authStatus && <Header items={List}/>}
                <div>
                    {(checkLoading && <Spinner color={'danger'} type={'grow'}/>) ||
                    <Body>
                        {children}
                    </Body>
                    }
                    <Footer className="footer"/>
                </div>
            </div>
        );
    }
}

Shape.propTypes = {
    children: PropTypes.object.isRequired,
    authStatus: PropTypes.bool.isRequired,
    checkLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    authStatus: state.userAuthStatusReducer.authStatus,
    checkLoading: state.userCheckAuthStatus.loading,
});

const mapDispatchToProps = {
    userCheckAuthRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(Shape);