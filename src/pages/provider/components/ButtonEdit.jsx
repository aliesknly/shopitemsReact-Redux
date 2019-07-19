import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {
    Button,
} from 'reactstrap';
//Actions
import {providerUpdateRequest, providerGetRequest} from "../../../actions";
//Components
import ProviderForm from "./ProviderForm";
import {FaPencilAlt} from "react-icons/fa";

class ButtonEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    };

    editChange = () => {
        const {providerGetRequest, idItem} = this.props;
        providerGetRequest(idItem);
    };

    render() {
        const {modal} = this.state;
        const {
            loadingSave, errorSave, loadingGet,
            providerUpdateRequest,
            idItem, provider
        } = this.props;
        return (
            <div>
                <Button color={'success'} onClick={() => {
                    this.toggle();
                    this.editChange()
                }} size={'lg'}><FaPencilAlt/></Button>

                <ProviderForm
                    modal={modal}
                    toggle={this.toggle}
                    loadingSave={loadingSave}
                    loadingGet={loadingGet}
                    errorSave={errorSave}
                    providerUpdateRequest={providerUpdateRequest}
                    idItem={idItem}
                    provider={provider}
                    edit={true}
                />
            </div>
        );
    }
}

ProviderForm.propTypes = {
    loadingSave: PropTypes.bool.isRequired,
    loadingGet: PropTypes.bool.isRequired,

    errorSave: PropTypes.bool.isRequired,
    providerUpdateRequest: PropTypes.func.isRequired,
    providerGetRequest: PropTypes.func.isRequired,
    idItem: PropTypes.number.isRequired,
    provider: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    loadingSave: state.providerUpdateStatusReducer.loading,
    errorSave: state.providerUpdateStatusReducer.error,
    provider: state.providerReducer.provider,
    loadingGet: state.providerGetStatusReducer.loading
});

const mapDispatchToProps = {
    providerUpdateRequest,
    providerGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonEdit);
