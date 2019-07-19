//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Table, Spinner} from 'reactstrap';
//Actions
import {checkoutListRequest,} from "../../../actions";
import OrderItem from "./OrderItem";

class OrderList extends Component {


    componentDidMount = () => {
        const {checkoutListRequest} = this.props;
        checkoutListRequest();
    };

    render() {
        const {listOrder, loadingList} = this.props;
        return (
            (loadingList && <Spinner color={'primary'}/>) ||
            <Table striped responsive>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>ID Order</th>
                    <th>Quantity</th>
                    <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                {
                    listOrder.map((item, key) => (
                        <OrderItem key={key} no={key + 1}>{item}</OrderItem>
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

OrderList.propTypes = {
    listOrder: PropTypes.array.isRequired,
    //-------------------------------------------
    loadingList: PropTypes.bool.isRequired,
    //-------------------------------------------
    checkoutListRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    listOrder: state.checkoutReducer.list,
    loadingList: state.checkoutListStatusReducer.loading
});

const mapDispatchToProps = {
    checkoutListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
