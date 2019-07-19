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
import {productDeleteRequest} from "../../../actions";

class ProductDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    handleDelete = () => {
        const {idItem,productDeleteRequest} = this.props;
        productDeleteRequest(idItem);
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
                <Button color={'danger'} onClick={this.toggle} size={'lg'}><FaTrash/></Button>}
                <Modal isOpen={modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Confirm delete MProduct
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

ProductDelete.propTypes = {
    loading: PropTypes.bool.isRequired,
    productDeleteRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.productDeleteStatusReducer.loading
});

const mapDispatchToProps = {
    productDeleteRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDelete);
