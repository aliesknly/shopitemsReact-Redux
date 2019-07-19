import React, {Component} from 'react';
//Component
import {Badge, ListGroupItem, } from 'reactstrap';

class OrderDetailItem extends Component {
    render() {
        const {children} = this.props;
        return (
            <ListGroupItem>
                <h4><Badge
                    color={'success'}>{`${children.quantity}`}</Badge>{` ${children.measure} ${children.product}`} </h4>
            </ListGroupItem>
        );
    }
}

OrderDetailItem.propTypes = {};

export default OrderDetailItem;
