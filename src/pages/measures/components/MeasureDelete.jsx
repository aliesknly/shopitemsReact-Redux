//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Component
import {
    Button, Spinner,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import {FaTrash} from "react-icons/fa";
//Actions
import {measureDeleteRequest} from "../../../actions";

class MeasureDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    handleDelete = () => {
        const {idItem} = this.props;
        this.props.measureDeleteRequest(idItem);
        this.toggle();
    };
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    };

    render() {
        const {loading} = this.props;
        const {modal} = this.state;
        return (
            <div>
                {(loading && <Spinner color={'danger'}/>) ||
                <Button size={'sm'} color={'danger'} onClick={this.toggle}><FaTrash/></Button>}
                <Modal isOpen={modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Confirm delete Measure
                    </ModalHeader>
                    <ModalBody>
                        <p>Surely you want to delete? </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                        <Button onClick={this.handleDelete} color={'danger'}>Accept</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

MeasureDelete.propTypes = {
    loading: PropTypes.bool.isRequired,
    measureDeleteRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.measureDeleteStatusReducer.loading
});

const mapDispatchToProps = {
    measureDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeasureDelete);
