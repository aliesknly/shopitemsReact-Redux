//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Button, Modal, ModalFooter, ModalHeader, Spinner} from 'reactstrap';
import {FaList,} from "react-icons/fa";
//Actions
import {checkoutGetRequest} from "../../../actions";
import OrderDetailItem from "./OrderDetailItem";

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        if (!this.state.modal)
            this.loadListDetails();
    };

    loadListDetails = () => {
        const {id_order, checkoutGetRequest} = this.props;
        checkoutGetRequest(id_order);
    };

    render() {
        const {loadingDetails, listDetails} = this.props;
        return (
            <div>
                <Button onClick={this.toggle}><FaList/></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Order Details</ModalHeader>
                    {
                        (loadingDetails && <Spinner color={'primary'}/>) ||
                        listDetails.map((item, key) => (
                            <OrderDetailItem key={key}>{item}</OrderDetailItem>
                        ))
                    }
                    <ModalFooter>
                        <Button onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

OrderDetail.propTypes = {
    listDetails: PropTypes.array,
    loadingDetails: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    listDetails: state.checkoutReducer.details,
    loadingDetails: state.checkoutGetStatusReducer.loading,
});
const mapDispatchToProps = {
    checkoutGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
