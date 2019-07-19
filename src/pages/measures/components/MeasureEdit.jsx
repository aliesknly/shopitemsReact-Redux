import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Button} from 'reactstrap';
//Actions
import {measureUpdateRequest, measureGetRequest} from "../../../actions";
//Components
import MeasureForm from "./MeasureForm";
import {FaPencilAlt} from "react-icons/fa";

class MeasureEdit extends Component {
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
        const {measureGetRequest, idItem} = this.props;
        measureGetRequest(idItem);
    };

    render() {
        const {modal} = this.state;
        const {
            loadingSave, errorSave, loadingGet,
            measureUpdateRequest,
            idItem, measure
        } = this.props;
        return (
            <div>
                <Button color={'success'} onClick={() => {
                    this.toggle();
                    this.editChange()
                }} size={'sm'}><FaPencilAlt/></Button>

                <MeasureForm
                    modal={modal}
                    toggle={this.toggle}
                    loadingSave={loadingSave}
                    loadingGet={loadingGet}
                    errorSave={errorSave}
                    measureUpdateRequest={measureUpdateRequest}
                    idItem={idItem}
                    measure={measure}
                    edit={true}
                />
            </div>
        );
    }
}

MeasureEdit.propTypes = {
    loadingSave: PropTypes.bool.isRequired,
    loadingGet: PropTypes.bool.isRequired,
    measure:PropTypes.object,
    errorSave: PropTypes.bool.isRequired,
    measureUpdateRequest: PropTypes.func.isRequired,
    measureGetRequest: PropTypes.func.isRequired,
    idItem: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({

    loadingSave: state.measureUpdateStatusReducer.loading,
    errorSave: state.measureUpdateStatusReducer.error,
    measure: state.measureReducer.measure,
    loadingGet: state.measureGetStatusReducer.loading,
});

const mapDispatchToProps = {
    measureUpdateRequest,
    measureGetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasureEdit);
