//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Alert,} from 'reactstrap';
//Actions
import {messageClearSuccess} from "../../actions";

class MessageAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }

    onDismiss = () => {
        const {messageClearSuccess} = this.props;
        messageClearSuccess();
    };

    render() {
        const {visible, messages, color} = this.props;
        return (
            <Alert color={color} isOpen={visible} toggle={this.onDismiss} fade={true}>
                {messages}
            </Alert>
        );
    }
}

MessageAlert.propTypes = {
    messages: PropTypes.string,
    color: PropTypes.string,
    visible: PropTypes.bool,
    //--------------------------------
    messageClearSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    messages: state.messageReducer.messages,
    color: state.messageReducer.color,
    visible: state.messageReducer.visible,
});

const mapDispatchToProps = {
    messageClearSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageAlert);
