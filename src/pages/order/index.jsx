import React, {Component} from 'react';
import OrderList from "./components/OrderList";

class Index extends Component {
    render() {
        return (
            <div>
                <h3>Orders</h3>
                <OrderList/>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;
