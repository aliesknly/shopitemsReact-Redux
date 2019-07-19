//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {
    Button, Modal, ModalHeader, ModalFooter, Badge, ListGroup, ListGroupItem, Alert, Spinner
} from 'reactstrap';
import {FaShoppingCart, FaCreditCard} from "react-icons/fa";
import BuyItemCard from "./BuyItemCard";
//Actions
import {orderDeleteRequest, checkoutAddRequest} from "../../../actions";

class BuyCar extends Component {
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

    addCheckOut = () => {
        const {checkoutAddRequest, listItems} = this.props;
        checkoutAddRequest(listItems);
        this.toggle();
    };

    render() {
        const {listItems, orderDeleteRequest, loadingCheckout, loadingSend} = this.props;
        return (
            <div>
                <Button onClick={this.toggle} color={'warning'}>
                    <FaShoppingCart/>{' '}
                    <Badge color={'success'}>{listItems.length}</Badge>
                </Button>
                <Modal toggle={this.toggle} isOpen={this.state.modal}>
                    <ModalHeader toggle={this.toggle}>
                        <FaShoppingCart/>{` ShopCart`} {(loadingCheckout || loadingSend) &&
                    <Spinner color={'primary'}/>}
                    </ModalHeader>
                    <ListGroup>
                        {
                            ( listItems.length === 0 && <ListGroupItem><Alert color={'secondary'}>No items have been
                                added</Alert></ListGroupItem> )||
                            listItems.map((item, key) => (
                                <BuyItemCard key={key}
                                             no={key}
                                             children={item}
                                             orderDeleteRequest={orderDeleteRequest
                                             }/>
                            ))
                        }
                    </ListGroup>
                    <ModalFooter>
                        <Button color={'primary'} block
                                disabled={listItems.length < 1 && true}
                                onClick={this.addCheckOut}>
                            <FaCreditCard/>{' CheckOut'}</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

BuyCar.propTypes = {
    listItems: PropTypes.array.isRequired,
    loadingItems: PropTypes.bool.isRequired,
    loadingCheckout: PropTypes.bool.isRequired,
    loadingSend: PropTypes.bool.isRequired,
    checkoutAddRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    listItems: state.orderReducer.list,
    loadingItems: state.orderAddStatusReducer.loading,
    loadingCheckout: state.checkoutAddStatusReducer.loading,
    loadingSend: state.checkoutSendStatusReducer.loading,
});

const mapDispatchToProps = {
    orderDeleteRequest,
    checkoutAddRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyCar);
