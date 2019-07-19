import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroupItem, Badge,Modal,ModalHeader,ModalBody,ModalFooter} from "reactstrap";
import {FaTrash} from "react-icons/fa";

class BuyItemCard extends Component {
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

    deleteItem = () => {
        const {children} = this.props;
        this.props.orderDeleteRequest(children.product_id);
        this.toggle();
    };

    render() {
        const {children} = this.props;
        return (
            <ListGroupItem style={styles.container}>
                <div style={styles.box}>
                    <h4><Badge color={'success'}>{`${children.quantity}`}</Badge>{` ${children.measure} ${children.name}`}</h4>
                </div>

                <Button size={'sm'} color={'danger'} onClick={this.toggle}><FaTrash/></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Remove {children.name} from Cart</ModalHeader>
                    <ModalBody>Surely you want to delete the product?</ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                        <Button color={'danger'} onClick={this.deleteItem}>Accept</Button>
                    </ModalFooter>
                </Modal>
            </ListGroupItem>
        );
    }
}

BuyItemCard.propTypes = {
    children: PropTypes.object.isRequired
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    element: {
        margin: '10px'
    }
};

export default BuyItemCard;
