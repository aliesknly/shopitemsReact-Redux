import React, {Component} from 'react';
import moment from 'moment';
//Components
import OrderDetail from "./OrderDetail";

class OrderItem extends Component {
    render() {
        const {children, no} = this.props;
        return (
            <tr>
                <th>{no}</th>
                <td>{moment(children.date).fromNow()}</td>
                <td>{children.id_order}</td>
                <td>{children.quantity}</td>
                <td><OrderDetail id_order={children.id_order}/></td>
            </tr>
        );
    }
}

export default OrderItem;
