import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Actions
import {measureAddRequest} from "../../../actions";
//Components
import {Button} from 'reactstrap';
import MeasureForm from "./MeasureForm";

class MeasureAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    };

    render() {
        const {modal} = this.state;
        const {measureAddRequest,loadingSave} = this.props;
        return (
            <div>
                <Button color={'info'} onClick={this.toggle}><strong>+</strong></Button>
                <MeasureForm
                    measureAddRequest={measureAddRequest}
                    loadingSave={loadingSave}
                    modal={modal}
                    edit={false}
                    toggle={this.toggle}/>
            </div>
        );
    }
}

MeasureAdd.propTypes = {
    loadingSave:PropTypes.bool.isRequired,
    measureAddRequest:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    loadingSave:state.measureAddStatusReducer.loading,
});

const mapDispatchToProps = {
    measureAddRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasureAdd);
