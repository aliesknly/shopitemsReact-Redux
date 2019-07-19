import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {
    Button,
} from 'reactstrap';
//Actions
import {providerAddRequest} from "../../../actions";
import ProviderForm from "./ProviderForm";

class ProviderAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            errors: []
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const {modal} = this.state;
        const {loadingSave,errorSave,providerAddRequest} = this.props;
        return (
            <div>
                <Button color={'info'} onClick={this.toggle}><strong>+</strong></Button>
                <ProviderForm
                    modal={modal}
                    toggle={this.toggle}
                    loadingSave={loadingSave}
                    errorSave={errorSave}
                    providerAddRequest={providerAddRequest}
                    edit={false}
                />
            </div>
        )
    }
}

ProviderForm.propTypes = {
    loadingSave: PropTypes.bool.isRequired,
    errorSave: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    loadingSave: state.providerAddStatusReducer.loading,
    errorSave: state.providerAddStatusReducer.error
});

const mapDispatchToProps = {
    providerAddRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderAdd);